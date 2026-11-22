/* Satr app: theme/lang persistence, header/footer render, code-rain canvas, progress/watch engine, helpers. */
(function(){
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const store={
    get:(k,d)=>{try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},
    set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  };
  let lang=store.get('satr_lang','ar'), theme=store.get('satr_theme','dark');
  const T=()=>window.I18N[lang];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function applyRoot(){
    document.documentElement.lang=lang; document.documentElement.dir=T().dir;
    document.body.dataset.theme=theme;
  }
  function totals(c){
    let lessons=0, secs=0;
    c.syllabus.forEach(u=>u.lessons.forEach(l=>{if(!l[3])return;lessons++;const m=/(\d+):(\d+)/.exec(l[2]);if(m)secs+=(+m[1])*60+(+m[2]);}));
    return {lessons, mins:Math.max(1,Math.round(secs/60))};
  }
  function trackOf(id){return window.SATR.tracks.find(t=>t.id===id)}

  /* تتبع التقدم: لكل درس {watched ثوانٍ، pct، done، pos} — يُحفَظ على جهاز الزائر */
  const prog={
    all(){return store.get('satr_prog',{})},
    key:(c,i)=>c+'/'+i,
    get(c,i){return this.all()[this.key(c,i)]||{watched:0,pct:0,done:false,pos:0}},
    set(c,i,r){const p=this.all();p[this.key(c,i)]=r;store.set('satr_prog',p)}
  };
  function flatLessons(c){
    const out=[];
    c.syllabus.forEach((u,ui)=>u.lessons.forEach((l,li)=>out.push({ui,li,flat:out.length,ar:l[0],en:l[1],dur:l[2],unitAr:u.ar,unitEn:u.en,yt:l[3]||null,vsrc:l[4]||null})));
    return out;
  }
  function isUnlocked(c,i){
    const fl=flatLessons(c);
    if(!fl[i]||!fl[i].yt)return true;
    for(let j=0;j<i;j++)if(fl[j].yt&&!prog.get(c.id,j).done)return false;
    return true;
  }
  function coursePct(c){
    const fl=flatLessons(c).filter(l=>l.yt); if(!fl.length)return null;
    return Math.round(fl.filter(l=>prog.get(c.id,l.flat).done).length/fl.length*100);
  }
  /* قياس المشاهدة الفعلية من مشغّل يوتيوب المضمّن؛ يكتمل الدرس عند 90٪ مشاهدة حقيقية */
  function watchYt(mountId,les,courseId,flat,onChange){
    let rec=prog.get(courseId,flat), lastT=0, saveTimer=null;
    const commit=()=>prog.set(courseId,flat,rec);
    const throttled=()=>{if(saveTimer)return;saveTimer=setTimeout(()=>{saveTimer=null;commit()},1000)};
    const markDone=()=>{rec.pct=100;rec.done=true;rec.pos=0;};
    const start=()=>{
      const player=new YT.Player(mountId,{videoId:les.yt,playerVars:{rel:0,modestbranding:1,enablejsapi:1},events:{
        onReady:e=>{const dur=e.target.getDuration()||0; if(rec.pos>2&&!rec.done&&dur&&rec.pos<dur-2)e.target.seekTo(rec.pos,true);},
        onStateChange:e=>{
          if(e.data===YT.PlayerState.ENDED){const dur=e.target.getDuration()||0; if(!rec.done&&dur&&(rec.watched||0)>=dur*0.9)markDone(); commit();onChange(rec);}
          if(e.data===YT.PlayerState.PLAYING)lastT=e.target.getCurrentTime();
        }
      }});
      window.SatrPlayer=player;
      setInterval(()=>{
        if(!player||!player.getPlayerState)return;
        if(player.getPlayerState()===YT.PlayerState.PLAYING){
          const ct=player.getCurrentTime(), d=ct-lastT; lastT=ct;
          const dur=player.getDuration()||0;
          if(!rec.done&&dur&&d>0&&d<=2.1){
            rec.watched=Math.min(dur,(rec.watched||0)+d);
            rec.pct=rec.watched/dur*100;
            if(rec.pct>=90)markDone();
          }
          if(!rec.done)rec.pos=ct;
          onChange(rec);throttled();
        }else if(player.getCurrentTime){lastT=player.getCurrentTime();}
      },1000);
    };
    if(window.YT&&window.YT.Player){start();}
    else{
      const prev=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{if(prev)prev();start();};
      if(!document.getElementById('yt-api')){const sc=document.createElement('script');sc.id='yt-api';sc.src='https://www.youtube.com/iframe_api';document.head.appendChild(sc);}
    }
  }

  function header(active){
    const t=T();
    const el=document.createElement('header');
    el.innerHTML=`<div class="wrap bar">
      <a class="logo" href="index.html"><span class="glyph">~/</span><span>${esc(t.brand)}<span style="color:var(--acc)">.</span></span></a>
      <button class="icon-btn burger" aria-label="${esc(t.a11y.menu)}" id="burger">☰</button>
      <nav id="nav">
        <a href="index.html" data-p="index">${esc(t.nav.home)}</a>
        <a href="courses.html" data-p="courses">${esc(t.nav.courses)}</a>
        <a href="playground.html" data-p="playground">${esc(t.nav.playground)}</a>
        <a href="credits.html" data-p="credits">${esc(t.nav.credits)}</a>
      </nav>
      <div class="tools">
        <button class="icon-btn" id="langBtn" title="Language">${esc(t.a11y.lang)}</button>
        <button class="icon-btn" id="themeBtn" aria-label="${esc(t.a11y.theme)}">${theme==='dark'?'☀':'☾'}</button>
      </div>
    </div>`;
    el.querySelectorAll('nav a').forEach(a=>{if(a.dataset.p===active)a.classList.add('on')});
    el.querySelector('#burger').onclick=()=>el.querySelector('#nav').classList.toggle('open');
    el.querySelector('#langBtn').onclick=()=>{lang=lang==='ar'?'en':'ar';store.set('satr_lang',lang);location.reload()};
    el.querySelector('#themeBtn').onclick=()=>{theme=theme==='dark'?'light':'dark';store.set('satr_theme',theme);document.body.dataset.theme=theme;el.querySelector('#themeBtn').textContent=theme==='dark'?'☀':'☾'};
    document.body.prepend(el);
  }
  function footer(){
    const t=T();
    const el=document.createElement('footer');
    el.innerHTML=`<div class="wrap foot">
      <span>${esc(t.footer.rights)}</span>
      <a class="mono" href="https://www.linkedin.com/in/zaynab-aboutwylah-b71a79314" target="_blank" rel="noopener">${esc(t.footer.made)}</a>
    </div>`;
    document.body.appendChild(el);
  }
  function courseCard(c){
    const tr=trackOf(c.track), tt=totals(c), t=T();
    const pct=coursePct(c);
    return `<a class="card cover hov" href="course.html?id=${c.id}" style="color:inherit">
      <img src="assets/img/cover-${c.track}.svg" alt="" loading="lazy" style="width:100%;aspect-ratio:16/8;object-fit:cover">
      <div class="body">
        <span class="tag" style="border-color:${tr.color};color:${tr.color}">${esc(tr[lang]||tr.name)}</span>
        <h3 style="margin:.1rem 0">${esc(c.title[lang])}</h3>
        <p class="muted small" style="margin:0">${esc(c.desc[lang])}</p>
        <div class="meta"><span>${esc(c.level[lang])}</span>${tt.lessons?`<span>${tt.lessons} ${esc(t.course.lessons)}</span><span>${tt.mins} ${esc(t.course.mins)}</span>`:`<span>${esc(t.course.soon)}</span>`}</div>
        ${pct!==null&&pct>0?`<div class="cprog"><i style="width:${pct}%"></i><span>${pct}%</span></div>`:''}
      </div></a>`;
  }
  /* code rain: subtle, reduced-motion aware, cheap on small screens */
  function rain(){
    const cv=document.createElement('canvas'); cv.id='rain'; document.body.prepend(cv);
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx=cv.getContext('2d');
    const glyphs='01{}[]()<>/=+;#$%&*~:.'; let cols=[], W,H, fs=15, raf, last=0;
    function size(){W=cv.width=innerWidth*devicePixelRatio;H=cv.height=innerHeight*devicePixelRatio;
      const n=Math.min(70,Math.floor(innerWidth/22));
      cols=Array.from({length:n},(_,i)=>({x:i*(W/n)+Math.random()*20,y:Math.random()*H,sp:(0.4+Math.random()*0.8)*devicePixelRatio}));}
    function frame(ts){
      raf=requestAnimationFrame(frame);
      if(ts-last<50)return; last=ts; /* ~20fps, gentle */
      ctx.fillStyle=getComputedStyle(document.body).getPropertyValue('--bg').trim()||'#0b0f16';
      ctx.globalAlpha=.18; ctx.fillRect(0,0,W,H); ctx.globalAlpha=1;
      ctx.font=`${fs*devicePixelRatio}px 'JetBrains Mono',monospace`;
      const dark=document.body.dataset.theme!=='light';
      cols.forEach(c=>{
        const ch=glyphs[Math.random()*glyphs.length|0];
        ctx.fillStyle=Math.random()<.12?'#39d98a':(dark?'#1e3a4d':'#9fb4cc');
        ctx.fillText(ch,c.x,c.y);
        c.y+=c.sp*fs; if(c.y>H+40){c.y=-20;c.sp=(0.4+Math.random()*0.8)*devicePixelRatio;}
      });
    }
    size(); addEventListener('resize',size);
    if(!reduced){raf=requestAnimationFrame(frame);
      document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else raf=requestAnimationFrame(frame);});
    } else { /* static sprinkle for reduced motion */
      ctx.font=`${fs*devicePixelRatio}px 'JetBrains Mono',monospace`;
      for(let i=0;i<400;i++){ctx.fillStyle='rgba(57,217,138,.10)';ctx.fillText(glyphs[Math.random()*glyphs.length|0],Math.random()*W,Math.random()*H);}
    }
  }
  window.SATR_APP={T:()=>T(),lang:()=>lang,esc,totals,trackOf,courseCard,store,prog,flatLessons,isUnlocked,coursePct,watchYt};
  document.addEventListener('DOMContentLoaded',()=>{
    applyRoot(); header(document.body.dataset.page||''); footer(); rain();
    if(window.PAGE_INIT)window.PAGE_INIT();
  });
})();

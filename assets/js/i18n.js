/* Satr i18n — general-audience Arabic (no gendered second person), English toggle. */
window.I18N = {
  ar: {
    dir:'rtl', lang:'ar',
    brand:'سطر', tagline:'تعلم البرمجة سطرًا سطرًا',
    nav:{home:'الرئيسية', courses:'المسارات', playground:'ساحة التجربة', credits:'الاعتمادات'},
    hero:{
      kicker:'منصة تعليم برمجة',
      title:'تعلم البرمجة <em>سطرًا سطرًا</em>',
      lede:'مسارات منظمة في خمس تقنيات أساسية، من أول سطر برمجي حتى مشاريع كاملة. المحتوى مكتوب بعناية مبرمج يعرف أين يتعثر المتعلم ولماذا.',
      cta1:'استعرض المسارات', cta2:'جرّب ساحة التجربة'
    },
    terminal:{title:'hello.js — مثال حي'},
    sections:{tracks:'المسارات', tracksSub:'خمس لغات وتقنيات، لكل منها طريق واضح.',
              story:'صنعها مبرمج', how:'كيف تسير الرحلة؟'},
    story:{
      title:'صُنعت هذه المنصة على يد مبرمج',
      p1:'كل درس هنا مرّ بيد من يكتب الشيفرة يوميًا: الأمثلة قابلة للتشغيل، والأخطاء الشائعة موثقة قبل أن تقع فيها، والمشاريع صغيرة بما يكفي لتنهيها وكبيرة بما يكفي لتتعلم منها.',
      p2:'لا وعود براقة ولا اختصارات سحرية. منهج واضح، وتقدم يُقاس بما تستطيع بناءه بيدك.'
    },
    steps:[
      {t:'اختر مسارًا', d:'خمس تقنيات، ولكل تقنية مستويات من المبتدئ إلى المتقدم.'},
      {t:'تعلم بالممارسة', d:'كل وحدة تنتهي بمشروع صغير تكتبه بنفسك.'},
      {t:'جرّب فورًا', d:'ساحة التجربة تعمل في المتصفح دون أي تثبيت.'}
    ],
    coursesPage:{title:'كل الدروس والمسارات', sub:'رشح حسب التقنية أو ابحث بالاسم.', search:'ابحث عن مسار…', all:'الكل', empty:'لا نتائج مطابقة. جرّب كلمة أخرى.'},
    course:{
      back:'عودة إلى المسارات', syllabus:'المنهج', lessons:'درس', mins:'دقيقة', total:'الإجمالي',
      sample:'مثال من المنهج', copy:'نسخ', copied:'تم النسخ', enroll:'ابدأ المسار', level:'المستوى', track:'المسار'
    },
    pg:{
      title:'ساحة التجربة', sub:'اكتب جافاسكربت وشغّله هنا مباشرة. النتائج تظهر في وحدة الإخراج.',
      editor:'المحرر', console:'وحدة الإخراج', run:'تشغيل', clear:'مسح الإخراج',
      snippets:'أمثلة جاهزة', tip:'نصيحة: استخدم console.log لطباعة القيم.'
    },
    credits:{title:'الاعتمادات والمصادر', fonts:'الخطوط', fontsNote:'خطوط مفتوحة المصدر من Google Fonts، مضمنة محليًا لتعمل دون اتصال.',
      fontsList:'Cairo (OFL) للعناوين — IBM Plex Sans Arabic (OFL) للنصوص — JetBrains Mono (OFL) للشيفرة.',
      media:'الوسائط', mediaNote:'أغلفة المسارات رسوم SVG مولدة برمجيًا خصيصًا لهذا المشروع، بلا صور فوتوغرافية.',
      tech:'تقنيًا', techNote:'موقع أمامي (Frontend) بالكامل: HTML وCSS وJavaScript خالصان بلا أي خادم. الحالة تحفظ في متصفحك فقط (localStorage).'},
    footer:{made:'Made by Zaynab Abu Twyla', rights:'سطر — تعلم البرمجة سطرًا سطرًا.'},
    a11y:{menu:'القائمة', theme:'تبديل المظهر', lang:'English'}
  },
  en: {
    dir:'ltr', lang:'en',
    brand:'Satr', tagline:'Learn to code, line by line',
    nav:{home:'Home', courses:'Tracks', playground:'Playground', credits:'Credits'},
    hero:{
      kicker:'programming education platform',
      title:'Learn to code <em>line by line</em>',
      lede:'Structured tracks in five core technologies, from your very first line to complete projects. Written by a programmer who knows exactly where learners stumble and why.',
      cta1:'Browse the tracks', cta2:'Try the playground'
    },
    terminal:{title:'hello.js — live example'},
    sections:{tracks:'Tracks', tracksSub:'Five languages and technologies, each with a clear path.',
              story:'Made by a programmer', how:'How the journey goes'},
    story:{
      title:'Made by a programmer',
      p1:'Every lesson here passed through hands that write code daily: runnable examples, common mistakes documented before you hit them, and projects small enough to finish yet big enough to learn from.',
      p2:'No glossy promises, no magic shortcuts. A clear method, and progress measured by what you can build with your own hands.'
    },
    steps:[
      {t:'Pick a track', d:'Five technologies, each with levels from beginner to advanced.'},
      {t:'Learn by doing', d:'Every unit ends with a small project you write yourself.'},
      {t:'Try instantly', d:'The playground runs in your browser with zero setup.'}
    ],
    coursesPage:{title:'All lessons and tracks', sub:'Filter by technology or search by name.', search:'Search tracks…', all:'All', empty:'No matching results. Try another word.'},
    course:{
      back:'Back to tracks', syllabus:'Curriculum', lessons:'lessons', mins:'min', total:'Total',
      sample:'Sample from the curriculum', copy:'Copy', copied:'Copied', enroll:'Start this track', level:'Level', track:'Track'
    },
    pg:{
      title:'Playground', sub:'Write JavaScript and run it right here. Results show in the console.',
      editor:'Editor', console:'Console', run:'Run', clear:'Clear',
      snippets:'Ready-made snippets', tip:'Tip: use console.log to print values.'
    },
    credits:{title:'Credits and sources', fonts:'Fonts', fontsNote:'Open-source fonts from Google Fonts, bundled locally to work offline.',
      fontsList:'Cairo (OFL) for headings — IBM Plex Sans Arabic (OFL) for body — JetBrains Mono (OFL) for code.',
      media:'Media', mediaNote:'Track covers are SVG illustrations generated in code for this project; no photographs.',
      tech:'Technical', techNote:'Fully frontend site: pure HTML, CSS and JavaScript with no server. State is saved in your browser only (localStorage).'},
    footer:{made:'Made by Zaynab Abu Twyla', rights:'Satr — learn to code, line by line.'},
    a11y:{menu:'Menu', theme:'Toggle theme', lang:'العربية'}
  }
};

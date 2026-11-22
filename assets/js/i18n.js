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
      {t:'شاهد وتدرّج', d:'كل درس يفتح الذي يليه بعد اكتمال مشاهدته، وتقدمك محسوب لك.'},
      {t:'جرّب فورًا', d:'ساحة التجربة تعمل في المتصفح دون أي تثبيت.'}
    ],
    coursesPage:{title:'كل الدروس والمسارات', sub:'رشح حسب التقنية أو ابحث بالاسم.', search:'ابحث عن مسار…', all:'الكل', empty:'لا نتائج مطابقة. جرّب كلمة أخرى.'},
    course:{
      back:'عودة إلى المسارات', syllabus:'المنهج', lessons:'درس', mins:'دقيقة', total:'الإجمالي',
      sample:'مثال من المنهج', copy:'نسخ', copied:'تم النسخ', enroll:'ابدأ المسار', level:'المستوى', track:'المسار',
      practice:'جرّب الكود في ساحة التجربة', progress:'تقدمك في المسار', start:'ابدأ من هنا',
      locked:'يفتح بعد إكمال الدرس السابق', done:'مكتمل', continueFrom:'أكمل من حيث توقفت', soon:'قريبًا', fullVideo:'فيديو الكورس الكامل'
    },
    lesson:{
      back:'عودة إلى المسار', unit:'الوحدة', list:'دروس المسار',
      prev:'الدرس السابق', next:'الدرس التالي',
      watch:'نسبة المشاهدة: {pct}%', complete:'اكتمل الدرس ✓',
      nextLocked:'يفتح الدرس التالي بعد اكتمال المشاهدة',
      demoClip:'مقطع توضيحي', source:'المصدر', soon:'فيديو هذا الدرس يُضاف قريبًا — راجع فيديو الكورس الكامل في صفحة الكورس', soonTag:'قريبًا', lockedTitle:'هذا الدرس مقفل حاليًا',
      lockedBody:'أكمل الدرس السابق أولًا ليفتح هذا الدرس.', backToCourse:'ارجع إلى صفحة المسار'
    },
    pg:{
      title:'ساحة التجربة', sub:'اكتب جافاسكربت وشغّله هنا مباشرة. النتائج تظهر في وحدة الإخراج.',
      editor:'المحرر', console:'وحدة الإخراج', run:'تشغيل', clear:'مسح الإخراج',
      snippets:'أمثلة جاهزة', tip:'نصيحة: استخدم console.log لطباعة القيم.'
    },
    credits:{title:'الاعتمادات والمصادر', fonts:'الخطوط', fontsNote:'خطوط مفتوحة المصدر من Google Fonts، مضمنة محليًا لتعمل دون اتصال.',
      fontsList:'Cairo (OFL) للعناوين — IBM Plex Sans Arabic (OFL) للنصوص — JetBrains Mono (OFL) للشيفرة.',
      demo:'نموذج عرض', demoNote:'«سطر» منصة تجريبية للعرض: الدروس والمقاطع المصورة محتوى توضيحي يبين طريقة عمل المنصة، والتقدم يُحفَظ على جهاز الزائر فقط.'},
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
      {t:'Watch and progress', d:'Each lesson unlocks the next once you finish watching it, and your progress is tracked for you.'},
      {t:'Try instantly', d:'The playground runs in your browser with zero setup.'}
    ],
    coursesPage:{title:'All lessons and tracks', sub:'Filter by technology or search by name.', search:'Search tracks…', all:'All', empty:'No matching results. Try another word.'},
    course:{
      back:'Back to tracks', syllabus:'Curriculum', lessons:'lessons', mins:'min', total:'Total',
      sample:'Sample from the curriculum', copy:'Copy', copied:'Copied', enroll:'Start this track', level:'Level', track:'Track',
      practice:'Try the code in the playground', progress:'Your progress in this track', start:'Start here',
      locked:'Unlocks after the previous lesson is complete', done:'Done', continueFrom:'Resume where you left off', soon:'Soon', fullVideo:'Full course video'
    },
    lesson:{
      back:'Back to the track', unit:'Unit', list:'Track lessons',
      prev:'Previous lesson', next:'Next lesson',
      watch:'Watched: {pct}%', complete:'Lesson complete ✓',
      nextLocked:'The next lesson unlocks once you finish watching',
      demoClip:'Demo clip', source:'Source', soon:'The video for this lesson is coming soon — see the full course video on the course page', soonTag:'Soon', lockedTitle:'This lesson is locked',
      lockedBody:'Complete the previous lesson first to unlock this one.', backToCourse:'Back to the track page'
    },
    pg:{
      title:'Playground', sub:'Write JavaScript and run it right here. Results show in the console.',
      editor:'Editor', console:'Console', run:'Run', clear:'Clear',
      snippets:'Ready-made snippets', tip:'Tip: use console.log to print values.'
    },
    credits:{title:'Credits and sources', fonts:'Fonts', fontsNote:'Open-source fonts from Google Fonts, bundled locally to work offline.',
      fontsList:'Cairo (OFL) for headings — IBM Plex Sans Arabic (OFL) for body — JetBrains Mono (OFL) for code.',
      demo:'A demo', demoNote:'Satr is a demo platform: lessons and video clips are sample content showing how the platform works, and progress is stored on the visitor\'s device only.'},
    footer:{made:'Made by Zaynab Abu Twyla', rights:'Satr — learn to code, line by line.'},
    a11y:{menu:'Menu', theme:'Toggle theme', lang:'العربية'}
  }
};

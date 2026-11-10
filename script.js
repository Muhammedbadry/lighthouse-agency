/* ==========================================
   LIGHTHOUSE AGENCY - MAIN SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Portfolio Filtering Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category').split(' ');
        if (filterCategory === 'all' || itemCategories.includes(filterCategory)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Language Switcher (English / Arabic)
  const langBtn = document.getElementById('langToggle');
  let currentLang = 'en';

  const translations = {
    en: {
      servicesNav: "Services",
      portfolioNav: "Portfolio",
      principlesNav: "Principles",
      contactNav: "Contact",
      whatsappNav: "Chat",
      heroBadge: "Precision Retention Editing Agency",
      heroTitle: 'Be <span class="highlight-seen">SEEN</span> in the Dark',
      heroDesc: "A premier video editing agency specialized in high-retention short-form content for elite brands, creators, and global market leaders.",
      exploreWork: "Explore Portfolio",
      bookWhatsapp: "Book Via WhatsApp",
      servicesTitle: "What We Deliver",
      servicesSubtitle: "Engineered for maximum viewer retention and direct conversion.",
      serv1Title: "Short-Form Retention Editing",
      serv1Desc: "Dynamic pacing, custom visual hooks, and advanced kinetic typography designed to keep eyes glued to the screen.",
      serv2Title: "Direct Response & Ads",
      serv2Desc: "High-converting video assets optimized for media buyers, agencies, and performance marketing campaigns.",
      serv3Title: "Visual Sound Design",
      serv3Desc: "Pure sonic textures, realistic audio effects, and immersive pacing with a strict zero-music policy.",
      portfolioTitle: "Featured Projects",
      portfolioSubtitle: "Explore our work categorized across high-performing niches.",
      tabAll: "All",
      tabPersonal: "Personal Brands",
      tabDoctors: "Doctors",
      tabAds: "Ads",
      tabRealEstate: "Real Estate",
      tabAgencies: "Agencies",
      principlesTitle: "Built On Standards",
      principlesSubtitle: "Our uncompromising rules for premium media production.",
      princ1Title: "Zero Music Policy",
      princ1Desc: "We rely entirely on bespoke sound design, spatial audio textures, and natural acoustic pacing instead of generic music tracks.",
      princ2Title: "Clean Aesthetics",
      princ2Desc: "Uncompromising visual standards, rigorous asset selection, and professional styling tailored for high-ticket clients.",
      princ3Title: "Retention-First Strategy",
      princ3Desc: "Every second is optimized using audience psychology and drop-off analysis to maximize watch time and engagement.",
      contactTitle: "Let's Elevate Your Content",
      contactSubtitle: "Ready to scale your engagement? Connect with us directly through our primary channels.",
      emailBtn: "Email Us [ADD: Email]",
      footerText: "© 2026 Lighthouse Agency. All rights reserved."
    },
    ar: {
      servicesNav: "الخدمات",
      portfolioNav: "الأعمال",
      principlesNav: "فلسفتنا",
      contactNav: "تواصل معنا",
      whatsappNav: "محادثة",
      heroBadge: "وكالة مونتاج واحتفاظ بالمحتوى",
      heroTitle: 'كن <span class="highlight-seen">واضحاً</span> في الظلام',
      heroDesc: "وكالة مونتاج فيديو متخصصة في هندسة المحتوى القصير للعلامات التجارية النخبة، صناع المحتوى، والشركات العالمية.",
      exploreWork: "استكشف الأعمال",
      bookWhatsapp: "احجز عبر الواتساب",
      servicesTitle: "ما نقدمه لك",
      servicesSubtitle: "ممصم خصيصاً لتحقيق أقصى معدل احتفاظ بالمشاهدين ورفع التحويلات.",
      serv1Title: "مونتاج احتفاظ المحتوى القصير",
      serv1Desc: "إيقاع حركي ديناميكي، خطافات بصرية مخصصة، ونصوص حركية متطورة لإبقاء المشاهد مسماراً في الشاشة.",
      serv2Title: "إعلانات الاستجابة المباشرة",
      serv2Desc: "أصول فيديو عالية التحويل ومحسنة خصيصاً لشركات الوسائط الإعلانية وحملات التسويق الأداء.",
      serv3Title: "التصميم الصوتي البصري",
      serv3Desc: "مؤثرات صوتية نقية وواقعية وإيقاع صوتي غامر مع الالتزام التام بسياسة خلو المحتوى من الموسيقى.",
      portfolioTitle: "المشاريع المميزة",
      portfolioSubtitle: "استعرض أعمالنا مقسمة حسب النيش والتخصصات المختلفة.",
      tabAll: "الكل",
      tabPersonal: "العلامات الشخصية",
      tabDoctors: "القطاع الطبي",
      tabAds: "الإعلانات",
      tabRealEstate: "العقارات",
      tabAgencies: "الوكالات",
      principlesTitle: "مبنية على معايير صارمة",
      principlesSubtitle: "قواعدنا التي لا تنازل عنها في صناعة الميديا البريميوم.",
      princ1Title: "سياسة خلو المحتوى من الموسيقى",
      princ1Desc: "نعتمد كلياً على الهندسة الصوتية المخصصة والمؤثرات الصوتية الواقعية بدلاً من مسارات الموسيقى التقليدية.",
      princ2Title: "جماليات بصرية نظيفة",
      princ2Desc: "معايير بصرية لا تقبل التنازل واختيار دقيق للعناصر بما يناسب العملاء أصحاب القيمة العالية.",
      princ3Title: "استراتيجية أولوية الاحتفاظ",
      princ3Desc: "كل ثانية محسوبة بعناية باستخدام سيكولوجية المشاهدة لتقليل معدل الهروب ورفع التفاعل.",
      contactTitle: "دعنا نرتقي بمحتواك",
      contactSubtitle: "جاهز لمضاعفة تفاعل جمهورك؟ تواصل معنا مباشرة عبر قنواتنا الرسمية.",
      emailBtn: "راسلنا عبر الإيميل [أضف الإيميل]",
      footerText: "© 2026 وكالة Lighthouse. جميع الحقوق محفوظة."
    }
  };

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      langBtn.textContent = currentLang === 'en' ? 'العربية' : 'English';
      
      if (currentLang === 'ar') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }

      document.querySelector('a[href="#services"]').textContent = translations[currentLang].servicesNav;
      document.querySelector('a[href="#portfolio"]').textContent = translations[currentLang].portfolioNav;
      document.querySelector('a[href="#principles"]').textContent = translations[currentLang].principlesNav;
      document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contactNav;
      document.querySelector('.whatsapp-nav-btn span').textContent = translations[currentLang].whatsappNav;
      
      document.querySelector('.badge').textContent = translations[currentLang].heroBadge;
      document.querySelector('.hero h1').innerHTML = translations[currentLang].heroTitle;
      document.querySelector('.hero p').textContent = translations[currentLang].heroDesc;
      document.querySelector('.hero-buttons .btn-primary').textContent = translations[currentLang].exploreWork;
      document.querySelector('.hero-buttons .btn-secondary').textContent = translations[currentLang].bookWhatsapp;

      document.querySelector('#services .section-title').textContent = translations[currentLang].servicesTitle;
      document.querySelector('#services .section-subtitle').textContent = translations[currentLang].servicesSubtitle;

      document.querySelector('#portfolio .section-title').textContent = translations[currentLang].portfolioTitle;
      document.querySelector('#portfolio .section-subtitle').textContent = translations[currentLang].portfolioSubtitle;

      const tabs = document.querySelectorAll('.tab-btn');
      tabs[0].textContent = translations[currentLang].tabAll;
      tabs[1].textContent = translations[currentLang].tabPersonal;
      tabs[2].textContent = translations[currentLang].tabDoctors;
      tabs[3].textContent = translations[currentLang].tabAds;
      tabs[4].textContent = translations[currentLang].tabRealEstate;
      tabs[5].textContent = translations[currentLang].tabAgencies;

      document.querySelector('#principles .section-title').textContent = translations[currentLang].principlesTitle;
      document.querySelector('#principles .section-subtitle').textContent = translations[currentLang].principlesSubtitle;

      document.querySelector('#contact .section-title').textContent = translations[currentLang].contactTitle;
      document.querySelector('#contact .section-subtitle').textContent = translations[currentLang].contactSubtitle;
      document.querySelector('.email-btn').textContent = translations[currentLang].emailBtn;
      document.querySelector('footer p').textContent = translations[currentLang].footerText;
    });
  }
});
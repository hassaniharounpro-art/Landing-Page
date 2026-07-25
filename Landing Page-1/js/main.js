/* ==========================================================================
   HAROUN STUDIO - Main JavaScript Application
   Includes: i18n Engine, Theme Switcher, Single Inverted Cursor,
   Interactive Dots Pattern Canvas Architecture, MacBook Parallax, ScrollTrigger
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Internationalization (i18n) Dictionary & Engine ---
  const translations = {
    en: {
      nav_story: "Our Story",
      nav_work: "Our Work",
      nav_contact: "Contact",
      nav_lang: "FR",
      
      hero_badge: "DIGITAL STUDIO & WEB DESIGN",
      hero_headline: "A LANDING PAGE FOR YOUR BUSINESS TODAY",
      hero_subhead: "Custom, high-performance landing pages that elevate your brand presence and turn visitors into loyal clients.",
      hero_cta_primary: "Contact Us",
      hero_cta_secondary: "Get Mine",
      
      metric_1_val: "100%",
      metric_1_lbl: "Tailor-Made Code",
      metric_2_val: "< 0.8s",
      metric_2_lbl: "Ultra-Fast Load Speed",
      metric_3_val: "3.5x",
      metric_3_lbl: "Average Conversion Rate",

      story_label: "BACKGROUND & FOUNDER",
      story_title: "Technical Precision Meets Modern Aesthetics",
      story_bio: "Founded by Haroun, a 17-year-old student, designer, and developer based in France, with strong ambitions in AI and engineering. Combining technical precision with modern web aesthetics, he crafts bespoke digital solutions for businesses worldwide.",
      card1_title: "17-Year-Old Founder",
      card1_desc: "Passionate student, designer, and full-stack web developer.",
      card2_title: "AI & Engineering Track",
      card2_desc: "Pursuing high-level ambitions in artificial intelligence & software engineering.",
      card3_title: "Bespoke Craftsmanship",
      card3_desc: "Zero bloated templates; clean architectural code built from scratch.",
      card4_title: "Global Client Scope",
      card4_desc: "Partnering with ambitious founders and modern brands globally.",

      work_label: "OUR VALUE PROPOSITION",
      work_title: "Why Custom Engineering Beats Cookie-Cutter Templates",
      work_subtitle: "Off-the-shelf templates fail because they carry bloated code, slow down load times, and lack conversion psychology. We engineer bespoke web experiences that build instant trust and authority.",
      
      bento1_tag: "PERFORMANCE",
      bento1_title: "Sub-Second Load Times & Technical SEO",
      bento1_desc: "Search engines and visitors reward speed. Every line of code is optimized for instant loading, crisp rendering, and peak performance.",

      bento2_tag: "AI VISIBILITY (GEO)",
      bento2_title: "AI Search Engine & Chatbot Visibility (GEO)",
      bento2_desc: "In an AI-driven era where chatbots (ChatGPT, Claude, Gemini, Perplexity) perform research for buyers, a clear, structured website ensures your business gets cited as the authoritative answer.",

      bento3_tag: "DESIGN AESTHETICS",
      bento3_title: "Ultra-Minimalist Agency Polish",
      bento3_desc: "Impeccable spacing, architectural dark/light palettes, and refined kinetic typography elevate your brand to enterprise level.",

      bento4_tag: "DYNAMIC MOTION",
      bento4_title: "Fluid Micro-Interactions & Motion",
      bento4_desc: "Custom interactive cursor physics, ambient background motion, and smooth scroll reveals create an unforgettable visual experience for your clients.",

      work_cta_title: "Ready to elevate your digital presence?",
      work_cta_desc: "Get your bespoke landing page crafted with mathematical precision.",
      work_cta_btn: "Get Mine Now",

      contact_label: "GET IN TOUCH",
      contact_title: "Direct & Minimalist Communication",
      contact_subtitle: "Have a project in mind or want to discuss a custom build? Reach out directly via phone, email, or the contact form.",
      contact_phone_lbl: "Direct Line (France)",
      contact_email_lbl: "Direct Email",
      contact_copy: "Copy",

      form_name_lbl: "Your Full Name",
      form_name_ph: "e.g. Jean Dupont",
      form_email_lbl: "Your Email Address",
      form_email_ph: "e.g. jean@company.com",
      form_msg_lbl: "Project Overview & Budget",
      form_msg_ph: "Tell us about your project, goals, and desired launch timeline...",
      form_btn: "Send Message",
      form_success: "Thank you! Your message has been received. Haroun will get back to you within 24 hours.",

      footer_tagline: "High-Converting Digital Interfaces Engineered for Modern Businesses.",
      footer_copy: "© 2026 Haroun Studio. All rights reserved.",
      footer_top: "Back to top"
    },

    fr: {
      nav_story: "Notre Histoire",
      nav_work: "Nos Services",
      nav_contact: "Contact",
      nav_lang: "EN",
      
      hero_badge: "STUDIO NUMÉRIQUE & DESIGN WEB",
      hero_headline: "UNE LANDING PAGE POUR VOTRE ENTREPRISE AUJOURD'HUI",
      hero_subhead: "Des landing pages sur-mesure et ultra-performantes qui renforcent votre présence en ligne et convertissent vos visiteurs.",
      hero_cta_primary: "Contactez-nous",
      hero_cta_secondary: "Commander",

      metric_1_val: "100%",
      metric_1_lbl: "Code Sur-Mesure",
      metric_2_val: "< 0,8s",
      metric_2_lbl: "Chargement Ultra-Rapide",
      metric_3_val: "3,5x",
      metric_3_lbl: "Taux de Conversion Moyen",

      story_label: "PARCOURS & FONDATEUR",
      story_title: "La Précision Technique au Service de l'Esthétique",
      story_bio: "Fondé par Haroun, étudiant, designer et développeur de 17 ans basé en France, animé par de fortes ambitions en IA et ingénierie. Alliant précision technique et esthétique web moderne, il conçoit des solutions numériques sur-mesure pour les entreprises du monde entier.",
      card1_title: "Fondateur de 17 ans",
      card1_desc: "Étudiant passionné, designer et développeur web full-stack.",
      card2_title: "Filière IA & Ingénierie",
      card2_desc: "Poursuivant de hautes ambitions en intelligence artificielle & ingénierie logicielle.",
      card3_title: "Conception Sur-Mesure",
      card3_desc: "Zéro template générique ; code d'architecture propre développé ex nihilo.",
      card4_title: "Portée Internationale",
      card4_desc: "Accompagnement de fondateurs ambitieux et marques modernes partout dans le monde.",

      work_label: "NOTRE PROPOSITION DE VALEUR",
      work_title: "Pourquoi le Sur-Mesure Surpasse les Modèles Prédéfinis",
      work_subtitle: "Les templates génériques échouent en raison d'un code lourd, de temps de chargement lents et de l'absence de psychologie de conversion. Nous concevons des expériences web sur-mesure qui inspirent une confiance immédiate.",

      bento1_tag: "PERFORMANCE",
      bento1_title: "Vitesse Ultra-Rapide & SEO Technique",
      bento1_desc: "Les moteurs de recherche et les utilisateurs exigent la vitesse. Chaque ligne de code est optimisée pour un affichage instantané et un score Lighthouse maximal.",

      bento2_tag: "VISIBILITÉ IA (GEO)",
      bento2_title: "Visibilité Moteurs IA & Chatbots (GEO)",
      bento2_desc: "À l'ère de l'IA où les chatbots (ChatGPT, Claude, Gemini, Perplexity) effectuent les recherches pour les acheteurs, un site clair et structuré garantit que votre entreprise est citée comme la réponse de référence.",

      bento3_tag: "ESTHÉTIQUE DESIGN",
      bento3_title: "Finition Studio Minimaliste",
      bento3_desc: "Des espacements impeccables, une palette de couleurs équilibrée et une typographie éditoriale qui élèvent votre marque aux standards internationaux.",

      bento4_tag: "MOUVEMENT DYNAMIQUE",
      bento4_title: "Micro-Interactions Fluides & Mouvement",
      bento4_desc: "Curseur interactif, arrière-plan dynamique et révélations fluides au scroll pour une expérience visuelle d'exception.",

      work_cta_title: "Prêt à élever votre présence numérique ?",
      work_cta_desc: "Commandez votre landing page conçue avec une précision mathématique.",
      work_cta_btn: "Commander Maintenant",

      contact_label: "PRENDRE CONTACT",
      contact_title: "Communication Directe & Minimaliste",
      contact_subtitle: "Vous avez un projet en tête ou vous souhaitez discuter d'une création sur-mesure ? Contactez-nous directement par téléphone, email ou formulaire.",
      contact_phone_lbl: "Ligne Directe (France)",
      contact_email_lbl: "Email Direct",
      contact_copy: "Copier",

      form_name_lbl: "Votre Nom Complet",
      form_name_ph: "ex. Jean Dupont",
      form_email_lbl: "Votre Adresse Email",
      form_email_ph: "ex. jean@entreprise.com",
      form_msg_lbl: "Présentation du Projet & Budget",
      form_msg_ph: "Décrivez votre projet, vos objectifs et votre délai de lancement souhaité...",
      form_btn: "Envoyer le Message",
      form_success: "Merci ! Votre message a bien été transmis. Haroun vous recontactera sous 24 heures.",

      footer_tagline: "Des interfaces web haut de gamme conçues pour propulser votre entreprise.",
      footer_copy: "© 2026 Haroun Studio. Tous droits réservés.",
      footer_top: "Retour en haut"
    }
  };

  let currentLang = localStorage.getItem('haroun_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('haroun_lang', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
      langBtnText.textContent = translations[lang].nav_lang;
    }
  }

  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'fr' : 'en';
      applyLanguage(nextLang);
    });
  }

  applyLanguage(currentLang);


  // --- 2. Theme Switcher System ---
  let currentTheme = localStorage.getItem('haroun_theme') || 'dark';

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('haroun_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      } else {
        themeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      }
    }
  }

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  applyTheme(currentTheme);


  // --- 3. Single Inverted Circle Cursor (mix-blend-mode: difference) ---
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouchDevice) {
    document.body.classList.add('has-custom-cursor');
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
      const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.12, ease: "power2.out" });
      const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.12, ease: "power2.out" });

      window.addEventListener('pointermove', (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
      });

      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive, .bento-card, .highlight-card');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
      });
    }
  }


  // --- 4. Page-Wide Interactive Dots Pattern Canvas Architecture ---
  // (https://21st.dev/@uilayout.contact/components/dots-pattern)
  const dotsCanvas = document.getElementById('dots-canvas');
  if (dotsCanvas) {
    const ctx = dotsCanvas.getContext('2d');
    let width = dotsCanvas.width = window.innerWidth;
    let height = dotsCanvas.height = window.innerHeight;

    let mouse = { x: -1000, y: -1000, radius: 180 };

    window.addEventListener('resize', () => {
      width = dotsCanvas.width = window.innerWidth;
      height = dotsCanvas.height = window.innerHeight;
      createDotsGrid();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    const gap = 32; // Grid spacing in px
    let dots = [];

    function createDotsGrid() {
      dots = [];
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const bx = i * gap;
          const by = j * gap;
          dots.push({
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            radius: 1.5,
            targetRadius: 1.5,
            alpha: 0.18,
            targetAlpha: 0.18
          });
        }
      }
    }

    createDotsGrid();

    function renderDotsCanvas() {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const baseDotColor = isLight ? '45, 55, 72' : '229, 231, 235';

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        const dx = mouse.x - d.baseX;
        const dy = mouse.y - d.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius;
          d.targetRadius = 1.5 + factor * 4.5; // Scale up to 6px
          d.targetAlpha = 0.18 + factor * 0.75; // Brighten up

          // Subtle spring displacement away from cursor
          const angle = Math.atan2(dy, dx);
          const push = factor * 14;
          d.x = d.baseX - Math.cos(angle) * push;
          d.y = d.baseY - Math.sin(angle) * push;
        } else {
          d.targetRadius = 1.5;
          d.targetAlpha = 0.18;
          d.x += (d.baseX - d.x) * 0.1;
          d.y += (d.baseY - d.y) * 0.1;
        }

        // Smooth Lerp Physics
        d.radius += (d.targetRadius - d.radius) * 0.12;
        d.alpha += (d.targetAlpha - d.alpha) * 0.12;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseDotColor}, ${d.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(renderDotsCanvas);
    }

    renderDotsCanvas();
  }


  // --- 5. Story MacBook Mockup Subtle Hover / Parallax Depth ---
  const macbookWrap = document.getElementById('macbook-wrap');
  const macbookImg = document.getElementById('macbook-img');

  if (macbookWrap && macbookImg && typeof gsap !== 'undefined') {
    macbookWrap.addEventListener('mousemove', (e) => {
      const rect = macbookWrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateY = (x / (rect.width / 2)) * 14; // Max 14deg Y
      const rotateX = -(y / (rect.height / 2)) * 10; // Max 10deg X

      gsap.to(macbookImg, {
        rotateY: rotateY,
        rotateX: rotateX,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    macbookWrap.addEventListener('mouseleave', () => {
      gsap.to(macbookImg, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }


  // --- 6. Mobile Navigation Menu Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }


  // --- 7. Direct Minimalist Contact Form & Copy Buttons ---
  const contactForm = document.getElementById('contact-form');
  const formSuccessMsg = document.getElementById('form-success-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast(currentLang === 'fr' ? "Veuillez remplir tous les champs." : "Please fill out all fields.");
        return;
      }

      contactForm.reset();
      if (formSuccessMsg) {
        formSuccessMsg.style.display = 'block';
        setTimeout(() => { formSuccessMsg.style.display = 'none'; }, 6000);
      }
      showToast(currentLang === 'fr' ? "Message envoyé avec succès !" : "Message sent successfully!");
    });
  }

  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast((currentLang === 'fr' ? "Copié : " : "Copied: ") + textToCopy);
      }).catch(() => {
        showToast("Copy failed.");
      });
    });
  });

  function showToast(message) {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }


  // --- 8. GSAP ScrollTrigger Soft Section Entry Animations (Opacity Fade + Slide Up) ---
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Hero Load Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      heroTl.from('.hero-badge', { y: -20, opacity: 0, delay: 0.1 })
            .from('.hero-title', { y: 30, opacity: 0 }, '-=0.6')
            .from('.hero-subhead', { y: 20, opacity: 0 }, '-=0.6')
            .from('.cta-group', { y: 20, opacity: 0 }, '-=0.6')
            .from('.hero-metrics', { y: 30, opacity: 0 }, '-=0.4');

      // Soft Section Reveal Animations for Every Section
      const sectionsToAnimate = ['#story', '#work', '#contact', '#footer'];
      sectionsToAnimate.forEach(secId => {
        const sec = document.querySelector(secId);
        if (sec) {
          gsap.from(sec, {
            scrollTrigger: {
              trigger: sec,
              start: 'top 82%',
              toggleActions: 'play none none none'
            },
            y: 45,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          });
        }
      });
    }
  }


  // --- 9. Nav Link Active Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

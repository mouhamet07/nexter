/* ==========================================================================
   NEXTERRA — HIGH-MOTION INTERACTIVE ENGINE (JS AGENT)
   Architecture : Vanilla ES6+ | data-motion="none | moderate | high"
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. CONFIGURATION DU MOTION DESIGN & ACCESSIBILITÉ
     ------------------------------------------------------------------------ */
  const motionLevel = document.documentElement.dataset.motion || 'high';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const effectiveMotion = prefersReducedMotion ? 'none' : motionLevel;
  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;

  /* ------------------------------------------------------------------------
     2. DICTIONNAIRE BILINGUE (FR / EN) — Français par défaut
     ------------------------------------------------------------------------ */
  const translations = {
    fr: {
      metaTitle: 'NEXTERRA — Studio digital à Dakar | Sites web, applications & logiciels sur mesure',
      metaDescription: 'NEXTERRA conçoit et développe des sites vitrines, boutiques e-commerce, applications métier et logiciels sur mesure pour les entreprises. Studio digital basé à Dakar, Sénégal.',
      nav: {
        services: 'Services',
        work: 'Réalisations',
        process: 'Processus',
        studio: 'Studio',
        contact: 'Contact',
        start: 'Démarrer un projet'
      },
      hero: {
        eyebrow: 'Dakar · Sénégal — Studio Digital',
        title: '<span class="hero-line"><span class="text-navy">WE BUILD WHAT</span></span><span class="hero-line"><span>COMES </span><span class="text-terracotta">NEXT</span><span class="text-navy">.</span></span>',
        subtitle: 'Sites web, applications et logiciels sur mesure pour votre entreprise.',
        description: 'NEXTERRA conçoit et développe des sites web, applications métier et expériences digitales sur mesure, des idées concrètes à impact réel.',
        start: 'Démarrer un projet',
        work: 'Voir nos réalisations',
        scroll: 'Défiler',
        tags: ['WEB', 'PRODUITS', 'LOGICIELS']
      },
      manifesto: {
        label: 'Manifeste',
        title: 'VOTRE ENTREPRISE<br />A UN <span class="text-terracotta">PROBLÈME.</span>',
        divider: 'NOUS ÉCOUTONS. NOUS ANALYSONS. NOUS AGISSONS.',
        solution: 'NOUS CONSTRUISONS<br />LA <span class="text-terracotta">SOLUTION.</span>',
        copy: 'Nous transformons les besoins métier, les idées et les processus complexes en expériences digitales simples, performantes et évolutives.',
        map: {
          ideas: 'Idées',
          problems: 'Problèmes',
          processes: 'Processus',
          needs: 'Besoins',
          experiences: 'Expériences',
          solutions: 'Solutions',
          tools: 'Outils',
          products: 'Produits'
        }
      },
      services: {
        label: 'Services',
        title: 'CE QUE NOUS CONSTRUISONS.',
        intro: 'Site vitrine, boutique en ligne, outil métier ou logiciel sur mesure : quatre façons concrètes de digitaliser votre activité, quelle que soit sa taille.',
        cta: 'Discuter de ce service',
        architecture: 'Architecture sur mesure',
        websites: {
          label: '01 — Présence digitale',
          badge: 'PRÉSENCE DIGITALE',
          title: 'SITES VITRINES',
          description: 'Des sites web crédibles, modernes et performants pour présenter votre activité, renforcer votre image de marque et convertir vos visiteurs en clients.',
          chips: ['Design sur mesure', 'Motion Design 60fps', 'SEO & Performance', 'Responsive Mobile-First']
        },
        ecommerce: {
          label: '02 — Vente en ligne',
          badge: 'VENTE EN LIGNE',
          title: 'E-COMMERCE',
          description: 'Des parcours de vente pensés pour présenter vos produits, fluidifier l’expérience d’achat et accompagner durablement votre croissance commerciale.',
          chips: ['Catalogue & Variantes', 'Tunnel de commande fluide', 'Paiements & Livraison', 'Back-office intuitif']
        },
        applications: {
          label: '03 — Applications métier',
          badge: 'APPLICATIONS MÉTIER',
          title: 'APPLICATIONS MÉTIER',
          description: 'Des outils sur mesure pour digitaliser vos processus internes, centraliser vos opérations et simplifier votre quotidien avec une fiabilité maximale.',
          chips: ['CRM & Portails métier', 'Automatisation de flux', 'Tableaux de bord temps réel', 'Accès multi-rôles']
        },
        products: {
          label: '04 — Solutions sur mesure',
          badge: 'SOLUTIONS SUR MESURE',
          title: 'LOGICIEL SUR MESURE',
          description: 'Un logiciel ou produit SaaS pensé pour votre besoin précis, de la conception architecturale jusqu’au lancement et à l’évolution continue.',
          chips: ['Architecture évolutive', 'API & Base de données', 'MVP & Produit SaaS', 'Scalabilité & Sécurité']
        }
      },
      work: {
        label: 'Réalisations sélectionnées',
        title: 'RÉALISATIONS.',
        intro: 'Des solutions web et mobiles conçues pour résoudre de vrais problèmes.',
        view: 'Voir le site',
        github: 'Code GitHub',
        scrollHint: 'Scrollez pour faire défiler les projets',
        statuses: {
          lawtan: 'Projet clôturé',
          nfc: 'Web NFC · Terminaux',
          immosn: 'Plateforme',
          educrm: 'CRM Métier'
        },
        categories: {
          lawtan: 'Agro-industrie · Web',
          nfc: 'SaaS RH · Multi-tenant',
          immosn: 'Immobilier · Full Lifecycle',
          brasil: 'Restauration · Multi-module',
          educrm: 'Éducation · CRM Python',
          badwallet: 'Mobile · Flutter & Dart'
        },
        titles: {
          lawtan: 'Vitrine, marketplace & circuit de devis',
          nfc: 'Gestion RH & suivi des présences',
          immosn: 'Plateforme de gestion immobilière',
          brasil: 'Application de commande en ligne',
          educrm: 'Plateforme de gestion académique',
          badwallet: 'Portefeuille digital mobile'
        },
        descriptions: {
          lawtan: 'Reprise et enrichissement d’une plateforme numérique dédiée à la filière rizicole au Sénégal : vitrine publique, marketplace, tunnel de commande, demandes de devis WhatsApp et back-office administrateur.',
          nfc: 'Application multi-tenant isolant les données de plusieurs entreprises : création d’entreprise, invitations email, gestion des employés, tableau de bord RH et lecture NFC opérationnelle via Web NFC Reader.',
          immosn: 'Plateforme centralisant annonces, utilisateurs, visites et contrats. Prise en charge complète de la modélisation à la supervision : API REST sécurisée par JWT, Docker, CI/CD et PostgreSQL.',
          brasil: 'Plateforme multi-module partageant une base SQL commune : catalogue, commandes, retrait/livraison, paiement Wave / Orange Money, zones de livraison et statistiques journalières manager.',
          educrm: 'Plateforme de gestion académique structurée avec Flask Blueprints : authentification, gestion des étudiants, centralisation des inscriptions et tableau de bord statistique.',
          badwallet: 'Application mobile de portefeuille digital développée avec Flutter & Dart : consultation du solde en temps réel, transferts, réception d’argent et historique détaillé des transactions.'
        }
      },
      philosophy: {
        label: 'Philosophie',
        title: 'NOUS NE FAISONS<br />PAS QUE CONSTRUIRE.<br /><span class="text-terracotta">NOUS</span> RÉSOLVONS.',
        items: [
          { title: 'COMPRENDRE', description: 'Comprendre le problème avant de choisir la technologie.' },
          { title: 'CONCEVOIR', description: 'Imaginer une expérience simple et intuitive.' },
          { title: 'CONSTRUIRE', description: 'Construire une solution fiable et évolutive.' }
        ]
      },
      process: {
        label: 'Processus',
        title: 'DE L’IDÉE<br />À L’IMPACT.',
        intro: 'Une méthode claire, du brief jusqu’au lancement et au-delà.',
        stepPrefix: 'ÉTAPE',
        steps: [
          { title: 'DÉCOUVRIR', description: 'Comprendre le besoin, l’activité et les objectifs.' },
          { title: 'FAÇONNER', description: 'Définir la structure, l’expérience et les fonctionnalités.' },
          { title: 'CONSTRUIRE', description: 'Développer et intégrer la solution avec précision.' },
          { title: 'LANCER', description: 'Tester, optimiser et mettre en ligne en toute sécurité.' },
          { title: 'ÉVOLUER', description: 'Faire évoluer la solution avec la croissance de l’activité.' }
        ],
        tech: 'Propulsé par des technologies modernes'
      },
      studio: {
        sphereLabel: 'Écosystème & Ingénierie',
        sphereTitle: 'AU CŒUR DE NOTRE TECHNOLOGIE.',
        sphereSubtitle: 'Le « N » de NEXTERRA incarne notre moteur d’ingénierie : une maîtrise complète du développement full-stack, des architectures logicielles, des bases de données et du DevOps.',
        label: 'Studio',
        title: 'NOUS NE VOULONS PAS SIMPLEMENT CONSTRUIRE,<br /><span class="text-terracotta">NOUS VOULONS IMAGINER LE FUTUR.</span>',
        description: 'Depuis Dakar, nous concevons des expériences digitales ambitieuses pour transformer vos idées en produits concrets, durables et performants.',
        badges: ['Vision', 'Créativité', 'Exigence', 'Impact', 'Évolution'],
        cta: 'Parlons de votre projet',
        founderRole: 'Fondateur & Créateur digital',
        founder: '« Une grande idée mérite plus qu’une simple exécution : une vision, une identité et une expérience qui marquent les esprits. »',
        valuesTitle: 'LES TECHNOLOGIES NE SONT QUE LE COMMENCEMENT.',
        values: ['VISION', 'EXPÉRIENCE', 'AMBITION'],
        valueDescriptions: [
          'Imaginer avant de développer.',
          'Des produits clairs, intuitifs et mémorables.',
          'Des solutions conçues pour durer et évoluer.'
        ]
      },
      cta: {
        first: 'VOTRE PROCHAIN',
        second: 'PROJET DIGITAL',
        third: 'COMMENCE ICI.',
        copy: 'Parlons de ce que vous voulez construire.',
        start: 'Démarrer un projet',
        work: 'Voir nos réalisations'
      },
      contact: {
        label: 'Contact',
        title: 'CONSTRUISONS<br />QUELQUE CHOSE.',
        intro: 'Vous avez une idée, un projet ou un problème à résoudre ? Parlons-en.',
        exchange: 'Échange direct',
        title2: 'PARLONS DE VOTRE PROJET.',
        description: 'Écrivez-nous directement sur WhatsApp pour discuter de votre besoin et recevoir une première réponse rapidement.',
        whatsapp: 'Nous contacter sur WhatsApp',
        location: 'Localisation',
        locationValue: 'Dakar · Sénégal',
        market: 'Marché',
        marketValue: 'Construire pour l’Afrique & au-delà',
        quote: '« Nous transformons les idées en expériences digitales, les problèmes en solutions. »'
      },
      footer: {
        tagline: 'Build what comes next.',
        navigation: 'Navigation',
        networks: 'Réseaux',
        start: 'Démarrer un projet',
        copyright: '© 2026 NEXTERRA — Tous droits réservés.',
        note: 'Talent digital africain au service d’un marché mondial.'
      }
    },
    en: {
      metaTitle: 'NEXTERRA — Digital Studio in Dakar | Custom Websites, Apps & Software',
      metaDescription: 'NEXTERRA designs and builds showcase websites, e-commerce platforms, business applications, and custom software for companies.',
      nav: {
        services: 'Services',
        work: 'Work',
        process: 'Process',
        studio: 'Studio',
        contact: 'Contact',
        start: 'Start a project'
      },
      hero: {
        eyebrow: 'Dakar · Senegal — Digital Studio',
        title: '<span class="hero-line"><span class="text-navy">WE BUILD WHAT</span></span><span class="hero-line"><span>COMES </span><span class="text-terracotta">NEXT</span><span class="text-navy">.</span></span>',
        subtitle: 'Custom websites, applications, and software built for your business.',
        description: 'NEXTERRA designs and develops tailored websites, business applications, and digital experiences — turning concrete ideas into real impact.',
        start: 'Start a project',
        work: 'View our work',
        scroll: 'Scroll',
        tags: ['WEB', 'PRODUCTS', 'SOFTWARE']
      },
      manifesto: {
        label: 'Manifesto',
        title: 'YOUR BUSINESS<br />HAS A <span class="text-terracotta">PROBLEM.</span>',
        divider: 'WE LISTEN. WE ANALYZE. WE ACT.',
        solution: 'WE BUILD<br />THE <span class="text-terracotta">SOLUTION.</span>',
        copy: 'We turn business needs, ideas, and complex workflows into simple, high-performing, and scalable digital experiences.',
        map: {
          ideas: 'Ideas',
          problems: 'Problems',
          processes: 'Processes',
          needs: 'Needs',
          experiences: 'Experiences',
          solutions: 'Solutions',
          tools: 'Tools',
          products: 'Products'
        }
      },
      services: {
        label: 'Services',
        title: 'WHAT WE BUILD.',
        intro: 'Showcase website, online store, internal business tool, or custom software: four concrete ways to digitize your operations at any scale.',
        cta: 'Discuss this service',
        architecture: 'Bespoke architecture',
        websites: {
          label: '01 — Digital presence',
          badge: 'DIGITAL PRESENCE',
          title: 'SHOWCASE WEBSITES',
          description: 'Credible, modern, and high-performing websites designed to present your business, elevate your brand, and convert visitors into clients.',
          chips: ['Bespoke UI/UX', '60fps Motion Design', 'SEO & Performance', 'Responsive Mobile-First']
        },
        ecommerce: {
          label: '02 — Online sales',
          badge: 'ONLINE SALES',
          title: 'E-COMMERCE',
          description: 'Sales journeys crafted to showcase your products, streamline checkout, and sustainably support your revenue growth.',
          chips: ['Catalog & Variants', 'Seamless Checkout', 'Payments & Delivery', 'Intuitive Back-office']
        },
        applications: {
          label: '03 — Business applications',
          badge: 'BUSINESS APPS',
          title: 'BUSINESS APPLICATIONS',
          description: 'Tailored tools to digitize your internal workflows, centralize operations, and simplify daily work with maximum reliability.',
          chips: ['Custom CRM & Portals', 'Workflow Automation', 'Real-time Dashboards', 'Role-based Access']
        },
        products: {
          label: '04 — Custom solutions',
          badge: 'CUSTOM SOFTWARE',
          title: 'CUSTOM SOFTWARE',
          description: 'Software or SaaS products engineered around your exact requirements, from architecture design to launch and continuous evolution.',
          chips: ['Scalable Architecture', 'APIs & Databases', 'MVP & SaaS Product', 'Security & Scale']
        }
      },
      work: {
        label: 'Selected work',
        title: 'SELECTED WORK.',
        intro: 'Web and mobile solutions engineered to solve real business challenges.',
        view: 'View live demo',
        github: 'GitHub code',
        scrollHint: 'Scroll to browse projects',
        statuses: {
          lawtan: 'Completed project',
          nfc: 'Web NFC · Terminals',
          immosn: 'Platform',
          educrm: 'Business CRM'
        },
        categories: {
          lawtan: 'Agro-industry · Web',
          nfc: 'HR SaaS · Multi-tenant',
          immosn: 'Real Estate · Full Lifecycle',
          brasil: 'Food Tech · Multi-module',
          educrm: 'Education · Python CRM',
          badwallet: 'Mobile · Flutter & Dart'
        },
        titles: {
          lawtan: 'Showcase, marketplace & quote workflow',
          nfc: 'HR & attendance management',
          immosn: 'Real estate management platform',
          brasil: 'Online food ordering application',
          educrm: 'Academic management platform',
          badwallet: 'Mobile digital wallet'
        },
        descriptions: {
          lawtan: 'Takeover and expansion of a digital platform for the Senegalese rice sector: public showcase, marketplace, checkout flow, WhatsApp quote requests, and admin back-office.',
          nfc: 'Multi-tenant application isolating company data: company onboarding, email invitations, employee management, HR dashboard, and operational NFC reading via Web NFC Reader.',
          immosn: 'Platform centralizing listings, users, visits, and contracts. Full lifecycle ownership from modeling to monitoring: JWT-secured REST API, Docker, CI/CD, and PostgreSQL.',
          brasil: 'Multi-module platform sharing a unified SQL database: catalog, orders, pickup/delivery, Wave / Orange Money payments, delivery zone assignment, and daily manager analytics.',
          educrm: 'Academic management platform structured with Flask Blueprints: authentication, student management, enrollment tracking, and statistical dashboard.',
          badwallet: 'Mobile digital wallet built with Flutter & Dart: real-time balance checks, peer-to-peer transfers, incoming payments, and detailed transaction history.'
        }
      },
      philosophy: {
        label: 'Philosophy',
        title: 'WE DO MORE<br />THAN BUILD.<br /><span class="text-terracotta">WE</span> SOLVE.',
        items: [
          { title: 'UNDERSTAND', description: 'Understand the core problem before choosing the technology.' },
          { title: 'DESIGN', description: 'Craft a simple, intuitive, and memorable user experience.' },
          { title: 'BUILD', description: 'Engineer a reliable and scalable digital solution.' }
        ]
      },
      process: {
        label: 'Process',
        title: 'FROM IDEA<br />TO IMPACT.',
        intro: 'A clear methodology from initial brief to launch and beyond.',
        stepPrefix: 'STEP',
        steps: [
          { title: 'DISCOVER', description: 'Understand the need, business context, and objectives.' },
          { title: 'SHAPE', description: 'Define architecture, user experience, and key features.' },
          { title: 'BUILD', description: 'Develop and integrate the solution with precision.' },
          { title: 'LAUNCH', description: 'Test, optimize, and deploy safely to production.' },
          { title: 'EVOLVE', description: 'Scale and refine the product as your business grows.' }
        ],
        tech: 'Powered by modern technologies'
      },
      studio: {
        sphereLabel: 'Ecosystem & Engineering',
        sphereTitle: 'AT THE CORE OF OUR TECHNOLOGY.',
        sphereSubtitle: 'The NEXTERRA “N” embodies our engineering core: full mastery of full-stack development, software architectures, databases, and DevOps.',
        label: 'Studio',
        title: 'WE DON’T JUST WANT TO BUILD,<br /><span class="text-terracotta">WE WANT TO IMAGINE THE FUTURE.</span>',
        description: 'From Dakar, we craft ambitious digital experiences that turn your ideas into concrete, durable, high-performing products.',
        badges: ['Vision', 'Creativity', 'Excellence', 'Impact', 'Evolution'],
        cta: 'Let’s talk about your project',
        founderRole: 'Founder & Digital Creator',
        founder: '“A great idea deserves more than execution: it deserves a vision, an identity, and an experience that stands out.”',
        valuesTitle: 'TECHNOLOGY IS ONLY THE BEGINNING.',
        values: ['VISION', 'EXPERIENCE', 'AMBITION'],
        valueDescriptions: [
          'Imagine before building.',
          'Clear, intuitive, memorable products.',
          'Solutions built to scale and evolve.'
        ]
      },
      cta: {
        first: 'YOUR NEXT',
        second: 'DIGITAL PROJECT',
        third: 'STARTS HERE.',
        copy: 'Let’s talk about what you want to build.',
        start: 'Start a project',
        work: 'View our work'
      },
      contact: {
        label: 'Contact',
        title: 'LET’S BUILD<br />SOMETHING.',
        intro: 'Have an idea, a project, or a problem to solve? Let’s talk.',
        exchange: 'Direct contact',
        title2: 'LET’S TALK ABOUT YOUR PROJECT.',
        description: 'Message us directly on WhatsApp to discuss your needs and get a fast initial response.',
        whatsapp: 'Contact us on WhatsApp',
        location: 'Location',
        locationValue: 'Dakar · Senegal',
        market: 'Market',
        marketValue: 'Building for Africa & beyond',
        quote: '“We turn ideas into digital experiences, and problems into solutions.”'
      },
      footer: {
        tagline: 'Build what comes next.',
        navigation: 'Navigation',
        networks: 'Networks',
        start: 'Start a project',
        copyright: '© 2026 NEXTERRA — All rights reserved.',
        note: 'African digital talent serving a global market.'
      }
    }
  };

  let currentLang = localStorage.getItem('nexterra-language') === 'en' ? 'en' : 'fr';

  const getValue = (language, key) =>
    key.split('.').reduce((value, part) => (value && value[part] !== undefined ? value[part] : undefined), translations[language]);

  const applyTranslations = (language) => {
    currentLang = translations[language] ? language : 'fr';
    const dict = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.title = dict.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', dict.metaDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', dict.metaTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', dict.metaDescription);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', currentLang === 'fr' ? 'fr_FR' : 'en_US');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getValue(currentLang, el.dataset.i18n);
      if (val === undefined) return;
      if (el.dataset.i18nHtml === 'true') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-list]').forEach((container) => {
      const list = getValue(currentLang, container.dataset.i18nList);
      if (Array.isArray(list)) {
        container.querySelectorAll('[data-i18n-item]').forEach((item, idx) => {
          if (list[idx] !== undefined) item.textContent = list[idx];
        });
      }
    });

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    localStorage.setItem('nexterra-language', currentLang);
    updateServicePreviewFromActive();
  };

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyTranslations(btn.dataset.lang);
    });
  });

  /* ------------------------------------------------------------------------
     3. NAVIGATION, HEADER SCROLL & MENU MOBILE ACCESSIBLE
     ------------------------------------------------------------------------ */
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const scrollProgressBar = document.getElementById('scrollProgressBar');

  const setMenuState = (isOpen) => {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.toggle('open', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMenu = () => setMenuState(false);

  window.scrollToId = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    closeMenu();
    target.scrollIntoView({
      behavior: effectiveMotion === 'none' ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  if (hamburger && mobileMenu) {
    setMenuState(false);
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      setMenuState(!expanded);
    });
    mobileMenu.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ------------------------------------------------------------------------
     4. CURSEUR PERSONNALISÉ & BOUTONS MAGNÉTIQUES ("MOUSE LEAVE STICKY")
     Tous les boutons du site s'aimantent au curseur et reviennent avec
     une élasticité sticky au mouseleave.
     ------------------------------------------------------------------------ */
  const cursor = document.getElementById('cursor');

  if (cursor && window.matchMedia('(min-width: 1024px)').matches && effectiveMotion !== 'none') {
    cursor.style.opacity = '1';
    window.addEventListener(
      'pointermove',
      (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      },
      { passive: true }
    );
  }

  const initMagneticButtons = () => {
    if (effectiveMotion === 'none') return;

    const magneticElements = document.querySelectorAll('[data-magnetic], .btn-primary, .btn-ghost, .btn-ghost-light, .btn-white-cta, .btn-link');

    magneticElements.forEach((el) => {
      if (el.dataset.magneticInit === 'true') return;
      el.dataset.magneticInit = 'true';

      const strength = parseFloat(el.dataset.strength || '0.34');
      const inner = el.querySelector('.btn-magnetic-inner');

      el.addEventListener('pointerenter', () => {
        if (!isDesktop()) return;
        el.classList.add('is-magnet-active');
        cursor?.classList.add('hover');
      });

      el.addEventListener('pointermove', (e) => {
        if (!isDesktop()) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);

        const moveX = relX * strength;
        const moveY = relY * strength;

        el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;

        if (inner) {
          inner.style.transform = `translate3d(${(moveX * 0.45).toFixed(2)}px, ${(moveY * 0.45).toFixed(2)}px, 0)`;
        }
      });

      el.addEventListener('pointerleave', () => {
        el.classList.remove('is-magnet-active');
        cursor?.classList.remove('hover');
        /* Mouse leave sticky : retour élastique fluide vers (0, 0) géré par la transition CSS cubic-bezier */
        el.style.transform = 'translate3d(0px, 0px, 0px)';
        if (inner) {
          inner.style.transform = 'translate3d(0px, 0px, 0px)';
        }
      });
    });
  };

  /* ------------------------------------------------------------------------
     5. SECTION SERVICES — ACCORDÉON AU CLIC & PANNEAU DE DÉTAILS COMPLET (CAPTURE 3)
        Ouverture uniquement au clic (pas de hover), et panneau de droite
        affichant simultanément description + livrables + bouton CTA.
     ------------------------------------------------------------------------ */
  const serviceMeta = [
    { num: '01', key: 'websites', icon: 'fa-solid fa-globe', theme: 'light' },
    { num: '02', key: 'ecommerce', icon: 'fa-solid fa-cart-shopping', theme: 'orange' },
    { num: '03', key: 'applications', icon: 'fa-solid fa-gears', theme: 'dark' },
    { num: '04', key: 'products', icon: 'fa-solid fa-lightbulb', theme: 'sand' }
  ];

  const accordionItems = document.querySelectorAll('.service-acc-item');
  const stagePreview = document.getElementById('servicesStagePreview');
  const stagePreviewNum = document.getElementById('stagePreviewNum');
  const stagePreviewBadge = document.getElementById('stagePreviewBadge');
  const stagePreviewIcon = document.getElementById('stagePreviewIcon');
  const stagePreviewTitle = document.getElementById('stagePreviewTitle');
  const stagePreviewChips = document.getElementById('stagePreviewChips');
  const stagePreviewCtaText = document.getElementById('stagePreviewCtaText');

  function activateServiceAccordion(index) {
    accordionItems.forEach((item, idx) => {
      const trigger = item.querySelector('.service-acc-trigger');
      const isActive = idx === index;
      item.classList.toggle('is-active', isActive);
      if (trigger) {
        trigger.setAttribute('aria-expanded', String(isActive));
      }
    });

    const meta = serviceMeta[index] || serviceMeta[0];
    const dictService = translations[currentLang]?.services?.[meta.key];
    const ctaLabel = translations[currentLang]?.services?.cta;

    if (stagePreview) {
      stagePreview.dataset.activeTheme = meta.theme;
    }
    if (stagePreviewNum) stagePreviewNum.textContent = meta.num;
    if (stagePreviewBadge && dictService) stagePreviewBadge.textContent = dictService.badge;
    if (stagePreviewTitle && dictService) stagePreviewTitle.textContent = dictService.title;
    if (stagePreviewCtaText && ctaLabel) stagePreviewCtaText.textContent = ctaLabel;

    if (stagePreviewChips && dictService && Array.isArray(dictService.chips)) {
      stagePreviewChips.innerHTML = dictService.chips
        .map((chip) => `<span class="stage-preview-chip">${chip}</span>`)
        .join('');
    }

    if (stagePreviewIcon) {
      stagePreviewIcon.style.transform = 'scale(0.8) rotate(-10deg)';
      setTimeout(() => {
        stagePreviewIcon.innerHTML = `<i class="${meta.icon}" aria-hidden="true"></i>`;
        stagePreviewIcon.style.transform = 'scale(1) rotate(0deg)';
      }, 110);
    }
  }

  function updateServicePreviewFromActive() {
    let activeIdx = 0;
    accordionItems.forEach((item, idx) => {
      if (item.classList.contains('is-active')) activeIdx = idx;
    });
    activateServiceAccordion(activeIdx);
  }

  accordionItems.forEach((item, idx) => {
    const trigger = item.querySelector('.service-acc-trigger');
    trigger?.addEventListener('click', () => activateServiceAccordion(idx));
  });

  /* ------------------------------------------------------------------------
     6. SECTION RÉALISATIONS — CARROUSEL 3-CARDS SCROLL-PINNED (CAPTURES 2 & 3)
     3 cartes à l'écran :
     - Au centre : la carte active principale plus grande
     - À gauche : la carte déjà dépassée
     - À droite : la carte à venir
     Piloté par le scroll vertical quand on est dans la section #work !
     ------------------------------------------------------------------------ */
  const workSection = document.getElementById('work');
  const workCards = Array.from(document.querySelectorAll('.work-card'));
  const workDots = Array.from(document.querySelectorAll('.work-dot'));
  const workPrevBtn = document.getElementById('workPrevBtn');
  const workNextBtn = document.getElementById('workNextBtn');
  const workCurrentIndexEl = document.getElementById('workCurrentIndex');
  const workProgressFill = document.getElementById('workProgressFill');

  let activeWorkIndex = 0;

  const updateWorkCarouselState = (targetIndex, progressRatio = null) => {
    const total = workCards.length;
    if (!total) return;

    activeWorkIndex = Math.max(0, Math.min(total - 1, targetIndex));

    workCards.forEach((card, idx) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-far-left', 'is-far-right');
      const diff = idx - activeWorkIndex;

      if (diff === 0) {
        card.classList.add('is-active');
        card.setAttribute('aria-current', 'true');
      } else {
        card.removeAttribute('aria-current');
        if (diff === -1) {
          card.classList.add('is-prev');
        } else if (diff === 1) {
          card.classList.add('is-next');
        } else if (diff < -1) {
          card.classList.add('is-far-left');
        } else {
          card.classList.add('is-far-right');
        }
      }
    });

    workDots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === activeWorkIndex);
    });

    if (workCurrentIndexEl) {
      workCurrentIndexEl.textContent = `0${activeWorkIndex + 1}`;
    }

    if (workProgressFill) {
      const pct = progressRatio !== null
        ? Math.max(15, Math.min(100, progressRatio * 100))
        : ((activeWorkIndex + 1) / total) * 100;
      workProgressFill.style.width = `${pct}%`;
    }
  };

  const scrollToWorkIndex = (idx) => {
    const total = workCards.length;
    const clamped = Math.max(0, Math.min(total - 1, idx));

    if (workSection && effectiveMotion === 'high') {
      const rect = workSection.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollableDistance = workSection.offsetHeight - window.innerHeight;
      if (scrollableDistance > 0) {
        const targetScroll = sectionTop + (clamped / (total - 1)) * scrollableDistance;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        return;
      }
    }
    updateWorkCarouselState(clamped);
  };

  workPrevBtn?.addEventListener('click', () => scrollToWorkIndex(activeWorkIndex - 1));
  workNextBtn?.addEventListener('click', () => scrollToWorkIndex(activeWorkIndex + 1));

  workDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.workGoto || '0', 10);
      scrollToWorkIndex(idx);
    });
  });

  workCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;
      if (idx !== activeWorkIndex) {
        scrollToWorkIndex(idx);
      }
    });
  });

  /* Support tactile swipe sur mobile/tablette pour le carrousel 3-cards */
  const workStage = document.getElementById('workCarouselStage');
  if (workStage) {
    let touchStartX = 0;
    workStage.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    workStage.addEventListener(
      'touchend',
      (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 45) {
          if (dx < 0) updateWorkCarouselState(activeWorkIndex + 1);
          else updateWorkCarouselState(activeWorkIndex - 1);
        }
      },
      { passive: true }
    );
  }

  /* ------------------------------------------------------------------------
     7. SECTION PROCESSUS — 1 SCROLL = 1 ÉTAPE (CAPTURE 4)
        La barre part d'un point exact vers le point suivant (sans jamais
        s'arrêter au milieu entre deux cercles !).
     ------------------------------------------------------------------------ */
  const processSection = document.getElementById('process');
  const processNodes = Array.from(document.querySelectorAll('.process-node'));
  const processLineContainer = document.querySelector('.process-line-container');
  const processLineProgress = document.getElementById('processLineProgress');
  const processActiveLabel = document.getElementById('processActiveLabel');
  const processPercentLabel = document.getElementById('processPercentLabel');

  const getMarkerExactWidthPx = (activeIdx) => {
    if (!processLineContainer || !processNodes[activeIdx]) return null;
    const total = processNodes.length;
    const lineRect = processLineContainer.getBoundingClientRect();
    if (!lineRect.width) return null;
    /* À la dernière étape (05), on remplit la barre jusqu'au bout à 100% */
    if (activeIdx === total - 1) return lineRect.width;
    const marker = processNodes[activeIdx].querySelector('.process-node-marker');
    if (!marker) return null;
    const markerRect = marker.getBoundingClientRect();
    /* Position exacte du centre du cercle actif par rapport au début de la barre */
    const centerPx = markerRect.left - lineRect.left + markerRect.width / 2;
    return Math.max(0, Math.min(lineRect.width, centerPx));
  };

  const updateProcessTimeline = (progress) => {
    const total = processNodes.length;
    if (!total) return;

    const clamped = Math.max(0, Math.min(1, progress));
    const activeStepIndex = Math.min(total - 1, Math.floor(clamped * total * 0.999));

    /* La barre s'arrête pile au centre du cercle actif (point 01 -> point 02 -> point 03 -> point 04 -> point 05) */
    if (processLineProgress) {
      const exactPx = getMarkerExactWidthPx(activeStepIndex);
      if (exactPx !== null) {
        processLineProgress.style.width = `${exactPx.toFixed(1)}px`;
      } else {
        const fallbackPct = (activeStepIndex / (total - 1)) * 100;
        processLineProgress.style.width = `${fallbackPct}%`;
      }
    }

    processNodes.forEach((node, idx) => {
      const isReached = idx <= activeStepIndex;
      const isCurrent = idx === activeStepIndex;

      node.classList.toggle('is-reached', isReached);
      node.classList.toggle('is-current', isCurrent);
    });

    const prefix = translations[currentLang]?.process?.stepPrefix || 'ÉTAPE';
    if (processActiveLabel) {
      processActiveLabel.textContent = `${prefix} 0${activeStepIndex + 1} / 0${total}`;
    }
    if (processPercentLabel) {
      const displayPct = Math.round(((activeStepIndex + 1) / total) * 100);
      processPercentLabel.textContent = `${displayPct}%`;
    }
  };

  processNodes.forEach((node, idx) => {
    node.addEventListener('click', () => {
      const total = processNodes.length;
      const targetProgress = (idx + 0.1) / total;
      if (processSection && isDesktop() && effectiveMotion === 'high') {
        const rect = processSection.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const scrollable = processSection.offsetHeight - window.innerHeight;
        if (scrollable > 0) {
          window.scrollTo({
            top: sectionTop + (idx / (total - 1)) * scrollable,
            behavior: 'smooth'
          });
          return;
        }
      }
      updateProcessTimeline(targetProgress);
    });
  });

  /* ------------------------------------------------------------------------
     8. TRANSITIONS « COUVRIR » TYPE POWERPOINT (CAPTURES 2 & 6)
        Calcule automatiquement top = min(0, window.innerHeight - section.offsetHeight)
        pour que toute section underlay (même plus haute que l'écran comme #studio)
        défile d'abord jusqu'à son bas complet avant de se figer en sticky et
        d'être recouverte intégralement par la section suivante !
     ------------------------------------------------------------------------ */
  const coverGroups = Array.from(document.querySelectorAll('[data-cover-group]'));

  const updateCoverStickyOffsets = () => {
    const viewH = window.innerHeight;
    coverGroups.forEach((group) => {
      const underlay = group.querySelector('[data-cover-underlay]');
      if (!underlay) return;
      const h = underlay.offsetHeight;
      const stickyTop = h > viewH ? viewH - h : 0;
      underlay.style.setProperty('--underlay-sticky-top', `${stickyTop}px`);
    });
  };

  window.addEventListener('resize', updateCoverStickyOffsets, { passive: true });

  const handleGlobalScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    /* Header scrolled state */
    if (header) {
      header.classList.toggle('scrolled', scrollY > 36);
    }

    /* Barre de progression tout en haut */
    if (scrollProgressBar && docHeight > 0) {
      const ratio = Math.max(0, Math.min(1, scrollY / docHeight));
      scrollProgressBar.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }

    if (effectiveMotion === 'none') {
      updateProcessTimeline(1);
      return;
    }

    /* A. Calcul du scroll horizontal épinglé pour #work (Desktop, Tablette & Mobile) */
    if (workSection && effectiveMotion === 'high') {
      const rect = workSection.getBoundingClientRect();
      const scrollable = workSection.offsetHeight - window.innerHeight;
      if (scrollable > 0) {
        const rawProgress = -rect.top / scrollable;
        const clamped = Math.max(0, Math.min(1, rawProgress));
        const targetIdx = Math.min(
          workCards.length - 1,
          Math.floor(clamped * workCards.length * 0.999)
        );
        updateWorkCarouselState(targetIdx, clamped);
      }
    }

    /* B. Calcul du scroll par étape pour #process (Capture 4 : 1 scroll = 1 étape) */
    if (processSection) {
      const rect = processSection.getBoundingClientRect();
      if (isDesktop() && effectiveMotion === 'high') {
        const scrollable = processSection.offsetHeight - window.innerHeight;
        if (scrollable > 0) {
          const rawProgress = -rect.top / scrollable;
          updateProcessTimeline(rawProgress);
        }
      } else {
        const viewH = window.innerHeight;
        const rawProgress = (viewH * 0.7 - rect.top) / (rect.height * 0.85);
        updateProcessTimeline(rawProgress);
      }
    }

    /* C. Transition « Couvrir » type PowerPoint (Desktop & Mobile) :
          La section underlay reste fixe en plein écran pendant que la section
          overlay glisse par-dessus pour la couvrir à 100%. */
    if (effectiveMotion === 'high') {
      coverGroups.forEach((group) => {
        const underlay = group.querySelector('[data-cover-underlay]');
        const overlay = group.querySelector('[data-cover-overlay]');
        if (!underlay || !overlay) return;

        const overlayRect = overlay.getBoundingClientRect();
        const viewH = window.innerHeight;

        if (overlayRect.top < viewH && overlayRect.top > 0) {
          const coverProgress = 1 - overlayRect.top / viewH;
          const brightness = 1 - coverProgress * 0.28;
          underlay.style.filter = `brightness(${brightness.toFixed(3)})`;
        } else if (overlayRect.top >= viewH) {
          underlay.style.filter = 'brightness(1)';
        }
      });
    }
  };

  let scrollTicking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          handleGlobalScroll();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  /* ------------------------------------------------------------------------
     9. CAPTURE 7 : LE "N" DU LOGO NEXTERRA (Logo_Hero.svg) EN 3D QUI TOURNE SUR LUI-MÊME
        DANS TOUS LES SENS + SPHÈRE GÉODÉSIQUE & ORBITES 3D
     ------------------------------------------------------------------------ */
  const N_LOGO_PATHS = `
    <path d="M93.1,6.96v75.32h-20.53s-.53.23-1.42-.66l-26.3-26.3c.24-.69.37-1.42.37-2.19,0-3.74-3.03-6.76-6.76-6.76s-6.76,3.03-6.76,6.76,3.03,6.76,6.76,6.76c.36,0,.72-.04,1.06-.09l26.73,26.73s2.3,2.8,6.32,2.8h20.76c3.78,0,6.85-2.97,7.03-6.71h.02V6.96h-7.28ZM35.68,53.14c0-1.53,1.24-2.77,2.77-2.77s2.77,1.24,2.77,2.77-1.24,2.77-2.77,2.77-2.77-1.24-2.77-2.77Z"/>
    <path d="M26.2,23.88l47.04,47.84c1.54,1.57,3.86,1.89,5.74.99.47-.18.88-.46,1.22-.82.04-.04.09-.06.13-.1l.03-.03c.29-.28.47-.62.54-.99.14-.36.22-.75.22-1.16V6.96h-6.96v55.75L27.05,14.8c-.56-.57-1.29-.89-2.03-.97-.24-.1-.5-.16-.77-.16h-.38c-2.56,0-4.63,2.07-4.63,4.61v64.35H6.94V7.33h23.9s1.15.27,1.8.93l23.09,23.09c-.12.49-.18,1.01-.18,1.53,0,3.7,3,6.71,6.71,6.71s6.71-3,6.71-6.71-3-6.71-6.71-6.71c-.55,0-1.07.07-1.58.2L37.61,3.3s-2.69-2.43-6.76-2.93H6.51C2.92.36,0,3.28,0,6.87v75.76c0,3.85,3.12,6.96,6.96,6.96h12.29c3.85,0,6.96-3.12,6.96-6.96h-.02V23.88Z"/>
    <path d="M100.29,6.39c0-3.53-2.86-6.39-6.39-6.39h-13.66c-3.32,0-6,2.69-6,6v.96h26.05v-.57Z"/>
  `;

  /**
   * Construit un véritable objet 3D extrudé du "N" officiel de NEXTERRA (Logo_Hero.svg)
   * en empilant des tranches vectorielles le long de l'axe Z.
   */
  const buildExtrudedN3D = (container, layerCount = 22, depthPx = 30) => {
    if (!container) return;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < layerCount; i++) {
      const ratio = i / (layerCount - 1); // 0 (arrière) -> 1 (avant)
      const z = (ratio - 0.5) * depthPx;

      const isFrontOrBack = i === 0 || i === layerCount - 1;
      /* Dégradé de luminance sur la tranche 3D pour donner un vrai volume sculptural */
      let fillColor = '#A83F20';
      if (i === layerCount - 1) fillColor = '#F26A44'; // Face avant lumineuse
      else if (i === 0) fillColor = '#D95D39'; // Face arrière
      else if (ratio > 0.7) fillColor = '#D95D39';
      else if (ratio < 0.3) fillColor = '#7E2B13';

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 100.38 89.6');
      svg.setAttribute('class', 'n3d-layer');
      svg.style.transform = `translateZ(${z.toFixed(2)}px)`;

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('fill', fillColor);
      if (isFrontOrBack) {
        g.setAttribute('stroke', '#FF9B7D');
        g.setAttribute('stroke-width', '0.6');
      }
      g.innerHTML = N_LOGO_PATHS;
      svg.appendChild(g);
      fragment.appendChild(svg);
    }

    container.innerHTML = '';
    container.appendChild(fragment);
  };

  buildExtrudedN3D(document.getElementById('nexterraN3DCore'), 24, 34);
  buildExtrudedN3D(document.getElementById('heroMiniN3D'), 16, 20);

  /* Animation 3D temps réel de la sphère géodésique, des orbites et du N 3D (Capture 7) */
  const initNexus3DGlobe = () => {
    const stage = document.getElementById('nexusGlobeStage');
    const canvas = document.getElementById('nexusSphereCanvas');
    const n3dCore = document.getElementById('nexterraN3DCore');
    const orbitNodes = Array.from(document.querySelectorAll('#nexusOrbitNodes .orbit-node'));

    if (!stage || !canvas || !n3dCore) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 760;
    let height = 560;
    let globeRadius = 210;

    const resizeCanvas = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width || 760;
      height = rect.height || 560;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      globeRadius = Math.min(width, height) * 0.37;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    /* Angles de rotation multi-axes pour le N 3D et la sphère */
    let nRotX = 18;
    let nRotY = -25;
    let nRotZ = 8;
    let globeAngleY = 0;
    let globeAngleX = 0.28;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;

    stage.addEventListener(
      'pointermove',
      (e) => {
        const rect = stage.getBoundingClientRect();
        targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      },
      { passive: true }
    );

    stage.addEventListener('pointerleave', () => {
      targetMouseX = 0;
      targetMouseY = 0;
    });

    /* Projection 3D -> 2D d'un point (x, y, z) */
    const project3D = (x, y, z, rotX, rotY) => {
      /* Rotation Y */
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      /* Rotation X */
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const fov = 700;
      const scale = fov / (fov + z2);
      return {
        x: width / 2 + x1 * scale,
        y: height / 2 + y2 * scale,
        z: z2,
        scale
      };
    };

    /* Visibilité dans le viewport pour économiser le GPU hors écran */
    let isStageVisible = true;
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isStageVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.05 }
      );
      obs.observe(stage);
    }

    const renderFrame = (time) => {
      if (isStageVisible) {
        smoothMouseX += (targetMouseX - smoothMouseX) * 0.06;
        smoothMouseY += (targetMouseY - smoothMouseY) * 0.06;

        /* 1. Rotation 3D omni-directionnelle du N de NEXTERRA ("tourne sur lui-même dans tous les sens") */
        if (effectiveMotion !== 'none') {
          nRotY = (time * 0.045 + smoothMouseX * 55) % 360;
          nRotX = Math.sin(time * 0.0014) * 34 + Math.cos(time * 0.0009) * 18 - smoothMouseY * 45;
          nRotZ = Math.cos(time * 0.0011) * 26 + Math.sin(time * 0.0017) * 14;
        }
        n3dCore.style.transform = `rotateX(${nRotX.toFixed(2)}deg) rotateY(${nRotY.toFixed(2)}deg) rotateZ(${nRotZ.toFixed(2)}deg)`;

        /* 2. Dessin de la sphère architecturale & des doubles anneaux orbitaux aux couleurs NEXTERRA (Capture 4) */
        ctx.clearRect(0, 0, width, height);

        if (effectiveMotion !== 'none') {
          globeAngleY += 0.0045;
        }
        const currentRotY = globeAngleY + smoothMouseX * 0.55;
        const currentRotX = globeAngleX - smoothMouseY * 0.35;

        /* Halo central doux dans le canvas */
        const radialGlow = ctx.createRadialGradient(
          width / 2,
          height / 2,
          globeRadius * 0.1,
          width / 2,
          height / 2,
          globeRadius * 1.15
        );
        radialGlow.addColorStop(0, 'rgba(217, 93, 57, 0.22)');
        radialGlow.addColorStop(0.55, 'rgba(217, 93, 57, 0.05)');
        radialGlow.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, globeRadius * 1.15, 0, Math.PI * 2);
        ctx.fill();

        /* Méridiens de la sphère aux couleurs Terracotta & Ivoire */
        const meridians = 8;
        ctx.lineWidth = 1;
        for (let m = 0; m < meridians; m++) {
          const lon = (m / meridians) * Math.PI;
          ctx.beginPath();
          for (let step = 0; step <= 48; step++) {
            const theta = (step / 48) * Math.PI * 2;
            const px = globeRadius * Math.sin(theta) * Math.cos(lon);
            const py = globeRadius * Math.cos(theta);
            const pz = globeRadius * Math.sin(theta) * Math.sin(lon);
            const proj = project3D(px, py, pz, currentRotX, currentRotY);
            if (step === 0) ctx.moveTo(proj.x, proj.y);
            else ctx.lineTo(proj.x, proj.y);
          }
          ctx.strokeStyle = m % 2 === 0 ? 'rgba(217, 93, 57, 0.26)' : 'rgba(247, 245, 240, 0.12)';
          ctx.stroke();
        }

        /* Parallèles (latitudes) en pointillés techniques */
        const latitudes = [-0.6, -0.3, 0, 0.3, 0.6];
        ctx.setLineDash([4, 6]);
        latitudes.forEach((latRatio, idx) => {
          const r = globeRadius * Math.sqrt(1 - latRatio * latRatio);
          const py = globeRadius * latRatio;
          ctx.beginPath();
          for (let step = 0; step <= 48; step++) {
            const phi = (step / 48) * Math.PI * 2;
            const px = r * Math.cos(phi);
            const pz = r * Math.sin(phi);
            const proj = project3D(px, py, pz, currentRotX, currentRotY);
            if (step === 0) ctx.moveTo(proj.x, proj.y);
            else ctx.lineTo(proj.x, proj.y);
          }
          ctx.strokeStyle = idx === 2 ? 'rgba(217, 93, 57, 0.38)' : 'rgba(232, 213, 176, 0.16)';
          ctx.stroke();
        });
        ctx.setLineDash([]);

        /* Anneau orbital principal incliné (Terracotta lumineux) */
        const orbitRadius1 = globeRadius * 1.28;
        const tilt1 = 0.44;
        ctx.beginPath();
        for (let step = 0; step <= 64; step++) {
          const a = (step / 64) * Math.PI * 2;
          const ox = orbitRadius1 * Math.cos(a);
          const oy = orbitRadius1 * Math.sin(a) * Math.sin(tilt1);
          const oz = orbitRadius1 * Math.sin(a) * Math.cos(tilt1);
          const proj = project3D(ox, oy, oz, currentRotX, currentRotY * 0.7);
          if (step === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }
        ctx.strokeStyle = 'rgba(217, 93, 57, 0.55)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        /* Second anneau orbital croisé (Sable / Ivoire chaud) */
        const orbitRadius2 = globeRadius * 1.16;
        const tilt2 = -0.52;
        ctx.beginPath();
        ctx.setLineDash([8, 6]);
        for (let step = 0; step <= 64; step++) {
          const a = (step / 64) * Math.PI * 2;
          const ox = orbitRadius2 * Math.cos(a);
          const oy = orbitRadius2 * Math.sin(a) * Math.sin(tilt2);
          const oz = orbitRadius2 * Math.sin(a) * Math.cos(tilt2);
          const proj = project3D(ox, oy, oz, currentRotX, -currentRotY * 0.5);
          if (step === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }
        ctx.strokeStyle = 'rgba(232, 213, 176, 0.32)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.setLineDash([]);

        /* Satellites lumineux Terracotta & Ivoire sur les 2 anneaux */
        const satAngle1 = time * 0.0014;
        const satProj1 = project3D(
          orbitRadius1 * Math.cos(satAngle1),
          orbitRadius1 * Math.sin(satAngle1) * Math.sin(tilt1),
          orbitRadius1 * Math.sin(satAngle1) * Math.cos(tilt1),
          currentRotX,
          currentRotY * 0.7
        );
        ctx.beginPath();
        ctx.arc(satProj1.x, satProj1.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#D95D39';
        ctx.shadowColor = '#D95D39';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        const satAngle2 = -time * 0.0011;
        const satProj2 = project3D(
          orbitRadius2 * Math.cos(satAngle2),
          orbitRadius2 * Math.sin(satAngle2) * Math.sin(tilt2),
          orbitRadius2 * Math.sin(satAngle2) * Math.cos(tilt2),
          currentRotX,
          -currentRotY * 0.5
        );
        ctx.beginPath();
        ctx.arc(satProj2.x, satProj2.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#F7F5F0';
        ctx.fill();

        /* 3. Positionnement 3D des badges technologiques autour du N 3D */
        orbitNodes.forEach((node) => {
          const lat = (parseFloat(node.dataset.lat || '0') * Math.PI) / 180;
          const lon = (parseFloat(node.dataset.lon || '0') * Math.PI) / 180;

          const r = globeRadius * 1.05;
          const x = r * Math.cos(lat) * Math.cos(lon);
          const y = r * Math.sin(lat);
          const z = r * Math.cos(lat) * Math.sin(lon);

          const proj = project3D(x, y, z, currentRotX, currentRotY);
          /* Normalisation profondeur z (-r .. +r) */
          const depthNorm = (proj.z + r) / (2 * r); // 0 devant, 1 derrière
          const alpha = Math.max(0.22, Math.min(1, 1.12 - depthNorm * 0.85));
          const scale = Math.max(0.72, Math.min(1.12, 1.1 - depthNorm * 0.35));

          const offsetX = proj.x - width / 2;
          const offsetY = proj.y - height / 2;

          node.style.transform = `translate3d(calc(-50% + ${offsetX.toFixed(1)}px), calc(-50% + ${offsetY.toFixed(1)}px), 0) scale(${scale.toFixed(3)})`;
          node.style.opacity = alpha.toFixed(2);
          node.style.zIndex = proj.z < 0 ? '7' : '3';
        });
      }

      if (effectiveMotion !== 'none') {
        window.requestAnimationFrame(renderFrame);
      }
    };

    window.requestAnimationFrame(renderFrame);
  };

  /* ------------------------------------------------------------------------
     10. MOTEUR D'APPARITION AU SCROLL ([data-reveal] & [data-stagger])
     ------------------------------------------------------------------------ */
  const initScrollReveals = () => {
    const revealEls = document.querySelectorAll('[data-reveal]');
    const staggerContainers = document.querySelectorAll('[data-stagger]');

    if (effectiveMotion === 'high') {
      staggerContainers.forEach((container) => {
        container.querySelectorAll('[data-reveal]').forEach((child, index) => {
          const delay = Math.min(index * 90, 450);
          child.style.setProperty('--reveal-delay', `${delay}ms`);
        });
      });
    }

    if (effectiveMotion === 'none' || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  };

  /* ------------------------------------------------------------------------
     10b. SECTION PHILOSOPHIE — MOTION DESIGN INTERACTIF, AUTO-CYCLE & SPOTLIGHT
          - Cycle automatique entre 01 COMPRENDRE, 02 CONCEVOIR, 03 CONSTRUIRE
          - Réaction immédiate au survol / clic
          - Rail vertical lumineux synchronisé
          - Spotlight radial qui suit le curseur dans la section
     ------------------------------------------------------------------------ */
  const initPhilosophyMotion = () => {
    const philoSection = document.getElementById('philosophy');
    const philoSpotlight = document.getElementById('philosophySpotlight');
    const philoRailFill = document.getElementById('philosophyRailFill');
    const philoActiveTag = document.getElementById('philosophyActiveTag');
    const philoPillars = Array.from(document.querySelectorAll('.philosophy-pillar'));

    if (!philoSection || !philoPillars.length) return;

    let activePillarIdx = 0;
    let isHoveringPillar = false;

    const setActivePillar = (idx) => {
      activePillarIdx = idx % philoPillars.length;
      philoPillars.forEach((pillar, i) => {
        pillar.classList.toggle('is-active', i === activePillarIdx);
      });

      if (philoRailFill) {
        const pct = ((activePillarIdx + 1) / philoPillars.length) * 100;
        philoRailFill.style.height = `${pct.toFixed(1)}%`;
      }

      if (philoActiveTag) {
        const num = `0${activePillarIdx + 1}`;
        const title =
          translations[currentLang]?.philosophy?.items?.[activePillarIdx]?.title ||
          philoPillars[activePillarIdx].querySelector('h3')?.textContent ||
          '';
        philoActiveTag.textContent = `${num} · ${title}`;
      }
    };

    philoPillars.forEach((pillar, idx) => {
      pillar.addEventListener('pointerenter', () => {
        isHoveringPillar = true;
        setActivePillar(idx);
      });
      pillar.addEventListener('pointerleave', () => {
        isHoveringPillar = false;
      });
      pillar.addEventListener('click', () => {
        setActivePillar(idx);
      });
    });

    /* Spotlight interactif qui suit la souris dans la section Philosophie */
    if (philoSpotlight && effectiveMotion !== 'none') {
      philoSection.addEventListener(
        'pointermove',
        (e) => {
          const rect = philoSection.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          philoSpotlight.style.left = `${x.toFixed(1)}px`;
          philoSpotlight.style.top = `${y.toFixed(1)}px`;
        },
        { passive: true }
      );
    }

    /* Cycle vivant automatique toutes les 3.2 secondes quand l'utilisateur ne survole pas une carte */
    if (effectiveMotion !== 'none') {
      setInterval(() => {
        if (!isHoveringPillar) {
          setActivePillar((activePillarIdx + 1) % philoPillars.length);
        }
      }, 3200);
    }

    setActivePillar(0);
  };

  /* ------------------------------------------------------------------------
     10c. SECTION MANIFESTE — AUTO-CYCLE & SPOTLIGHT INTERACTIF
     ------------------------------------------------------------------------ */
  const initManifestoMotion = () => {
    const manifestoSection = document.getElementById('manifesto');
    const manifestoSpotlight = document.getElementById('manifestoSpotlight');
    const manifestoRows = Array.from(document.querySelectorAll('#manifestoMap .manifesto-row'));

    if (!manifestoSection || !manifestoRows.length) return;

    let activeRowIdx = 0;
    let isHoveringRow = false;

    const setActiveRow = (idx) => {
      activeRowIdx = idx % manifestoRows.length;
      manifestoRows.forEach((row, i) => {
        row.classList.toggle('is-active', i === activeRowIdx);
      });
    };

    manifestoRows.forEach((row, idx) => {
      row.addEventListener('pointerenter', () => {
        isHoveringRow = true;
        setActiveRow(idx);
      });
      row.addEventListener('pointerleave', () => {
        isHoveringRow = false;
      });
      row.addEventListener('click', () => setActiveRow(idx));
    });

    if (manifestoSpotlight && effectiveMotion !== 'none') {
      manifestoSection.addEventListener(
        'pointermove',
        (e) => {
          const rect = manifestoSection.getBoundingClientRect();
          manifestoSpotlight.style.left = `${(e.clientX - rect.left).toFixed(1)}px`;
          manifestoSpotlight.style.top = `${(e.clientY - rect.top).toFixed(1)}px`;
        },
        { passive: true }
      );
    }

    if (effectiveMotion !== 'none') {
      setInterval(() => {
        if (!isHoveringRow) {
          setActiveRow((activeRowIdx + 1) % manifestoRows.length);
        }
      }, 2200);
    }

    setActiveRow(0);
  };

  /* ------------------------------------------------------------------------
     11. INITIALISATION GLOBALE
     ------------------------------------------------------------------------ */
  applyTranslations(currentLang);
  initMagneticButtons();
  updateWorkCarouselState(0);
  updateProcessTimeline(0);
  initScrollReveals();
  initNexus3DGlobe();
  initPhilosophyMotion();
  initManifestoMotion();
  updateCoverStickyOffsets();
  window.addEventListener('load', updateCoverStickyOffsets);
  handleGlobalScroll();
})();

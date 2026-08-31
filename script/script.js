function scrollToId(id){
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth'});
  }

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, {passive:true});

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  const cursor = document.getElementById('cursor');
  if (window.matchMedia('(min-width: 769px)').matches) {
    cursor.style.opacity = '1';
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  const revealSections = document.querySelectorAll('.reveal-section');
  revealSections.forEach((section) => section.querySelectorAll('.reveal').forEach((element) => element.classList.add('pre')));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal, .process-line-fill').forEach((child) => child.classList.add('in'));
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  revealSections.forEach((section) => observer.observe(section));
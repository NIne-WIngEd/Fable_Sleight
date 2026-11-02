(() => {
  document.documentElement.classList.add('js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const progress = document.getElementById('progressFill');
  const drawer = document.getElementById('chapterDrawer');
  const open = document.getElementById('chaptersBtn');
  const close = document.getElementById('closeDrawer');
  const update = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    const p = h > 0 ? Math.min(100, Math.max(0, scrollY / h * 100)) : 0;
    if (progress) progress.style.width = `${p}%`;
  };
  addEventListener('scroll', update, {passive:true}); addEventListener('resize', update); update();
  const closeDrawer = (restoreFocus = true) => {
    drawer?.classList.remove('open');
    if (drawer) drawer.inert = true;
    open?.setAttribute('aria-expanded', 'false');
    if (restoreFocus) open?.focus();
  };
  if (open && drawer) open.addEventListener('click', () => {
    drawer.inert = false;
    drawer.classList.add('open');
    open.setAttribute('aria-expanded', 'true');
    close?.focus();
  });
  close?.addEventListener('click', () => closeDrawer());
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && drawer?.classList.contains('open')) closeDrawer();
  });
  drawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    closeDrawer(false);
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { target.tabIndex = -1; target.focus({preventScroll:true}); }
  }));
  const nodes = document.querySelectorAll('.reveal');
  if (reduced.matches || !('IntersectionObserver' in window)) nodes.forEach(n=>n.classList.add('in-view'));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    nodes.forEach(n=>io.observe(n));
  }
  reduced.addEventListener?.('change', event => {
    if (event.matches) nodes.forEach(node => node.classList.add('in-view'));
  });
})();

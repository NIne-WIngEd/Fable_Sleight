(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
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
  if (open && drawer) open.addEventListener('click', () => {drawer.classList.add('open'); open.setAttribute('aria-expanded','true')});
  if (close && drawer) close.addEventListener('click', () => {drawer.classList.remove('open'); open?.setAttribute('aria-expanded','false')});
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>drawer.classList.remove('open')));
  const nodes = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) nodes.forEach(n=>n.classList.add('in-view'));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    nodes.forEach(n=>io.observe(n));
  }
})();

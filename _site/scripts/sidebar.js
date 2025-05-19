(() => {
  const sidebar   = document.querySelector('.sidebar');
  const hamburger = document.getElementById('hamburger');
  const body      = document.body;

  const toggle = () => {
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
    hamburger.setAttribute('aria-expanded', sidebar.classList.contains('open'));
  };

  hamburger.addEventListener('click', toggle);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) toggle();
  });

  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('open')) {
      toggle();
    }
  });

  window.addEventListener('resize' , () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.remove('open');
      body.classList.remove('sidebar-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  })
})();

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(location.search);
  const inicial = params.get('tab') || 'discover';
  const options = document.querySelectorAll('.feed-switch-option');

  // 1) Remove qualquer classe active residual e aplica à inicial
  options.forEach(btn => btn.classList.remove('active'));
  const initialBtn = document.querySelector(`.feed-switch-option[data-feed="${inicial}"]`);
  if (initialBtn) initialBtn.classList.add('active');

  // 2) Ao clicar, troca visual e atualiza ?tab= sem recarregar
  options.forEach(btn => {
    btn.addEventListener('click', () => {
      options.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      history.replaceState(null, '', `?tab=${btn.dataset.feed}`);
      // TODO: aqui dispare a lógica para filtrar o conteúdo do feed
    });
  });
});

function updateRelativeTimes() {
  const times = document.querySelectorAll('time.js-relative-time');
  const now   = new Date();

  times.forEach(el => {
    const dt = new Date(el.getAttribute('datetime'));
    const diffMs = now - dt;
    const diffMin = Math.floor(diffMs / 60000);
    let text;

    if (diffMin < 1) {
      text = 'há menos de 1 minuto';
    } else if (diffMin < 60) {
      text = `há ${diffMin} minuto${diffMin > 1 ? 's' : ''}`;
    } else if (diffMin < 1440) {
      const h = Math.floor(diffMin / 60);
      text = `há ${h} hora${h > 1 ? 's' : ''}`;
    } else if (diffMin < 2880) {
      text = 'ontem';
    } else {
      const d = Math.floor(diffMin / 1440);
      text = `há ${d} dia${d > 1 ? 's' : ''}`;
    }

    el.textContent = text;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateRelativeTimes();

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

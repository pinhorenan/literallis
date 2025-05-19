document.querySelectorAll('.feed-switch-option').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.feed-switch-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('scoreAfter');
  if (target) {
    const end = parseInt(target.textContent, 10);
    let current = 0;
    const step = Math.max(1, Math.floor(end / 30));
    const tick = setInterval(() => {
      current += step;
      if (current >= end) { current = end; clearInterval(tick); }
      target.textContent = current;
    }, 25);
  }

  const repoBtn = document.getElementById('repoBtn');
  const repoModal = document.getElementById('repoModal');
  const repoInput = document.getElementById('repoInput');
  const repoCancel = document.getElementById('repoCancel');
  const repoGo = document.getElementById('repoGo');

  repoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    repoModal.classList.add('open');
    repoInput.focus();
  });
  repoCancel.addEventListener('click', () => repoModal.classList.remove('open'));
  repoModal.addEventListener('click', (e) => {
    if (e.target === repoModal) repoModal.classList.remove('open');
  });
  repoGo.addEventListener('click', () => {
    const url = repoInput.value.trim();
    if (url) window.open(url, '_blank');
  });
  repoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') repoGo.click();
  });
});
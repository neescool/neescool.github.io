document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const fullImage = document.getElementById('fullImage');
  const title = document.getElementById('title');
  const tools = document.getElementById('tools');
  const media = document.getElementById('media');
  const caption = document.getElementById('caption');
  const closeBtn = document.getElementById('closeBtn');

  if (!modal || !fullImage || !title || !tools || !media || !caption || !closeBtn) return;

  document.querySelectorAll('.icon-img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const full = img.dataset.full || img.src;
      fullImage.src = full;
      fullImage.alt = img.alt || '';

      title.textContent = img.dataset.title || '';
      tools.textContent = img.dataset.tools || '';
      media.textContent = img.dataset.media || '';
      caption.textContent = img.dataset.caption || '';
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
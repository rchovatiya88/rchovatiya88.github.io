'use strict';
const filters = document.querySelectorAll('[data-filter]');
const projects = [...document.querySelectorAll('[data-category]')];
for (const button of filters) {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    for (const filter of filters) {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    }
    let count = 0;
    for (const project of projects) {
      project.hidden = category !== 'all' && project.dataset.category !== category;
      if (!project.hidden) count++;
    }
    document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
  });
}
const copyButton = document.querySelector('#copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('rchovatiya88@gmail.com');
    status.textContent = 'Email copied.';
  } catch {
    status.textContent = 'Select the email address above to copy it.';
  }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());

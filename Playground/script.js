const revealTargets = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}

const accordions = document.querySelectorAll('.js-accordion');

accordions.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) {
      return;
    }

    const group = item.dataset.group;
    if (!group) {
      return;
    }

    accordions.forEach((other) => {
      if (other === item) {
        return;
      }

      if (other.dataset.group === group) {
        other.open = false;
      }
    });
  });
});

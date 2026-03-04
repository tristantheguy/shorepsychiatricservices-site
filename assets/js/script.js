const navToggle = document.querySelector('.nav-toggle');
const drawer = document.querySelector('#mobile-drawer');
const overlay = document.querySelector('.mobile-drawer-overlay');
const drawerClose = document.querySelector('.drawer-close');
const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];
let lastFocusedElement = null;

const getFocusableInDrawer = () => {
  if (!drawer) return [];
  return Array.from(drawer.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'));
};

const closeDrawer = () => {
  if (!drawer || !navToggle) return;
  document.body.classList.remove('drawer-open', 'no-scroll');
  navToggle.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

const openDrawer = () => {
  if (!drawer || !navToggle) return;
  lastFocusedElement = document.activeElement;
  document.body.classList.add('drawer-open', 'no-scroll');
  navToggle.setAttribute('aria-expanded', 'true');
  drawer.setAttribute('aria-hidden', 'false');
  const focusable = getFocusableInDrawer();
  if (focusable.length) {
    focusable[0].focus();
  }
};

if (navToggle && drawer && overlay) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('drawer-open');
    if (isOpen) {
      closeDrawer();
      return;
    }
    openDrawer();
  });

  overlay.addEventListener('click', closeDrawer);

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  drawer.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = getFocusableInDrawer();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('drawer-open')) {
      closeDrawer();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
      closeDrawer();
    }
  });
}

const sectionsToReveal = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  sectionsToReveal.forEach((section) => observer.observe(section));
} else {
  sectionsToReveal.forEach((section) => section.classList.add('revealed'));
}

const forms = document.querySelectorAll('.contact-form');

forms.forEach((form) => {
  const status = form.querySelector('.form-status');
  const fields = ['name', 'email', 'message'];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let hasError = false;

    fields.forEach((fieldName) => {
      const input = form.querySelector(`[name="${fieldName}"]`);
      const errorNode = form.querySelector(`[data-error-for="${fieldName}"]`);
      if (!input || !errorNode) return;

      const value = input.value.trim();
      let message = '';

      if (!value) {
        message = 'This field is required.';
      } else if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = 'Please enter a valid email address.';
      }

      errorNode.textContent = message;
      if (message) {
        hasError = true;
      }
    });

    if (status) {
      if (hasError) {
        status.textContent = 'Please correct the highlighted fields and try again.';
      } else {
        status.textContent = 'Thank you. Your message is ready to send. Please use your email app to submit or call (410) 656-1541.';
      }
    }
  });
});

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

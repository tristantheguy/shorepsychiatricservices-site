const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
const navClose = document.querySelector('.nav-close');
const navOverlay = document.querySelector('.nav-overlay');
const desktopNavQuery = window.matchMedia('(min-width: 900px)');

if (navToggle && siteNav && navOverlay && navClose) {
  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let previousFocus = null;
  let lockedScrollY = 0;
  let isBodyScrollLocked = false;

  const lockBodyScroll = () => {
    if (isBodyScrollLocked) {
      return;
    }

    lockedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.width = '100%';
    isBodyScrollLocked = true;
  };

  const unlockBodyScroll = () => {
    if (!isBodyScrollLocked) {
      return;
    }

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, lockedScrollY);
    isBodyScrollLocked = false;
  };

  const setOpenState = (isOpen) => {
    siteNav.classList.toggle('open', isOpen);
    navOverlay.classList.toggle('open', isOpen);
    navOverlay.hidden = !isOpen;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    siteNav.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    if (isOpen) {
      previousFocus = document.activeElement;
      const firstFocusTarget = siteNav.querySelector('a, button');
      firstFocusTarget?.focus();
    } else {
      (previousFocus || navToggle).focus();
      previousFocus = null;
    }
  };

  const closeNav = () => setOpenState(false);

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setOpenState(!isOpen);
  });

  navClose.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);

  document.addEventListener('keydown', (event) => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeNav();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = siteNav.querySelectorAll(focusableSelector);
    if (!focusable.length) {
      return;
    }

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!desktopNavQuery.matches) {
        closeNav();
      }
    });
  });

  const syncForViewport = () => {
    if (desktopNavQuery.matches) {
      siteNav.classList.remove('open');
      navOverlay.classList.remove('open');
      navOverlay.hidden = true;
      siteNav.setAttribute('aria-hidden', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
      unlockBodyScroll();
      return;
    }

    siteNav.setAttribute('aria-hidden', 'true');
    navOverlay.hidden = true;
  };

  syncForViewport();
  desktopNavQuery.addEventListener('change', syncForViewport);
}

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

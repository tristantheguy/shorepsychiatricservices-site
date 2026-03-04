const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    let hasError = false;
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    const showError = (field, text) => {
      const errorEl = form.querySelector(`[data-for="${field.id}"]`);
      if (errorEl) errorEl.textContent = text;
    };

    [name, email, message].forEach((field) => showError(field, ''));

    if (!name.value.trim()) {
      showError(name, 'Please enter your name.');
      hasError = true;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError(email, 'Please enter your email address.');
      hasError = true;
    } else if (!emailValid.test(email.value.trim())) {
      showError(email, 'Please enter a valid email.');
      hasError = true;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      showError(message, 'Please include a message with at least 10 characters.');
      hasError = true;
    }

    if (hasError) {
      event.preventDefault();
    }
  });
}

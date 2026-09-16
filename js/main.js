'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const header = document.querySelector('.site-header');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMenu(force) {
  const expanded = typeof force === 'boolean' ? force : menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
  mobileMenu.classList.toggle('is-open', expanded);
  mobileMenu.inert = !expanded;
  document.body.classList.toggle('menu-open', expanded);
}
menuButton.addEventListener('click', () => toggleMenu());
mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    toggleMenu(false); menuButton.focus();
  }
});
window.matchMedia('(min-width: 1081px)').addEventListener('change', event => { if (event.matches) toggleMenu(false); });
window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 30), { passive: true });

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -35px 0px', threshold: 0.07 });
  reveals.forEach(item => revealObserver.observe(item));
} else reveals.forEach(item => item.classList.add('is-visible'));

const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
const navTargets = [...navLinks].map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  navTargets.forEach(section => sectionObserver.observe(section));
}

const dateInput = document.querySelector('#visitor-date');
function localToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
dateInput.min = localToday();
dateInput.addEventListener('focus', () => { dateInput.min = localToday(); });

const form = document.querySelector('#visit-form');
const errorMessage = document.querySelector('#form-error');
const whatsappNumber = '919865916292';
function reportError(message, field) {
  errorMessage.hidden = false;
  errorMessage.textContent = message;
  if (field) field.focus();
}
form.addEventListener('submit', event => {
  event.preventDefault();
  errorMessage.hidden = true;
  const nameInput = document.querySelector('#visitor-name');
  const phoneInput = document.querySelector('#visitor-phone');
  const goalInput = document.querySelector('#visitor-goal');
  const timeInput = document.querySelector('#visitor-time');
  const consentInput = document.querySelector('#visitor-consent');
  const name = nameInput.value.trim();
  const phone = phoneInput.value.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
  const goal = goalInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  if (name.length < 2) return reportError('Please enter your name (at least 2 characters).', nameInput);
  if (!/^[6-9]\d{9}$/.test(phone)) return reportError('Please enter a valid 10-digit Indian mobile number.', phoneInput);
  if (!goal) return reportError('Please select what you are interested in.', goalInput);
  if (date && date < localToday()) return reportError('Please choose today or a future date.', dateInput);
  if (!consentInput.checked) return reportError('Please agree to share your details through WhatsApp.', consentInput);
  let formattedDate = 'Flexible — please suggest a date';
  if (date) {
    const [year, month, day] = date.split('-').map(Number);
    formattedDate = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(year, month - 1, day));
  }
  let formattedTime = 'Flexible — please suggest a time';
  if (time) {
    const [hours, minutes] = time.split(':').map(Number);
    formattedTime = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(2026, 0, 1, hours, minutes));
  }
  const message = [
    'Hello Ronic Fitness Zone! 👋', '',
    'I would like to request a gym visit / membership enquiry.', '',
    `Name: ${name}`, `Mobile: ${phone}`, `Interested in: ${goal}`,
    `Preferred date: ${formattedDate}`, `Preferred time: ${formattedTime}`, '',
    'Please let me know whether a visit is available and share the next steps. Thank you!'
  ].join('\n');
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  // A direct navigation is less likely to be blocked than a new popup on mobile.
  window.location.assign(url);
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

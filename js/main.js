'use strict';

const header = document.querySelector('.site-header');
const toast = document.getElementById('toast');
const year = document.getElementById('year');
const openStatus = document.getElementById('openStatus');
const statusLine = document.querySelector('.status-line');

if (year) year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyText(value, successMessage = 'تم النسخ') {
  try {
    await navigator.clipboard.writeText(value);
    showToast(successMessage);
  } catch (_) {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    showToast(successMessage);
  }
}

document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.copy;
    if (value) copyText(value, 'تم نسخ بيانات الدفع');
  });
});

function updateOpenStatus() {
  if (!openStatus || !statusLine) return;
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(new Date());
    const hour = Number(parts.find(p => p.type === 'hour')?.value ?? 0);
    const isOpen = hour >= 9 || hour < 3;
    openStatus.textContent = isOpen ? 'مفتوح الآن' : 'مغلق الآن';
    statusLine.classList.toggle('closed', !isOpen);
  } catch (_) {
    openStatus.textContent = 'يوميًا';
  }
}
updateOpenStatus();

const shareBtn = document.getElementById('shareBtn');
shareBtn?.addEventListener('click', async () => {
  const shareData = {
    title: 'Gorilla Car Wash | غوريلا لغسيل السيارات',
    text: 'غوريلا لغسيل السيارات — اتصال، واتساب، الموقع وطرق الدفع.',
    url: window.location.href
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (_) { /* user cancelled */ }
  } else {
    copyText(window.location.href, 'تم نسخ رابط الصفحة');
  }
});

const saveContactBtn = document.getElementById('saveContactBtn');
saveContactBtn?.addEventListener('click', () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Gorilla Car Wash - غوريلا لغسيل السيارات',
    'ORG:Gorilla Car Wash',
    'TEL;TYPE=CELL,VOICE:+201557055602',
    'URL:https://www.instagram.com/gorilla_clean.car/',
    'NOTE:مواعيد العمل يوميًا من 9 صباحًا حتى 3 فجرًا',
    'END:VCARD'
  ].join('\r\n');
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'gorilla-car-wash.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('تم تجهيز بطاقة الاتصال');
});

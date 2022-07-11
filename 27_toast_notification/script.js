const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Great click!',
  'Awesome!',
  'Keep clicking!',
  'Harder!',
  'Feels great!',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const toast = document.createElement('div');

  toast.classList.add('toast');
  toast.innerHTML = message;
  toast.style.color = '#' + randomColor;

  toasts.appendChild(toast);

  setTimeout(() => toasts.removeChild(toast), 2000);
}

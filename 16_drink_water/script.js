const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remainded = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = (100 / totalCups) * fullCups + '%';
    percentage.innerText = (100 / totalCups) * fullCups + '%';
  }
  if (fullCups === totalCups) {
    remainded.style.visibility = 'hidden';
    remainded.style.height = 0;
  } else {
    remainded.style.visibility = 'visible';
    liters.innerText = (totalCups - fullCups) * 0.25 + 'L';
  }
}

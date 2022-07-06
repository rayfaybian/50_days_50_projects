const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  target = Math.ceil(Math.random() * 984869);
  counter.setAttribute('data-target', target);

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const inc = 3333;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + inc)}`;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

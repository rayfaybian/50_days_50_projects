const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const nameElement = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="media/mac.jpg" alt="" />';
  title.innerHTML = 'Hi, my name is Maria!';
  excerpt.innerHTML = 'I love building websites with HTML, CSS and JavaScript.';
  profileImg.innerHTML =
    "<img src='https://randomuser.me/api/portraits/women/3.jpg' alt='' />";

  nameElement.innerHTML = 'Maria Smith';
  date.innerHTML = 'Sep 13, 2022';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg_text) =>
    bg_text.classList.remove('animated-bg-text')
  );
}

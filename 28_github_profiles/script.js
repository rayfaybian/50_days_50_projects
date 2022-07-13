const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    creatUserCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>`;

  main.innerHTML = cardHTML;
}

function creatUserCard(userdata) {
  const cardHTML = ` <div class="card">
    <div>
      <img
        src="${userdata.avatar_url}"
        class="avatar"
        alt=""
      />
    </div>
    <div class="user-info">
      <h2>${userdata.name}</h2>
      <p>
        ${userdata.bio}
      </p>
      <ul>
        <li>${userdata.followers}<strong>Followers</strong></li>
        <li>${userdata.following}<strong>Following</strong></li>
        <li>${userdata.public_repos}<strong>Repos</strong></li>
      </ul>
      <div id="repos">      
      </div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
}

function addReposToCard(repodata) {
  const repos = document.getElementById('repos');

  repodata.slice(0, 10).forEach((repo) => {
    const repoElement = document.createElement('a');
    repoElement.classList.add('repo');
    repoElement.href = repo.html_url;
    repoElement.target = '_blank';
    repoElement.innerText = repo.name;

    repos.appendChild(repoElement);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    getRepos(user);
    search.value = '';
  }
});

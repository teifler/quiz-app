export function navigation() {
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');
  const buttonLoggedOut = document.querySelector('[data-js="loginLogout"]');

  const pageHome = document.querySelector('[data-page="home"]');
  const pageBookmarks = document.querySelector('[data-page="bookmarks"]');
  const pageCreate = document.querySelector('[data-page="create"]');
  const pageProfile = document.querySelector('[data-page="profile"]');
  const pageLoggedOut = document.querySelector('[data-page="loggedOut"]');

  const headerTitle = document.querySelector('[data-js="headerTitle"]');

  buttonHome?.addEventListener('click', event => {
    addHiddenAll();
    headerTitle.textContent = 'Quiz App';
    pageHome.classList.remove('hidden');
    buttonHome.classList.add('app-nav__item--active');
  });

  buttonBookmarks?.addEventListener('click', () => {
    addHiddenAll();
    headerTitle.textContent = 'Bookmarks';
    buttonBookmarks.classList.add('app-nav__item--active');
    pageBookmarks.classList.remove('hidden');
  });

  buttonCreate?.addEventListener('click', () => {
    addHiddenAll();
    headerTitle.textContent = 'Create';
    pageCreate.classList.remove('hidden');
    buttonCreate.classList.add('app-nav__item--active');
  });

  buttonProfile?.addEventListener('click', () => {
    addHiddenAll();
    headerTitle.textContent = 'Profile';
    pageProfile.classList.remove('hidden');
    buttonProfile.classList.add('app-nav__item--active');
  });

  buttonLoggedOut?.addEventListener('click', event => {
    headerTitle.textContent = 'Login';
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
    pageLoggedOut.classList.remove('hidden');
  });

  function addHiddenAll() {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
    pageLoggedOut.classList.add('hidden');
    buttonHome.classList.remove('app-nav__item--active');
    buttonBookmarks.classList.remove('app-nav__item--active');
    buttonCreate.classList.remove('app-nav__item--active');
    buttonProfile.classList.remove('app-nav__item--active');
  }
}

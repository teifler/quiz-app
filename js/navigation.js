export function navigation() {
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');

  const pageHome = document.querySelector('[data-page="home"]');
  const pageBookmarks = document.querySelector('[data-page="bookmarks"]');
  const pageCreate = document.querySelector('[data-page="create"]');
  const pageProfile = document.querySelector('[data-page="profile"]');

  const headerTitle = document.querySelector('[data-js="headerTitle"]');

  buttonHome?.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
  });

  buttonBookmarks?.addEventListener('click', () => {
    headerTitle.textContent = 'Bookmarks';
    console.log('DRINNEN BOOKMARK' + buttonBookmarks);
    pageHome.classList.add('hidden');
    pageBookmarks.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
  });

  buttonCreate?.addEventListener('click', () => {
    headerTitle.textContent = 'Create';
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');
  });

  buttonProfile?.addEventListener('click', () => {
    headerTitle.textContent = 'Profile';
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');
  });
}

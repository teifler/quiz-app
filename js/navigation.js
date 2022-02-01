export function navigation() {
  /*
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
*/
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');
  //for all buttons
  allButtons.forEach(button => {
    //start eventlistener for all buttons that each button is waiting for
    //click
    button.addEventListener('click', event => {
      //When clicked every button should remove the active class
      //which might got set before
      allButtons.forEach(button => {
        button.classList.remove('app-nav__item--active');
      });
      //Hide all pages after click (so that shown gets hidden)
      allPages.forEach(page => {
        page.classList.add('hidden');
      });
      //The button which got clicked get the data-nav attribute
      const buttonAttribute = event.currentTarget.getAttribute('data-nav');

      //get element with data-page="x" and save it in variable
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]`
      );
      //get element with data-nav="x" and save it in variable
      const currentButton = document.querySelector(
        `[data-nav="${buttonAttribute}"]`
      );
      //Add active to highlight in in nav bar
      currentButton.classList.add('app-nav__item--active');
      //Remove hide class of page so that you can see the clicked page
      currentPage.classList.remove('hidden');
    });
  });
}

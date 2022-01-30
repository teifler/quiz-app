export function loginLogout() {
  const loginLogoutElement = document.querySelector('[data-js="loginLogout"]');
  const appProfileSection = document.querySelector('[data-js=appProfile]');

  console.log(appProfileSection);

  loginLogoutElement?.addEventListener('click', event => {
    if (appProfileSection.style.display === 'none') {
      appProfileSection.style.display = 'inline';
    } else {
      appProfileSection.style.display = 'none';
      appProfileSection.classList.add('js-hide');
      console.log(appProfileSection);
    }
  });
}

export function loginLogout() {
  const loginLogoutElement = document.querySelector('[data-js="loginLogout"]');
  console.log(loginLogoutElement);
  loginLogoutElement.addEventListener('click', event => {
    alert('Sucessfully logged out');
  });
}

function loadPage(path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById('app').innerHTML =
      (new DOMParser()).parseFromString(html, 'text/html').body.innerHTML;
      

const page = (new DOMParser()).parseFromString(html, 'text/html');
const scripts = page.querySelectorAll("script");

if (path.includes('post-create.html') && window.renderPostCreate) {
        window.renderPostCreate();
      }

scripts.forEach(oldScript => {
  const newScript = document.createElement("script");
  if (oldScript.src) {

    newScript.src = oldScript.src;
  } else {
    newScript.textContent = oldScript.textContent;
  }
  document.body.appendChild(newScript);
});

    })
    
    
}
localStorage.clear();
    loadPage('pages/login.html');

const app = document.querySelector("#app");
app.innerHTML = `<h1>Hello PWA</h1>`;


// A - Verifico se o browser dá suporte para 'serviceWorker' 👍 👎
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {

    // B - Se existir esse suporte
    navigator
      .serviceWorker
      .register('./serviceWorker.js')
      .then(() => {
        console.log('Service Worker Loaded! :briefcase:')
      })
      .catch(() => {
        console.log('Error: :boom: from load service-worker')
      });
  });

}
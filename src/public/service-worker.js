if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(register => {
      console.log('Register succeeded in scope : ', register.scope);
    });
  });
}

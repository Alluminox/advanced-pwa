if ('storage' in navigator && 'estimate' in navigator.storage) {

    navigator.storage.estimate()
    .then((estimate) => {
      console.log("Estimate Data", estimate);

      const progressEl = document.querySelector("#quotas");
      const text = document.querySelector("#quotas-usage");


      progressEl.setAttribute('max', estimate.quota);
      progressEl.setAttribute('value', estimate.usage);
      const percent = `${Math.round((estimate.usage * 100) / estimate.quota)}`;
      const usage = Math.round(estimate.usage / (1024 * 1024))
      const total = Math.round(estimate.quota / (1024 * 1024))
      text.innerText = `Usage: ~ ${usage} MB, Total: ${total} MB, Percent: ${percent}%`;

    });
}
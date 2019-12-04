// 1 - Importa o Workbox, irá facilitar a criar o serviceWorker
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');


if (workbox) {
  // Sabilita o debug no console do workbox
  workbox.setConfig({ debug: false })
  console.log('Workbox is loaded!');

  /*
  2 - Registrar os arquivos com

  workbox.routing.registerRoute(PARAM1, PARAM2)

  PARAM1 -  new regExp('.*') , essa RegExp define todos os arquivos da pasta

  PARAM2 - workbox.strategies.netWorkFirst(), 
  esse método define a estratégia do cache, se a internet estiver conectado carrega a pagina
  senão ele carrega a página utilizando o cache
  */
  workbox.routing.registerRoute(
    new RegExp('.*'),
    workbox.strategies.networkFirst() // 
  );
}


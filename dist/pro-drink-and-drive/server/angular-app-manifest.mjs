
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-EW4W6SBI.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-YBACVWWJ.js"
  ]
},
  assets: {
    'index.csr.html': {size: 34146, hash: '589921bca2599d55202e82926fd1a3aa6595dae1b94770057e10fd5926bf0d8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27573, hash: 'd8efa5f1b4500ce37456516011a9e80c0ceba836bf54b2296a7b584252a5afbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};

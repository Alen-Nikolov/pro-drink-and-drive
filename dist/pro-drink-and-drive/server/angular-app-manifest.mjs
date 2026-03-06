
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-RFAHL67O.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-LOFSC2LL.js"
  ]
},
  assets: {
    'index.csr.html': {size: 34146, hash: '6ce91b085f6226890042cbd1bea0bf8b295f8fff3875857dcd71f1b2277e51e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27573, hash: 'c7f85881737a5e963f2e315a2e2f1bc2033bdfb281718b4d39acee37c026d1c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};

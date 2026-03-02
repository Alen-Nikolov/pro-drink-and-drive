
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-LHQLGZWN.js"
  ],
  "src/app/pages/home/home.component.ts": [
    "chunk-C2C4EBAA.js"
  ]
},
  assets: {
    'index.csr.html': {size: 34146, hash: '079ba249cd0b8eaa08beb5effb278d8be1ff4da7b45e6c34502b884807a68a76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27573, hash: '0187ab66a157062e63ced1ab4d039e7f51466052c73bc8a8d2f170d2f9f1bf9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};

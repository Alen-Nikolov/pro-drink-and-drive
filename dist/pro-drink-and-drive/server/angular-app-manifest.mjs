
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
    'index.csr.html': {size: 34146, hash: 'cc1c8f5e08cc0f9e91f495a1e836bf43014ed981213c385d19968641ce2cdfc0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27573, hash: '3816d9470614311efa4223b3646f0666723e75b4b218c7be73e4c8088e31454b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};

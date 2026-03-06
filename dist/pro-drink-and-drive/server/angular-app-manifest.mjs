
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
    "chunk-4AGTXO7J.js"
  ]
},
  assets: {
    'index.csr.html': {size: 36049, hash: '2f0da17174a4fbd8fa050e0633de6052a169c3bf9dfaa099a42f20583313c99f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 29476, hash: '6fd9c19660bf585d0e26778998bbb10af9eae0ee3f6fe616108e61d38ecd9241', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZJTXBPAZ.css': {size: 7126, hash: 'AYMTBwra9bM', text: () => import('./assets-chunks/styles-ZJTXBPAZ_css.mjs').then(m => m.default)}
  },
};

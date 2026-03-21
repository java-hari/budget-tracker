
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/java-hari/budget-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/java-hari/budget-tracker/user-login",
    "route": "/java-hari/budget-tracker"
  },
  {
    "renderMode": 2,
    "route": "/java-hari/budget-tracker/user"
  },
  {
    "renderMode": 2,
    "route": "/java-hari/budget-tracker/add-user"
  },
  {
    "renderMode": 2,
    "route": "/java-hari/budget-tracker/user-login"
  },
  {
    "renderMode": 2,
    "route": "/java-hari/budget-tracker/add-expense"
  },
  {
    "renderMode": 2,
    "route": "/java-hari/budget-tracker/transactions"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5339, hash: '886d62fa789deedf9a7719addb9658172dd8cab5a01a305c2fd541645849e809', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1311, hash: '3ea4bafd8f67aa522c6fe350890bc738b5838cba9750eae7fd56688a5dd03db6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user/index.html': {size: 18643, hash: '15cefedde14454097be93c080c079d2d3bdba2c9238d5ab2e3b154bf4cd8608b', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'add-expense/index.html': {size: 28090, hash: 'e9e8d17303aa595bb6acf7f05ced436b2e3b8d39123817d57711cd40fe4558eb', text: () => import('./assets-chunks/add-expense_index_html.mjs').then(m => m.default)},
    'add-user/index.html': {size: 21755, hash: '767720009b868bd273172783ad4a6bd05fc0a38d2a8749ff4ea063cdfaaf8029', text: () => import('./assets-chunks/add-user_index_html.mjs').then(m => m.default)},
    'user-login/index.html': {size: 20231, hash: '084770aad3c48b6ace531d9a54d28fed4aa55d0e6c27fe4bd68035b3a1cfbda1', text: () => import('./assets-chunks/user-login_index_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 24744, hash: '297b22737dca1727613da4c5f40f8a62a95d01eb96b29a16a7c82664b4b7a997', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

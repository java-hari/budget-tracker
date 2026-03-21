
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/budget-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/budget-tracker/user-login",
    "route": "/budget-tracker"
  },
  {
    "renderMode": 2,
    "route": "/budget-tracker/user"
  },
  {
    "renderMode": 2,
    "route": "/budget-tracker/add-user"
  },
  {
    "renderMode": 2,
    "route": "/budget-tracker/user-login"
  },
  {
    "renderMode": 2,
    "route": "/budget-tracker/add-expense"
  },
  {
    "renderMode": 2,
    "route": "/budget-tracker/transactions"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5311, hash: 'ce3c32944b43d5eb919bfb6a6ee11ee02bb7480ea736ba06b021c0617499b74b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1283, hash: '3c357a20ce5fce3eb88ccaf2e693b93b40e921642a3fd0586027cb6404aabb17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user/index.html': {size: 18503, hash: '646aa8e4bd0c87681ebd4d3339445a7341db145f17e2fe99853d2c70efbf6cb5', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'add-user/index.html': {size: 21615, hash: '89d3a409044e676f2f57aab611cabadb33cec944155ec43ba9e732f75816e43c', text: () => import('./assets-chunks/add-user_index_html.mjs').then(m => m.default)},
    'user-login/index.html': {size: 20091, hash: '5006751c5344688cc711499081acd597cd9f116d1bf36c31e3086f153f19fc65', text: () => import('./assets-chunks/user-login_index_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 24604, hash: '70ca266c1735df068300ef46ae0e10a99bee9b4d8cf5900b4e01d2664ed27dad', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'add-expense/index.html': {size: 27950, hash: '45c3a3789d5504744a31bcf7065e6c5191eeea602d020b2b3c6cb73777f0fca6', text: () => import('./assets-chunks/add-expense_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

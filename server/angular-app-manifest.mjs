
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://java-hari.github.io/budget-tracker/',
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
    'index.csr.html': {size: 5338, hash: '6db2ddd3a149e644a0953ff3acd4253b65118b78a87c0051fa9025573162a498', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1310, hash: '75178cb91042464d07438a9bcc6cda4dd9cba5eb4f2883e4f65b702b96e40eab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user/index.html': {size: 18638, hash: 'fabf6df8af1863e3ea13c5080d3c4e06e2dd0e3c1e5bb82e7b94cd8e333eda90', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'add-user/index.html': {size: 21750, hash: '0ef6775da1ca67a3c42942cd9955455908f92d8f08858611b96d1a5d3e974d34', text: () => import('./assets-chunks/add-user_index_html.mjs').then(m => m.default)},
    'user-login/index.html': {size: 20226, hash: '2830fbd52ba4d4196d82994e13eb96711385119a8519a2c9d3820dd10f3ab575', text: () => import('./assets-chunks/user-login_index_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 24739, hash: '2089fead6154afa89f3157d762c015adae04a8fb75a00ac264096876ea7090a6', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'add-expense/index.html': {size: 28085, hash: 'd1a927ca48983310a90f25a22d9538dbb064e1befc6fbd78bbc129a8b8067aa1', text: () => import('./assets-chunks/add-expense_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

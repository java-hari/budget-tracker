
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://java-hari.github.io/budget-tracker',
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
    'index.csr.html': {size: 5337, hash: 'adf0f24d9089df560a4dad154d877ab3c72bf37c23d8d81cb682996c8b3e738a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1309, hash: 'db04596de50466c76e259ad92cd1b598a53d135a3cdafa255309882bd3abd282', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'user/index.html': {size: 18637, hash: 'ac47fcc7515c258101758495773d1e135fdfe2dcbaabfbf3b4f9ff17ad6f9424', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'user-login/index.html': {size: 20225, hash: '569ff0b1c7a67d173726111f4d61f3f00b4934a0dc2326e86435427c5cba2d47', text: () => import('./assets-chunks/user-login_index_html.mjs').then(m => m.default)},
    'add-user/index.html': {size: 21749, hash: '5384cef16cb0ca6035286541d8ffacd30a419a5c19a9acb8e36a012dbd6a6c23', text: () => import('./assets-chunks/add-user_index_html.mjs').then(m => m.default)},
    'add-expense/index.html': {size: 28084, hash: '76e10ba12bd0b020892c09342f44da1d2f72805433c3cb826e30cdd2dece7bb6', text: () => import('./assets-chunks/add-expense_index_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 24738, hash: 'e963c7d80c5b700250c480e7dac8ec9c0410c1cdd13f71855925ac9be6a874f7', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

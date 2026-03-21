
export default {
  basePath: 'https://java-hari.github.io/budget-tracker',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

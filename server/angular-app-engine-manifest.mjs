
export default {
  basePath: 'https://github.com/java-hari/budget-tracker',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

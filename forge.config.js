module.exports = {
  packagerConfig: {
    // 'ignore':['node_modules','.gitignore','forge.config.js','.local_zsh_history']
  },
  hooks: {
    postPackage: async (forgeConfig, options) => {
      // var fs = require('fs');
      // var filePath = 'out/my-app-darwin-arm64/my-app.app/Contents/Resources/app/package.json'; 
      // fs.unlinkSync(filePath);
      // console.log('Packages built at:');
    },

  },
  rebuildConfig: {},
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "vikasvinayak",
          name: "my-app-release"
        }
      }
    }
  ],
  
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};

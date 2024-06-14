module.exports = {
  packagerConfig: {
    name: "CUHK_app",
    icon: "assets/icon.icns",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "CUHK Files",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};

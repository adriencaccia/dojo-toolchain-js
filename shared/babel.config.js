// shared/babel.config.js

const defaultPresets = [
    ["@babel/preset-typescript"],
  ];
  
  const defaultIgnores = ["node_modules", "lib"];
  
  const presetsForESM = [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    ...defaultPresets,
  ];
  const presetsForCJS = [
    [
      "@babel/preset-env",
      {
        modules: "cjs",
      },
    ],
    ...defaultPresets,
  ];
  
  module.exports = {
    env: {
      cjs: {
        ignore: defaultIgnores,
        presets: presetsForCJS,
      },
      esm: {
        ignore: defaultIgnores,
        presets: presetsForESM,
      },
    },
  };
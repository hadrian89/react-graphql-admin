
module.exports = (api) => {
  const isTest = api.env("test");

  const presentEnvOptions = {
    useBuiltIns: "usage",
    corejs: { version: 3 }
  }

  if (isTest) {
    presentEnvOptions.targets = {
      node: "current"
    }
  } else {
    api.cache(true)
  }

  return {
    presets: [["@babel/env", presentEnvOptions], "@babel/react"],
    plugins: ["@babel/transform-runtime", "@babel/plugin-syntax-dynamic-import"],
    env: {
      development: {
        // plugins: ["react-hot-loader/babel"]
      }
    }
  }
}

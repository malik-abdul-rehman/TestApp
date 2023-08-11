module.exports = {
  apps: [
    {
      name: "app",
      script: "./src/App.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

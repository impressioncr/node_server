module.exports = {
  apps : [{
    name      : 'server_80',
    script    : 'prod.server.js',
    env: {
      NODE_ENV: 'development',
      NODE_PORT: 80
    },
    env_production : {
      NODE_ENV: 'production',
      NODE_PORT: 80
    }
  }]
};

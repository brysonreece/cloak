module.exports = {
  apps : [{
    "name"       : "cloak",
    "script"     : 'npm run serve',
    "instances"  : 3,
    "env": {
      "PORT"      : "3000"
    }
  }]
};

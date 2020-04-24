module.exports = {
  apps : [{
    "name"       : "cloak",
    "script"     : 'npm run serve',
    "instances"  : 3,
    "env": {
      "DEBUG"     : "cloak.bryson.cc:*",
      "PORT"      : "3000"
    }
  }]
};

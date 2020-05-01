<h2 align="center">🧥 Cloak</h2>
<h3 align="center">Generate livestream overlays on a whim!</h3>

<br>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?style=for-the-badge&cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.13.4-blue.svg?style=for-the-badge&" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.14.1-blue.svg?style=for-the-badge&" />
</p>

<p align="center">
  <a href="https://bryson.cc/" target="_blank">
    <img alt="Author" src="https://img.shields.io/badge/author-brysonreece-brightgreen.svg?style=for-the-badge&" />
  </a>
  <a href="https://github.com/brysonreece/cloak/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/brysonreece/Cloak?color=brightgreen&style=for-the-badge&" />
  </a>
  <a href="https://cloak.bryson.cc/" target="_blank">
    <img alt="Live Demo" src="https://img.shields.io/badge/Demo-Live-brightgreen.svg?style=for-the-badge&" />
  </a>
</p>

</br>

## Prerequisites

- npm >=6.13.4
- node >=12.14.1

## Installation

Begin by pulling down the repository from GitHub.
```sh
git clone https://github.com/brysonreece/cloak.git
```

After your files are finished cloning, you can enter the project directory and install the necessary dependencies.
```sh
cd cloak

npm install
```

## Usage

### Development
To run the application in **development** mode, you can execute the following.
```sh
DEBUG=cloak:* npm run serve
```
This will instruct Node to initialize the project using port `3000` while listening for any application debug events. When a debug event is fired the related information will then be printed to the console.

### Production
Similarly, if you want to run the application in **production** mode, you can omit the `DEBUG` environment variable.

```sh
npm run serve
```
This will again instruct the Node to initialize the project using port `3000`,however debugging is disabled.

### Clustering / Load Balancing
Using [PM2](https://pm2.keymetrics.io/), Cloak can easily be scaled to any number of load-balanced processes auto-magic-ly by utilizing the information in our `ecosystem.config.js` file.

#### PM2 Installation
If you don't have PM2 installed, you can run the following.
```sh
npm install pm2@latest -g
```
This will install PM2 as a global package on your system, which you can then run at any time by executing the `pm2` command from your shell.

#### Deployment
You can spin up the application spanning multiple processes by instructing PM2 to read our configuration file.
```sh
pm2 start ecosystem.config.js
```

By default, this will spin up three application instances starting at port 3000. You can then configure your web server, such as Nginx ([instructions](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancing)) or Apache ([instructions](https://www.digitalocean.com/community/tutorials/how-to-use-apache-as-a-reverse-proxy-with-mod_proxy-on-ubuntu-16-04)), to load balance across these application ports:
* `127.0.0.1:3000`
* `127.0.0.1:3001`
* `127.0.0.1:3002`

To modify the PM2 application parameters, you can edit the configuration options found in `ecosystem.config.js`.

### Extending

To extend the overlay options available within your application, you can edit `config/rules.js` and insert your own [**express-validation** options](https://express-validator.github.io/docs/index.html).

---

## ✏️ Author
**Bryson Reece**
* Website: [bryson.cc](https://bryson.cc/)
* Email: [hey@bryson.cc](mailto:hey@bryson.cc)
* Twitter: [@brysonio](https://twitter.com/brysonio)
* Github: [@brysonreece](https://github.com/brysonreece)
* LinkedIn: [@brysonreece](https://linkedin.com/in/brysonreece)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

## ❤️ Show your support
Give a ⭐️ if this project helped you!

## 📝 License
Copyright © 2020 [Bryson Reece](https://github.com/brysonreece).<br />
This project is [MIT](https://github.com/brysonreece/cloak/blob/master/LICENSE) licensed.

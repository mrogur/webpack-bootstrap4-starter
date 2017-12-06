### Bootstrap 4 Starter project using Webpack 2

Starter project to develop with [Twitter Bootstrap 4](https://getbootstrap.com/) using [Webpack 2](https://webpack.js.org/) with BrowserSync live reload server.
Additionally provided support for  PHP files watch with BrowserSync when running on local LAMP server. 

### Installation

You must have got Node.js installed.

Clone project, navigate to project root directory and run

```bash
    npm install
```
### Usage

Build project
```bash
    npm run build
```

Start live reload BrowserSync session
```bash
    npm run watch
```

Build project for production (minifies CSS styles and JavaScript)
```bash
    npm run production
```

### PHP Support
To make possible edit your PHP code with live page reloads support you can configure __BrowserSyncPlugin__ in __webpack.config.js__ file
to watch php files on your development server. Suppose you've got your local PHP site at address 
[http://your-local-site-url.dev]() you must edit proxy property like this: 

```javascript 1.6
new BrowserSyncPlugin({
            proxy: 'your-local-site-url.dev',
            files: [
                '**/*.php'
            ],
            port: 3000
            // ... 
            });
``` 

To learn more about live reloading visit BrowserSync site: [https://www.browsersync.io](https://www.browsersync.io)

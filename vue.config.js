const path = require('path');
const mockdata = require('./src/mock/test.json');
// const mockdata = require('./src/mock/index.js');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 基本路径
//  baseUrl: process.env.NODE_ENV === 'production'
//  ? '/'
//  : '/',
  // 输出文件目录
  outputDir: 'dist',
  indexPath: 'index.html', // Default: 'index.html'
  filenameHashing: true,
  // 构建多页时使用
  pages: undefined,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  //  compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    /* config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        }) */
    // config.module.rule('semi').use('0');
    config.plugin('html').tap(args => { args[0].chunksSortMode = 'none'; return args })
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  //  vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,

  // css相关配置
  css: {
  // 是否使用css分离插件 ExtractTextPlugin
    //   extract: true,
    //   // 开启 CSS source maps?
    //   sourceMap: false,
    //   // css预设器配置项
    loaderOptions: {
      sass: {
        // data参数是scss-loader8.0以下的版本使用
        prependData: "@import'@/assets/css/variables.scss'"
      }
    }
    //   // 启用 CSS modules for all css / pre-processor files.
    //   modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  //  dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {
      app.get('/news/list', (req, res, next) => {
        res.json(mockdata.news);
      });
      app.post('/news/list2', (req, res, next) => {
        res.json(mockdata.news2);
      });
    }
  },
  // 第三方插件配置
  pluginOptions: {}
  //   lintOnSave: true,
  //   chainWebpack: (config) => {
  //     config.resolve.alias
  //     //   .set('@', resolve('src'))
  //       .set('@assets',resolve('src/assets'))
  //       // 这里只写了两个，你可以自己再加，按这种格式.set('', resolve(''))
  //   },
  //   devServer: {
  //     host: "localhost",
  //     port: 8080, // 端口号
  //     https: false, // https:{type:Boolean}
  //     open: true, //配置自动启动浏览器
  //     // proxy: 'http://localhost:9000' // 配置跨域处理,只有一个代理

//     // 配置多个代理
//     proxy: {
//       "/api": {
//         target: "<url>",//目标主机
//         ws: true,//代理的WebSockets
//         changeOrigin: true//需要虚拟主机站点
//       },
//       "/api2": {
//         target: "<other_url>"
//       }
//     }
//   }
};

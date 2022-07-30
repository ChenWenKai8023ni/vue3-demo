/*
 * @Date: 2022-07-23 14:46:51
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 16:02:10
 * @FilePath: \vite-vue3-js\vite.config.js
 */
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
//提供 Vue 3 单文件组件支持
// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
import vue from '@vitejs/plugin-vue'
//提供传统浏览器兼容性支持
// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
import legacy from '@vitejs/plugin-legacy'
// gzip 插件
// https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md
import viteCompression from 'vite-plugin-compression';
// https://vite-plugin-pwa.netlify.app/guide/pwa-minimal-requirements.html#web-app-manifest
import { VitePWA } from 'vite-plugin-pwa'
// 组合式api自动导入
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
//组件自动导入
// https://github.com/antfu/unplugin-auto-import
import Components from 'unplugin-vue-components/vite'





// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // console.log(command, 'command')
  // console.log(mode, 'mode')
  // console.log(env, 'env')
  return {
    //项目根目录
    root: "./",
    //打包后的资源文件路径
    base: "./",
    mode: env.ENV,// 模式 生产|开发
    define: {//全局常量
      // 每项在开发环境下会被定义在全局，而在构建时被静态替换。
      _VITE_APP_API_: JSON.stringify(env.VITE_APP_API)
    },
    //作为静态资源服务的文件夹。
    publicDir: "public",
    // 存储缓存文件的目录
    // cacheDir:"",
    resolve: {
      alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
      },
      extensions: ['.js'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    json: {
      //是否支持从 .json 文件中进行按名导入
      namedExports: true,
      //若设置为 true 导入的json会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
      stringify: false
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/style/main.scss";'
        }
      }
    },
    //本地运行配置，以及反向代理配置
    server: {
      host: "localhost",
      https: false,//是否启用 http 2
      cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
      open: true,//服务启动时自动在浏览器中打开应用
      port: "9000",
      strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
      force: true,//是否强制依赖预构建
      hmr: true,//禁用或配置 HMR 连接
      // 传递给 chockidar 的文件系统监视器选项
      watch: {
        ignored: ["!**/node_modules/your-package-name/**"]
      },
      // 反向代理配置
      proxy: {
        '/api': {
          target: env.VITE_APP_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    //打包配置
    build: {
      //  modules |esnext
      //浏览器兼容性
      target: "modules",
      //打包输出路径
      outDir: "dist",
      //打包出的静态资源的存放路径 （相对于 build.outDir）
      assetsDir: "assets",
      // /小于此阈值的导入或引用资源将内联为base64编码
      assetsInlineLimit: 4096,
      //默认true css代码拆分
      cssCodeSplit: true,
      //默认和 build.target一样css兼容
      cssTarget: "chrome61",
      //是否生成 source map 文件
      sourcemap: false,
      //自定义底层的 Rollup 打包配置 https://rollupjs.org/guide/en/#big-list-of-options
      rollupOptions: {},
      // 传递给 @rollup/plugin-commonjs 插件的选项。
      commonjsOptions: {},
      // 当设置为 true 时，构建也将生成 SSR 的 manifest 文件，以确定生产中的样式链接与资产预加载指令。
      manifest: false,
      // boolean | 'terser' | 'esbuild' 
      // 混淆器
      minify: "esbuild"
    },
    // 插件
    plugins: [
      vue({
        //启用响应性语法糖
        reactivityTransform: true
      }),
      // 浏览器兼容
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      viteCompression(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'chenwk',
          short_name: 'chenwk',
          description: 'chenwk',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia'
        ],
        // AutoImport.d ts的全局声明,
        // dts: './auto-imports.d.js',
        dts: false,
        // 自动导入Vue模板  
        vueTemplate: true,
      }),
      Components({
        // relative paths to the directory to search for components.
        dirs: ['src/components'],
        // valid file extensions for components.
        extensions: ['vue'],
        // search for subdirectories
        deep: true,
        // 生成components.d ts的全局声明,
        // dts: './auto-components.d.js',
        dts: false,
      })
    ],
  }
})
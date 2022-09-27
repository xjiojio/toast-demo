import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postcsspxtoviewport from 'postcss-px-to-viewport';
import viteCompression from 'vite-plugin-compression';
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/3x/",
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [NutuiResolve()],
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          exclude: [],
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/common/scss/index.scss';
          @import "@nutui/nutui/dist/styles/variables.scss";
        `,
      },
    },
  },
  // server: {
  //   port: 2021,
  //   host: "0.0.0.0",
  //   proxy: {
  //     "/devServer": {
  //       target: "https://nutui.jd.com",
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/devServer/, ""),
  //     },
  //     "/devTheme": {
  //       target: "https://nutui.jd.com/theme/source",
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/devTheme/, ""),
  //     },
  //   },
  // },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});

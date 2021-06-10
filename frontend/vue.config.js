const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const lodashModuleReplacePlugin = require('lodash-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const targetSCFPath = path.join(
  __dirname,
  'dist',
  process.env.NODE_ENV === 'production' ? 'build' : 'dev',
  process.env.UNI_PLATFORM,
  'cloudfunctions',
);

module.exports = {
  chainWebpack: config => {
    // 避免构建时检查TS出现找不到vue实例中的属性
    config.plugins.delete('fork-ts-checker');
  },
  // 配置路径别名
  configureWebpack: () => {
    const newConfig = {
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(__dirname, './src/cloudfunctions'),
              to: targetSCFPath,
            },
          ],
        }),

        // new BundleAnalyzerPlugin({
        //   analyzerPort: '9999'
        // }),
      ],
      devServer: {
        // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
        disableHostCheck: true,
      },
      resolve: {
        alias: {
          '@cmps': '@/components',
          lodash: '@/utils/lodash',
          dateformat: '@/utils/dateformat.js',
          log: '@/utils/log.js',
        },
      },
    };

    // newConfig.plugins.push(new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.join(__dirname, './src/dev.conf'),
    //       to: path.join(targetSCFPath, 'getEnvAlias'),
    //     },
    //   ],
    // }));
    return newConfig;
  },
};

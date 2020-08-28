/*
 * @Description: 相关开发配置
 * @Author: 
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-28 13:54:41
 * @LastEditTime: 2019-08-09 17:25:22
 */
let path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,//关闭生产环境中的源代码
    // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('@', resolve('src'))
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // assetsDir: 'static',
    //axios域代理，解决axios跨域问题
    devServer: {

    }
}
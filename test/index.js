const path = require('path')
process.chdir(path.join(__dirname, 'smoke/template'))//指向运行文件目录

// npm run test 会自动执行index.js文件 //需要测试什么就加进来
describe('builder-webpack test case', () => {
    // require('./smoke/index')//冒烟测试
    require('./unit/webpack-base-test')//单元测试
})
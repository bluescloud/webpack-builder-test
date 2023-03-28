const assert = require('assert') //断言来判断接口内容是否相等
// const expect = require('chai').expect
describe('', () => {
    const baseConfig = require('../../lib/webpack.base')
    it('entry', (done) => {
        assert.equal(baseConfig.entry.index, 'D:/E/demo/geektime-webpack/webpack-builder/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, 'D:/E/demo/geektime-webpack/webpack-builder/test/smoke/template/src/search/index.js');
        done()
    });
})
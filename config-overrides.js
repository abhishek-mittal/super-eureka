/* config-overrides.js */
const path = require('path')
const { addWebpackAlias } = require('customize-cra')


module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = addWebpackAlias({
        ['@statics']: path.resolve(__dirname, 'src', 'statics')
    })(config)

    return config;
}
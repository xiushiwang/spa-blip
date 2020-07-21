'use strict';

const environment = (process.env.NODE_ENV || 'development').trim();

module.exports = {
    target: 'node'
    };

if (environment === 'development') {
    module.exports = require('./config/webpack.config.dev');
} else {
    module.exports = require('./config/webpack.config.prod');
}
const minify = require('@node-minify/core')
const cleanCSS = require('@node-minify/clean-css')
const htmlMinifier = require('@node-minify/html-minifier')

minify({
    compressor: cleanCSS,
    input: './css/style.dev.css',
    output: './css/style.css',
    callback: function(err, min) {
        console.log(err)
    }
})

minify({
    compressor: htmlMinifier,
    input: 'index.dev.html',
    output: 'index.html',
    options: {
        removeAttributeQuotes: true,
    },
    callback: function(err, min) {
        console.log(err)
    }
})

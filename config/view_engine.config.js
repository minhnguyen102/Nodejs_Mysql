const express = require("express")
module.exports = (app) => {
    app.set('view engine', 'pug')
    app.set('views', './views')
    // config static file
    // app.use(express.static('../public'))
}
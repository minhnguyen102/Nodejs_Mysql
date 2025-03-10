const dashboardRouter = require("./dashboard.router")
const productRouter = require("./product.router")

module.exports = (app) => {
    const prefix_admin = "/admin"
    app.use(prefix_admin + "/dashboard", dashboardRouter);
    app.use(prefix_admin + "/products", productRouter);
}
const Koa = require("koa");
const Router = require("koa-router");
const serve = require('koa-static');

const app = new Koa();
const router = new Router();
const kPort = 81;

app.use(serve("./static"));

app.listen(kPort, () => {
    console.log("listening on:", kPort, "pid:", process.pid);
});

"use strict";

var Koa = require("koa");

var Router = require("koa-router");

var serve = require('koa-static');

var app = new Koa();
var router = new Router();
var kPort = 81;
app.use(serve("./static"));
app.listen(kPort, function () {
  console.log("listening on:", kPort, "pid:", process.pid);
});
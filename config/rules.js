var query = require('express-validator').query;
var colors = require('./colors');

var colorOptions = Object.keys(colors);

module.exports = [
  query("align").optional().isString().isIn(["left", "right", "center"]),
  query("bg").optional().isString().isIn(colorOptions),
  query("color").optional().isString().isIn(colorOptions),
  query("margin").optional({ checkFalsy: true }).isNumeric(),
  query("scale").optional({ checkFalsy: true }).isNumeric(),
  query("text").optional({ checkFalsy: true }).isString().trim(),
  query("weight")
    .optional()
    .isString()
    .isIn(["bold", "bolder", "lighter", "normal"]),
];

var express = require('express');
var router = express.Router();
var { query, validationResult, matchedData } = require('express-validator');
var colors = require('./colors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET bold page. */
router.get('/bold', [
  query('text')
    .optional({ checkFalsy: true })
    .isString()
    .trim(),
  query('scale')
    .optional({ checkFalsy: true })
    .isNumeric(),
  query('align')
    .optional()
    .isString()
    .isIn(['left', 'right', 'center']),
  query('color')
    .optional()
    .isString()
    .isIn(Object.keys(colors)),
  query('bg')
    .optional()
    .isString()
    .isIn(Object.keys(colors)),
  query('weight')
    .optional()
    .isString()
    .isIn(['bold', 'bolder', 'lighter', 'normal']),
  query('margin')
    .optional({ checkFalsy: true })
    .isNumeric()
], function(req, res, next) {
    const data = matchedData(req, { locations: ['query'] });

    res.render('bold', {
      text:          data.text,
      textSize:      data.scale > 0 ? data.scale : 8,
      textColor:     data.color ? data.color : 'black',
      textAlignment: data.align ? data.align : 'right',
      textWeight:    data.weight ? data.weight : 'normal',
      bg:            data.bg ? colors[data.bg] : null,
      margin:        data.margin ? data.margin : 4,
    });
});

module.exports = router;

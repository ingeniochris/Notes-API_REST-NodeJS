const {Router} = require('express');
const route = Router();
const {getIndex}=require('../controller/index');

route.route('/').get(getIndex)

module.exports = route;

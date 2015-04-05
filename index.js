var map = require("through2-map");

module.exports = make_repeat;
module.exports.obj = make_repeat_obj;

function make_repeat() {
	return map(repeat);
}

function make_repeat_obj() {
	return map.obj(repeat);
}

function repeat(data) {
	return data;
}

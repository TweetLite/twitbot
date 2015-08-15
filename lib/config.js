'use strict';

var fs = require('fs');
var path = require('path');

function Config(path_,name_) {
	if (!(this instanceof Config)) {
		return new Config(path_,name_);
	}
	if (path_) {
		this._path = path_;
	} else {
		this._path = __dirname;
	}
	if (name_) {
		this._name = name_;
	} else {
		this._name = 'config.json';
	}
	this._pp = path.join(this._path, this._name);
	this._file();
	return this;
}

Config.prototype._file = function () {
	if (!fs.existsSync(this._pp)) {
		fs.writeFileSync(this._pp, JSON.stringify({}, null, '  ').toString(), 'utf8');
	}
};

Config.prototype.set = function (key, obj) {
	var data = require(this._pp);
	data[key] = obj;
	fs.writeFileSync(this._pp, JSON.stringify(data, null, '  ').toString(), 'utf8');
};

Config.prototype.get = function (key) {
	var data = JSON.parse(fs.readFileSync(this._pp));
	try {
		return data[key];
	} catch (e) {
		return null;
	}
};

Config.prototype.list = function () {
	return Object.keys(JSON.parse(fs.readFileSync(this._pp)));
};

Config.prototype.flush = function () {
	if (fs.existsSync(this._pp)) {
		fs.writeFileSync(this._pp, JSON.stringify({}, null, '  ').toString(), 'utf8');
	}
};

module.exports = exports = Config;
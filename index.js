var through = require("through2"),
	gutil = require("gulp-util"),
	gm = require('gm');

module.exports = function (param) {
	"use strict";

	// if necessary check for required param(s), e.g. options hash, etc.
	if (!param) {
		throw new gutil.PluginError("gulp-watermark", "No param supplied");
	}

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function watermark(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-watermark", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

			/**
			 * -gravity
			 *   NorthWest,
			 *   North,
			 *   NorthEast,
			 *   West,
			 *   Center,
			 *   East,
			 *   SouthWest,
			 *   South,
			 *   SouthEast
			 *
			 * -resize
			 *   Ex. 50%
			 */
			var gravity = param.gravity || 'SouthEast';
			var resize = param.resize || '100%';
			gm(file.contents, file.path)
				.command('composite')
				.in('-gravity', gravity)
				.in('-resize', resize)
				.in(param.image)
				.toBuffer(function(err, buffer) {
					file.contents = buffer;
					callback(null, file);
				})


		} else {
			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-watermark", "Undefined file error"));
			return callback();
		}

	}

	return through.obj(watermark);
};

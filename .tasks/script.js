import {
	src,
	dest
} from "gulp";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import uglifyES from "gulp-uglify-es";
import browserify from "browserify";
import sourcemap from "gulp-sourcemaps";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";

const jsTask = () => {
	return browserify({
			basedir: '.',
			entries: ['src/js/main.js'],
			debug: true,
			sourceMaps: true
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(plumber(function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemap.init({
			loadMaps: true
		}))
		.pipe(uglifyES())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(sourcemap.write('.'))
		.pipe(dest('dist/js'));
};

const jsTask2 = () => {
	return src([
			'src/js/**.js',
			'!src/js/main.js'
		])
		.pipe(plumber(function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemap.init({
			loadMaps: true
		}))
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(sourcemap.write('.'))
		.pipe(dest('dist/js'));
}

module.exports = {
	jsTask,
	jsTask2
};
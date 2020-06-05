import {
	src,
	dest,
} from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';

const pugTask = () => {
	return src('src/**.pug')
		.pipe(plumber(function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(pug({
			pretty: '\t',
		}))
		.pipe(dest('dist'));
};

module.exports = {
	pugTask
};
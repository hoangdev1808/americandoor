import {
	src,
	dest,
} from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import cssSort from 'css-declaration-sorter';
import autoprefixer from 'autoprefixer';
import sourcemap from 'gulp-sourcemaps';
import {readFileSync,} from 'graceful-fs';

const cssCore = () => {
	const vendors = JSON.parse(readFileSync('_vendors.json'));
	const cssVendors = vendors.css;
	return src(cssVendors, {
			allowEmpty: true,
		})
		.pipe(sourcemap.init())
		.pipe(concat('core.min.css'))
		.pipe(postcss([
			autoprefixer({
				cascade: false,
			}),
			cssSort({
				order: 'concentric-css',
			}),
		]))
		.pipe(cleanCSS({
			compatibility: 'ie9'
		}))
		.pipe(sourcemap.write('.'))
		.pipe(dest('dist/css'))
};

module.exports = {
	cssCore
}
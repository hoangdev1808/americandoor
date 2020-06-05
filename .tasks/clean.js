import del from 'del';

const cleanDist = () => {
	return del('dist')
};

const cleanAssets = () => {
	return del('dist/assets')
};

module.exports = {
	cleanDist,
	cleanAssets,
};
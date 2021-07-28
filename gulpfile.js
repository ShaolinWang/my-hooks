const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');

gulp.task('cjs', function () {
	const tsProject = ts.createProject('tsconfig.json', {
		module: 'CommonJS',
	});
	return tsProject
		.src()
		.pipe(tsProject())
		.pipe(
			babel({
				configFile: './.babelrc',
			}),
		)
		.pipe(gulp.dest('dist/lib'));
});

gulp.task('es', function () {
	const tsProject = ts.createProject('tsconfig.json', {
		module: 'ESNext',
	});
	return tsProject
		.src()
		.pipe(tsProject())
		.pipe(
			babel({
				configFile: './.babelrc',
			}),
		)
		.pipe(gulp.dest('dist/es'));
});

gulp.task('declaration', function () {
	const tsProject = ts.createProject('tsconfig.json', {
		declaration: true,
		emitDeclarationOnly: true,
	});
	return tsProject
		.src()
		.pipe(tsProject())
		.pipe(gulp.dest('dist/es'))
		.pipe(gulp.dest('dist/lib'));
});

exports.default = gulp.series('cjs', 'es', 'declaration');

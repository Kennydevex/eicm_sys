const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js').version();
// .sass('resources/sass/app.scss', 'public/css').version();

/*if (mix.inProduction()) {
mix.version();
}*/

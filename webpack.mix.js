const mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js').version();
// .sass('resources/assets/sass/app.scss', 'public/css').version();

/*if (mix.inProduction()) {
    mix.version();
}*/

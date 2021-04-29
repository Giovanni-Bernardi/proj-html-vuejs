let mix = require('laravel-mix');
mix
    .js('src/app.js', 'dist')
    .sass('src/style.scss', '')
    .setPublicPath('dist')
    .copy('src/index.html', 'dist')

    mix.options({
        // Don't perform any css url rewriting by default
        processCssUrls: false,
    })
;
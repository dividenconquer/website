const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withImages = require('next-images')
module.exports = withPlugins([
    withImages,
    [withCSS], [withFonts], [withSass]
]);
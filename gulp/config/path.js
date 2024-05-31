import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = "./dist"
const srcFolder = "./#src"

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },
    src: {
        app_js: `${srcFolder}/js/app.js`,
        js: [`${srcFolder}/js/*.js`, `!${srcFolder}/js/app.js`],
        images: `${srcFolder}/img/**/*.{png,webp,jpeg,jpg,gif}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        fonts: `${srcFolder}/fonts/*.*`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    buildFolder: buildFolder,
    rootFolder: rootFolder,
    ftp: "public_html/"
}
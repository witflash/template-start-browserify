const destPath = 'docs';

const config = {
  src: {
    root: 'src',
    sass: 'src/sass',
    css: 'src/css',
    html: 'src/html',
    js: 'src/js',
    jsEntry: 'src/js/modules/main.js',
    img: 'src/img',
    fonts: 'src/fonts',
  },
  dest: {
    root: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    img: `${destPath}/images`,
    fonts: `${destPath}/fonts`,
  },
};

module.exports = config;

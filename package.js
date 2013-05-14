Package.describe({
  summary: "CanvasResize package for meteor"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/binaryajax.js',
    'lib/canvasResize.js',
    'lib/exif.js',
    'lib/jquery.canvasResize.js',
    'lib/jquery.exif.js',
    'lib/zepto.min.js',
  ], 'client'
  );
});
# gulp-watermark

> watermark plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-watermark` as a development dependency:

```shell
npm install --save-dev gulp-watermark
```

Then, add it to your `gulpfile.js`:

```javascript
var watermark = require("gulp-watermark");

gulp.src("./src/*.ext")
	.pipe(watermark({
		image: "test/fixtures/github.png",
        resize: '100x100',
        gravity: 'Center'
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### watermark(options)

#### options.image
Type: `String`  

The Image Path you want to use as watermark.

#### options.resize

Type: `String`<br>
Default: `100%`

Possible values: `<width>x<height>`, `<resize>%`

The Resize Parameter for watermark.

#### options.gravity

Type: `String`<br> 
Default: `SouthEast`

Possible values: `NorthWest`, `North`, `NorthEast`, `West`, `Center`, `East`, `SouthWest`, `South`, `SouthEast`

The direction the primitive gravitates to when annotating the watermark image. Defaults to SouthEast.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


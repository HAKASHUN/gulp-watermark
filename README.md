# gulp-watermark

> watermark plugin for [gulp](https://github.com/wearefractal/gulp)

![preview](https://cloud.githubusercontent.com/assets/1150412/6130144/9f58aef4-b186-11e4-96b4-44bc0a1837f8.jpg)

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
        gravity: 'Center',
        dissolve: 30
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

#### options.dissolve
Type: `Number`<br>
Default: `100`

Possible values: `0-100`

Indicates the level of dissolve from 0 to 100. 0 is completely transparent, and 100 is completely opaque.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


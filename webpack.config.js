const path = require('path')


module.exports = {
  entry: './src/index.ts', // <-- inclucde files that import to this source file
  module: {
    rules: [
      {
        test: /\.ts$/,   // <--- filename.ts, $ means .ts will at the end not .tsfileName 
        use: 'ts-loader',  // check if the file ends .ts, then run ts-loader which compile from ts to js
        include: [path.resolve(__dirname, 'src')] // specify the ts code location in src only
      }
    ]
  },
  output: {
    // publicPath: 'public', //  <--- whenever change and save it will print
    filename: 'bundle.js', // <--- file name that after compile from .ts to .js
    path: path.resolve(__dirname, 'public') // <--- compiled files location
  },
  mode: 'development'
}
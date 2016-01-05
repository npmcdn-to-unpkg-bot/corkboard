var babel = require('babel-core')
var babylon = require('babylon')
var generate = require('babel-generator')

var code = `
devcard("Foo Example", [
  \`# Foo bar baz\`
])

class Foo {
}

devcard("Foo Usage", ["Pretty sweet usage"])
`

var macro = function macro() {
  return {
    visitor: {
      'CallExpression': function CallExpression(path, bar) {
        var node = path.node;
        var basename = bar.file.opts.basename;
        if (node.callee.name === 'devcard') {
          console.log(node)
          node.callee.name = 'registerCard';
        }
      }
    }

  }
}

// console.log(code)

var ast = babylon.parse(code)

console.log(babel.transform(code, {
  filename: 'src/Program/Foo.js',
  plugins: [macro]
}).code)

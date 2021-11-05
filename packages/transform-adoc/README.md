# @patternfly/transform-adoc
Maps known asciidoc structures to PatternFly components

## Node

const asciidoctor = require('asciidoctor')();
const { addReactConverter } = require('@patternfly/quickstarts-adoc');
addReactConverter(asciidoctor);

### Example usage with webpack to parse *.adoc files
```js
const asciidoctor = require('asciidoctor')();
const { addReactConverter } = require('@patternfly/quickstarts-adoc');
addReactConverter(asciidoctor);

module.exports = (_env, argv) => {
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: 'src/**/*.adoc',
                to: ({ absoluteFilename }) => {
                    // The dirname of adoc is used as the output key
                    const dirName = path.basename(path.dirname(absoluteFilename));
                    if (_env === 'development') {
                        return `${dirName}.adoc.html`;
                    }
                    return `${dirName}.[contenthash].adoc.html`;
                },
                transform: (content) => {
                    const html = asciidoctor.convert(content);
                    return html;
                },
                noErrorOnMissing: true,
            }],
        }),
    ]
}
```

## ESM
TODO
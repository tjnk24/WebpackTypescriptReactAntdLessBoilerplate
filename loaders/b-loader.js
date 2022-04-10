const fs = require('fs');

module.exports = function loader(content) {
    this.addDependency(this.resourcePath);

    const css = fs.readFileSync(this.resourcePath, 'utf-8');
    const match = css.match(/\.([a-z-_0-9]+)/i);

    if (!match) {
        return content;
    }

    return [
        `import b_ from 'b_'`,
        `const b = b_.with('${match[1]}');`,
        `export {b}`,
        content,
    ].join('\n');
};

export function stringReplacer(root, replaceOptions) {
  const r = `\\${replaceOptions.delimiter.start}(.*?)` + `\\${replaceOptions.delimiter.end}`;
  const regex = new RegExp(r, 'gm');

  function replacer(match: any, p1: string | number) {
    return replaceOptions.dictionary[p1] || match;
  }

  if (root !== null) {
    switch (typeof root) {
      case 'string':
        root = root.replace(regex, replacer);
        break;
      case 'object':
        if (root instanceof Array) {
          const length = root.length;
          for (let i = 0; i < length; i++) {
            root[i] = stringReplacer(root[i], replaceOptions);
          }
        } else {
          for (const prop in root) {
            if (Object.prototype.hasOwnProperty.call(root, prop)) {
              // skip this property
              if (replaceOptions.skip && replaceOptions.skip(root[prop])) {
                return root;
              }
              root[prop] = stringReplacer(root[prop], replaceOptions);
            }
          }
        }
        break;
      default:
        break;
    }
  }
  return root;
}

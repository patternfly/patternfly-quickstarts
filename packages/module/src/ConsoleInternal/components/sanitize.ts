// eslint-disable-next-line @typescript-eslint/no-require-imports
const DOMPurify = require('dompurify');

// const tableTags = ['table', 'thead', 'tbody', 'tr', 'th', 'td'];

export const sanitize = (html: string) => {
  DOMPurify.addHook('beforeSanitizeElements', function(node) {
    // nodeType 1 = element type

    // transform anchor tags
    if (node.nodeType === 1 && node.nodeName.toLowerCase() === 'a') {
      node.setAttribute('rel', 'noopener noreferrer');
      return node;
    }

    // add PF class to ul and ol lists
    if (
      node.nodeType === 1 &&
      (node.nodeName.toLowerCase() === 'ul' || node.nodeName.toLowerCase() === 'ol')
    ) {
      node.setAttribute('class', 'pf-c-list');
      return node;
    }
  });

  // Add a hook to make all links open a new window
  DOMPurify.addHook('afterSanitizeAttributes', function(node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
      node.setAttribute('target', '_blank');
    }
    // set non-HTML/MathML links to xlink:show=new
    if (
      !node.hasAttribute('target') &&
      (node.hasAttribute('xlink:href') || node.hasAttribute('href'))
    ) {
      node.setAttribute('xlink:show', 'new');
    }
  });

  return DOMPurify.sanitize(html, {
    USE_PROFILES: {
      html: true,
      svg: true,
    },
    // ALLOWED_TAGS: [
    //   'b',
    //   'i',
    //   'strike',
    //   's',
    //   'del',
    //   'em',
    //   'strong',
    //   'a',
    //   'p',
    //   'h1',
    //   'h2',
    //   'h3',
    //   'h4',
    //   'ul',
    //   'ol',
    //   'li',
    //   'code',
    //   'pre',
    //   'button',
    //   ...tableTags,
    //   'div',
    //   'img',
    //   'span',
    //   'svg',
    // ],
    // ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'src', 'alt', 'id'],
    // ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|didact):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  });
};

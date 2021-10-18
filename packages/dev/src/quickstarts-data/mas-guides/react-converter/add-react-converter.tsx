import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Asciidoctor } from 'asciidoctor';
import { Alert } from '@patternfly/react-core';

const addReactConverter = (asciidoctor: Asciidoctor) => {
  class ReactConverter {
    baseConverter = asciidoctor.Html5Converter.create();

    convert(node: Asciidoctor.AbstractBlock, transform: string) {
      const isImportantBlock = node.getAttribute('style') === 'IMPORTANT';
      if (isImportantBlock) {
        const important = ReactDOMServer.renderToStaticMarkup(
          <Alert title="Alert Title">{node.getContent()}</Alert>,
        );
        return important;
      }
      return this.baseConverter.convert(node, transform);
    }
  }

  asciidoctor.ConverterFactory.register(ReactConverter, ['html5']);
};

exports.addReactConverter = addReactConverter;

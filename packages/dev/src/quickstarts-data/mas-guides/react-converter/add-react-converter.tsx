import { Asciidoctor } from 'asciidoctor';
import { isTaskLevelPrereqs, isTaskLevelProcedure, renderPFList } from './util';

const addReactConverter = (asciidoctor: Asciidoctor) => {
  class ReactConverter {
    baseConverter = asciidoctor.Html5Converter.create();

    convert(node: Asciidoctor.AbstractBlock, transform: string) {
      if (isTaskLevelPrereqs(node)) {
        return renderPFList(node as Asciidoctor.List);
      }
      if (isTaskLevelProcedure(node)) {
        return renderPFList(node as Asciidoctor.List);
      }
      return this.baseConverter.convert(node, transform);
    }
  }

  asciidoctor.ConverterFactory.register(ReactConverter, ['html5']);
};

exports.addReactConverter = addReactConverter;

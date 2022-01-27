import { Asciidoctor } from 'asciidoctor';
import {
  isAdmonitionBlock,
  isOpenBlockProcedure,
  isTaskLevelPrereqs,
  isTaskLevelProcedure,
  renderAdmonitionBlock,
  renderOpenBlockPFList,
  renderPFList,
} from './util';

export const addReactConverter = (asciidoctor: Asciidoctor) => {
  class ReactConverter {
    baseConverter = asciidoctor.Html5Converter.create();

    convert(node: Asciidoctor.AbstractBlock, transform: string) {
      if (isAdmonitionBlock(node)) {
        return renderAdmonitionBlock(node as Asciidoctor.AbstractBlock, false);
      }
      if (isOpenBlockProcedure(node)) {
        return renderOpenBlockPFList(node as Asciidoctor.AbstractBlock);
      }
      if (isTaskLevelPrereqs(node) || isTaskLevelProcedure(node)) {
        return renderPFList(node as Asciidoctor.List);
      }
      return this.baseConverter.convert(node, transform);
    }
  }

  asciidoctor.ConverterFactory.register(ReactConverter, ['html5']);
};

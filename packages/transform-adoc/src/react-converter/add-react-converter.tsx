import { Asciidoctor } from 'asciidoctor';
import {
  isCautionBlock,
  isImportantBlock,
  isNoteBlock,
  isTaskLevelPrereqs,
  isTaskLevelProcedure,
  isTipBlock,
  isWarningBlock,
  renderPFImportant,
  renderPFList,
  renderPFNote,
} from './util';

export const addReactConverter = (asciidoctor: Asciidoctor) => {
  class ReactConverter {
    baseConverter = asciidoctor.Html5Converter.create();

    convert(node: Asciidoctor.AbstractBlock, transform: string) {
      if (isNoteBlock(node) || isTipBlock(node)) {
        return renderPFNote(node as Asciidoctor.AbstractBlock, false);
      }
      if (isImportantBlock(node) || isCautionBlock(node) || isWarningBlock(node)) {
        return renderPFImportant(node as Asciidoctor.AbstractBlock, false);
      }
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

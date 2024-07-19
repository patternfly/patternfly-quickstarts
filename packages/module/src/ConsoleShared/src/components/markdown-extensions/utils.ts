export const removeTemplateWhitespace = (template: string): string =>
  template.replace(/>(?:\s|\n)+</g, '><');

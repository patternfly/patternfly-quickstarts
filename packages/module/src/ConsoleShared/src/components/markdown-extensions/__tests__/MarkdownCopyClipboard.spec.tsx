import { render } from '@testing-library/react';
import {
  QuickStartContext,
  QuickStartContextDefaults,
} from '@quickstarts/utils/quick-start-context';
import MarkdownCopyClipboard from '../MarkdownCopyClipboard';
import { MARKDOWN_COPY_BUTTON_ID } from '../const';
import { htmlDocumentForCopyClipboard } from './test-data';

const contextValues = {
  ...QuickStartContextDefaults,
  getResource: (key: string) => key,
};

describe('MarkdownCopyClipboard', () => {
  beforeAll(() => {
    document.body.innerHTML = htmlDocumentForCopyClipboard;
  });

  it('should render null if no element is found', () => {
    const { container } = render(
      <QuickStartContext.Provider value={contextValues}>
        <MarkdownCopyClipboard docContext={document} rootSelector="#copy-markdown-3" />
      </QuickStartContext.Provider>,
    );
    expect(container.firstChild).toBeNull();
  });

  it('should render copy targets when rootSelector matches buttons in the document', () => {
    render(
      <QuickStartContext.Provider value={contextValues}>
        <MarkdownCopyClipboard docContext={document} rootSelector="#copy-markdown-1" />
      </QuickStartContext.Provider>,
    );
    const elements = document.querySelectorAll(`#copy-markdown-1 [${MARKDOWN_COPY_BUTTON_ID}]`);
    expect(elements).toHaveLength(2);
  });
});

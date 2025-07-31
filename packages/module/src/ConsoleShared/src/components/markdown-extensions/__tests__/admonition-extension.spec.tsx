import { renderHook } from '@testing-library/react';
import useAdmonitionShowdownExtension from '../admonition-extension';
import { marked } from 'marked';

// Mock marked
jest.mock('marked', () => ({
  marked: {
    parseInline: jest.fn((text) => `<strong>${text}</strong>`),
  },
}));

// Mock DOMPurify
jest.mock('dompurify', () => ({
  sanitize: jest.fn((html) => html),
}));

describe('useAdmonitionShowdownExtension', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a showdown extension with correct properties', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const extension = result.current;

    expect(extension.type).toBe('lang');
    expect(extension.regex).toEqual(/\[(.+)]{{(admonition) ([\w-]+)}}/g);
    expect(typeof extension.replace).toBe('function');
  });

  it('should match different admonition types', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const { regex } = result.current;

    const admonitionTypes = ['note', 'tip', 'important', 'warning', 'caution', 'custom-type'];

    admonitionTypes.forEach((type) => {
      const testText = `[Content for ${type}]{{admonition ${type}}}`;
      // Reset regex state for global flag
      regex.lastIndex = 0;
      const matches = regex.exec(testText);

      expect(matches).not.toBeNull();
      if (matches) {
        expect(matches[1]).toBe(`Content for ${type}`);
        expect(matches[2]).toBe('admonition');
        expect(matches[3]).toBe(type);
      }
    });
  });

  it('should not match malformed admonition syntax', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const { regex } = result.current;

    const malformedCases = [
      'Content]{{admonition note}}',
      '[Content{{admonition note}}',
      '[Content]{{admonition}}',
      '[Content]{{notadmonition note}}',
    ];

    malformedCases.forEach((testCase) => {
      expect(testCase.match(regex)).toBeNull();
    });
  });

  it('should generate correct alert HTML structure', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const { replace } = result.current;

    const html = replace('[Test message]{{admonition note}}', 'Test message', 'admonition', 'note');

    expect(html).toContain('pf-v6-c-alert');
    expect(html).toContain('pf-m-info'); // note maps to info variant
    expect(html).toContain('pf-m-inline');
    expect(html).toContain('pfext-markdown-admonition');
    expect(html).toContain('NOTE'); // uppercase title
  });

  it('should handle different admonition types with correct variants', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const { replace } = result.current;

    const testCases = [
      { type: 'note', expectedClass: 'pf-m-info' },
      { type: 'warning', expectedClass: 'pf-m-warning' },
      { type: 'important', expectedClass: 'pf-m-danger' },
    ];

    testCases.forEach(({ type, expectedClass }) => {
      const html = replace(`[Content]{{admonition ${type}}}`, 'Content', 'admonition', type);

      expect(html).toContain(expectedClass);
      expect(html).toContain(type.toUpperCase());
    });
  });

  it('should process content through marked', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const { replace } = result.current;

    replace('[**Bold text**]{{admonition note}}', '**Bold text**', 'admonition', 'note');

    expect(marked.parseInline).toHaveBeenCalledWith('**Bold text**');
  });

  it('should return original text for invalid cases', () => {
    const { result } = renderHook(() => useAdmonitionShowdownExtension());
    const { replace } = result.current;

    // Missing content
    const originalText = '[Content]{{admonition note}}';
    const result1 = replace(originalText, '', 'admonition', 'note');
    expect(result1).toBe(originalText);

    // Wrong command
    const result2 = replace(originalText, 'Content', 'not-admonition', 'note');
    expect(result2).toBe(originalText);
  });
});

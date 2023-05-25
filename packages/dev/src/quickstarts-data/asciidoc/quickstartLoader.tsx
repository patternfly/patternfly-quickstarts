import { ProcQuickStartParser } from './procedure-parser';

const loadJSONQuickStartsFilesFromAssets = async (basePath: string): Promise<string[]> => {
  const data = await fetch(`${basePath}/webpack-assets.json`).then((response) => response.json());
  const files = Array.isArray(data[''].json) ? data[''].json : [data[''].json];
  return files
    .filter((url: string) => url.endsWith('.quickstart.json'))
    .map((f: string) => (!f.startsWith('http') ? `${basePath}/${f}` : f));
};

export const loadJSONQuickStarts = async (basePath: string) => {
  const files = await loadJSONQuickStartsFilesFromAssets(basePath);
  const result = [] as any[];

  for (const file of files) {
    await fetch(file).then((response) => response.json().then((data) => result.push(data)));
  }

  return result.map((content) => ProcQuickStartParser(content));
};

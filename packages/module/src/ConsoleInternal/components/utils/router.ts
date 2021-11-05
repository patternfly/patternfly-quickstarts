import { History, createBrowserHistory, createMemoryHistory } from 'history';

type AppHistory = History & { pushPath: History['push'] };

let createHistory;

try {
  if (process.env.NODE_ENV === 'test') {
    // Running in node. Can't use browser history
    createHistory = createMemoryHistory;
  } else {
    createHistory = createBrowserHistory;
  }
} catch (unused) {
  createHistory = createBrowserHistory;
}

export const history: AppHistory = createHistory();

export const removeQueryArgument = (k: string) => {
  const params = new URLSearchParams(window.location.search);
  if (params.has(k)) {
    params.delete(k);
    const url = new URL(window.location.href);
    history.replace(`${url.pathname}?${params.toString()}${url.hash}`);
  }
};

export const setQueryArgument = (k: string, v: string) => {
  if (!v) {
    return removeQueryArgument(k);
  }
  const params = new URLSearchParams(window.location.search);
  if (params.get(k) !== v) {
    params.set(k, v);
    const url = new URL(window.location.href);
    history.replace(`${url.pathname}?${params.toString()}${url.hash}`);
  }
};

export const updateQueryArguments = (newParams: Record<string, string | string[]>) => {
  const params = new URLSearchParams(window.location.search);
  let update = false;
  Object.keys(newParams).forEach((name) => {
    const value = newParams[name];
    const valueString = Array.isArray(value) ? (value.length === 0 ? '' : value.join(',')) : value;
    if (!valueString && params.has(name)) {
      params.delete(name);
      update = true;
    } else if (valueString && valueString !== params.get('name')) {
      params.set(name, valueString);
      update = true;
    }
  });
  if (update) {
    const url = new URL(window.location.href);
    history.replace(`${url.pathname}?${params.toString()}${url.hash}`);
  }
};

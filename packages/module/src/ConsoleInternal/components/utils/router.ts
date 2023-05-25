import { History, createBrowserHistory, createMemoryHistory } from 'history';
import { QUICKSTART_SEARCH_FILTER_KEY, QUICKSTART_STATUS_FILTER_KEY } from '../../../utils/const';

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

export const clearFilterParams = () => {
  removeQueryArgument(QUICKSTART_SEARCH_FILTER_KEY);
  removeQueryArgument(QUICKSTART_STATUS_FILTER_KEY);
};

import { run } from '@cycle/run';
import { makeDOMDriver } from '@cycle/dom';
import { makeHistoryDriver } from '@cycle/history';
import App from './app';

const drivers = {
  DOM: makeDOMDriver('#app'),
  history: makeHistoryDriver(),
  debug: x$ => x$.subscribe({ next: console.error })
};

const main = App;

run(main, drivers);

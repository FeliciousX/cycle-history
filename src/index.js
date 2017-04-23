import xs from 'xstream';
import { run } from '@cycle/run';
import { makeHistoryDriver } from '@cycle/history';

const drivers = {
  history: makeHistoryDriver(),
  debug: x$ => x$.subscribe({ next: console.error })
};

function main(sources) {
  const history$ = xs.periodic(1000).take(5).map(i => `some_url_${i}`);

  const sinks = {
    history: history$,
    debug: sources.history
  };
  return sinks;
}

run(main, drivers);

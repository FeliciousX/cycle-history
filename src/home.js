import xs from 'xstream';
import { h } from '@cycle/dom';
export default function Home(sources) {
  const vtree$ = xs.of(h('h1', {}, 'Hello I am Home'));
  return {
    DOM: vtree$
  };
}

import xs from 'xstream';
import { h } from '@cycle/dom';
export default function About(sources) {
  const vtree$ = xs.of(h('h1', {}, 'This is the About page'));
  return {
    DOM: vtree$
  };
}

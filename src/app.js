import xs from 'xstream';
import { h } from '@cycle/dom';

import Home from './home';
import About from './about';

export default function App(sources) {
  const history$ = xs.periodic(1000).take(5).map(i => `some_url_${i}`);

  const vtree$ = xs.of(h('div#app', {}, [navbar()]));
  const sinks = {
    DOM: vtree$,
    history: history$,
    debug: sources.history
  };
  return sinks;
}

function navbar() {
  return h('div.pure-menu.pure-menu-horizontal', {}, [
    h('ul.pure-menu-list', {}, [
      h('li.pure-menu-item', {}, [
        h('a.pure-menu-link', { props: { href: '/' } }, 'Home')
      ]),
      h('li.pure-menu-item', {}, [
        h('a.pure-menu-link', { props: { href: '/about' } }, 'About')
      ])
    ])
  ]);
}

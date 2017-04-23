import xs from 'xstream';
import { h } from '@cycle/dom';

import Home from './home';
import About from './about';

const routes = {
  '/': Home,
  '/about': About
};

export default function App(sources) {
  const clickHref$ = sources.DOM.select('a').events('click');
  const history$ = clickHref$.map(ev => ev.target.pathname);

  const vtree$ = sources.history
    .map(location => location.pathname)
    .map(pathname => routes[pathname])
    .map(Component => Component(sources))
    .map(sinks => sinks.DOM)
    .flatten()
    .map(childVnode => h('div#app', {}, [navbar(), childVnode]));

  const sinks = {
    DOM: vtree$,
    history: history$,
    preventDefault: clickHref$,
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

This repo contains usage examples for [`@cycle/history`](https://cycle.js.org/api/history.html) driver

`@cycle/history` is a wrapper around [history.js](https://github.com/reacttraining/history).

What can `@cycle/history` do?

Gives you history source which is a stream of [Location object](https://github.com/reacttraining/history#usage)

It looks like...

```javascript
{
  pathname: '/',
  search: '',
  hash: '',
  state: undefined,
  key: 'ab41sc'
}
```

It accepts a stream of strings ( url ) or a stream of Objects that looks like...

```javascript
{
  type: 'push',
  pathname: '/home',
  state: { foo: 'bar' }
}
```

### How do I use it?

```javascript
import xs from 'xstream';
import { run } from '@cycle/run';
import { makeHistoryDriver } from '@cycle/history';

const drivers = {
  history: makeHistoryDriver(),
  debug: x$ => x$.subscribe({ next: console.log })
};

function main(sources) {
  const history$ = xs.periodic(5000).take(5).map(i => `some_url_${i}`);

  const sinks = {
    history: history$,
    debug: sources.history
  };
  return sinks;
}

run(main, drivers);
```

This is enough to see the URL changes on the browser.


### What action type does it support?

It [supports](https://github.com/cyclejs/cyclejs/blob/cda6a8e525b8062c6765027db4683afb21242e8a/history/src/createHistory%24.ts#L17-L35) 5 different types of actions.

push...

```javascript
{
  type: 'push',
  pathname: 'path',
  state: 'anything'
}
```

replace...

```javascript
{
  type: 'replace',
  pathname: 'path',
  state: 'anything'
}
```

go...

```javascript
{
  type: 'go',
  amount: 1
}
```

goBack...

```javascript
{
  type: 'goBack'
}
```

goForward...

```javascript
{
  type: 'goForward'
}
```

### Example of routing an app?

```javascript
//
```

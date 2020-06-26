import barba from '@barba/core';
import css from '@barba/css';

// tell Barba to use the css plugin
barba.use(css);
// init Barba

barba.init({
  transitions: [{
    transitions: [{
    name: 'slide-up-',
    leave() {},
    enter() {},
    from: {
      namespace: 'tanya'
    },
    to: {
      namespace: 'john'
    }
  }, {
    name: 'slide-down-',
    leave() {},
    enter() {},
    from: {
      namespace: 'john'
    },
    to: {
      namespace: 'tanya'
    }
  }, {
    name: 'slide-left-',
    leave() {},
    enter() {},
    from: {
      custom: ({ trigger }) => {
        return trigger.classList && trigger.classList.contains('direction--prev');
      }
    },
    to: {
      namespace: 'product'
    }
  }, {
    name: 'slide-right-',
    leave() {},
    enter() {},
    from: {
      custom: ({ trigger }) => {
        return trigger.classList && trigger.classList.contains('direction--next');
      }
    },
    to: {
      namespace: ''
    }
  }]
});

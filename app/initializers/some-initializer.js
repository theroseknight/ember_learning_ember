console.log("ember - app/initializers/some-initializer.js")
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'some-initializer',
  initialize: initialize
};

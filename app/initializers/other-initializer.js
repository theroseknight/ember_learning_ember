console.log("ember - app/initializers/other-initializer.js")
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'other-initializer',
  initialize: initialize
};

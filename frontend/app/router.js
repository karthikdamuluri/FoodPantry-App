import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('volunteers', function() {
    this.route('new');

    this.route('edit', {
      path: ':volunteer_id/edit'
    });

    this.route('show', {
      path: ':volunteer_id'
    });
  });
});

export default Router;

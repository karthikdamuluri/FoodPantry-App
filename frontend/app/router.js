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

  this.route('inventories', function() {
    this.route('new');

    this.route('edit', {
      path: ':inventory_id/edit'
    });

    this.route('show', {
      path: ':inventory_id'
    });
  });

  this.route('donors', function() {
    this.route('new');

    this.route('edit', {
      path: ':donor_id/edit'
    });

    this.route('show', {
      path: ':donor_id'
    });
  });

  this.route('donations', function() {
    this.route('new');

    this.route('edit', {
      path: ':donation_id/edit'
    });

    this.route('show', {
      path: ':donation_id'
    });
  });
});

export default Router;

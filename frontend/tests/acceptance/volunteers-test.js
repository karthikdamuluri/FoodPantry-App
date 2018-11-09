
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '@ember/runloop';
var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Volunteer', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /volunteers without data', function(assert) {
  visit('/volunteers');

  andThen(function() {
    assert.equal(currentPath(), 'volunteers.index');
    assert.equal(find('#blankslate').text().trim(), 'No Volunteers found');
  });
});

test('visiting /volunteers with data', function(assert) {
  server.create('volunteer');
  visit('/volunteers');

  andThen(function() {
    assert.equal(currentPath(), 'volunteers.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new volunteer', function(assert) {
  visit('/volunteers');
  click('a:contains(New Volunteer)');

  andThen(function() {
    assert.equal(currentPath(), 'volunteers.new');

    fillIn('label:contains(Vol number) input', 'MyString');
    fillIn('label:contains(Lname) input', 'MyString');
    fillIn('label:contains(Fname) input', 'MyString');
    fillIn('label:contains(Vol dob) input', new Date());
    fillIn('label:contains(Address) input', 'MyString');
    fillIn('label:contains(City) input', 'MyString');
    fillIn('label:contains(State) input', 'MyString');
    fillIn('label:contains(Zipcode) input', 'MyString');
    fillIn('label:contains(Email) input', 'MyString');
    fillIn('label:contains(Cell phone) input', 'MyString');
    fillIn('label:contains(Vol notes) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing volunteer', function(assert) {
  server.create('volunteer');
  visit('/volunteers');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'volunteers.edit');

    fillIn('label:contains(Vol number) input', 'MyString');
    fillIn('label:contains(Lname) input', 'MyString');
    fillIn('label:contains(Fname) input', 'MyString');
    fillIn('label:contains(Vol dob) input', new Date());
    fillIn('label:contains(Address) input', 'MyString');
    fillIn('label:contains(City) input', 'MyString');
    fillIn('label:contains(State) input', 'MyString');
    fillIn('label:contains(Zipcode) input', 'MyString');
    fillIn('label:contains(Email) input', 'MyString');
    fillIn('label:contains(Cell phone) input', 'MyString');
    fillIn('label:contains(Vol notes) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing volunteer', function(assert) {
  server.create('volunteer');
  visit('/volunteers');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'volunteers.show');

    assert.equal(find('p strong:contains(Vol number:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Lname:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Fname:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Vol dob:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Address:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(City:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(State:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Zipcode:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Email:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Cell phone:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Vol notes:)').next().text(), 'MyString');
  });
});

test('delete a volunteer', function(assert) {
  server.create('volunteer');
  visit('/volunteers');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'volunteers.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});

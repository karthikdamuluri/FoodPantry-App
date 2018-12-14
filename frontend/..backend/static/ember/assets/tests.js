'use strict';

define('frontend/tests/acceptance/volunteers-test', ['qunit', 'frontend/tests/helpers/start-app'], function (_qunit, _startApp) {
  'use strict';

  var application;
  var originalConfirm;
  var confirmCalledWith;

  (0, _qunit.module)('Acceptance: Volunteer', {
    beforeEach: function beforeEach() {
      application = (0, _startApp.default)();
      originalConfirm = window.confirm;
      window.confirm = function () {
        confirmCalledWith = [].slice.call(arguments);
        return true;
      };
    },
    afterEach: function afterEach() {
      Ember.run(application, 'destroy');
      window.confirm = originalConfirm;
      confirmCalledWith = null;
    }
  });

  (0, _qunit.test)('visiting /volunteers without data', function (assert) {
    visit('/volunteers');

    andThen(function () {
      assert.equal(currentPath(), 'volunteers.index');
      assert.equal(find('#blankslate').text().trim(), 'No Volunteers found');
    });
  });

  (0, _qunit.test)('visiting /volunteers with data', function (assert) {
    server.create('volunteer');
    visit('/volunteers');

    andThen(function () {
      assert.equal(currentPath(), 'volunteers.index');
      assert.equal(find('#blankslate').length, 0);
      assert.equal(find('table tbody tr').length, 1);
    });
  });

  (0, _qunit.test)('create a new volunteer', function (assert) {
    visit('/volunteers');
    click('a:contains(New Volunteer)');

    andThen(function () {
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

    andThen(function () {
      assert.equal(find('#blankslate').length, 0);
      assert.equal(find('table tbody tr').length, 1);
    });
  });

  (0, _qunit.test)('update an existing volunteer', function (assert) {
    server.create('volunteer');
    visit('/volunteers');
    click('a:contains(Edit)');

    andThen(function () {
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

    andThen(function () {
      assert.equal(find('#blankslate').length, 0);
      assert.equal(find('table tbody tr').length, 1);
    });
  });

  (0, _qunit.test)('show an existing volunteer', function (assert) {
    server.create('volunteer');
    visit('/volunteers');
    click('a:contains(Show)');

    andThen(function () {
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

  (0, _qunit.test)('delete a volunteer', function (assert) {
    server.create('volunteer');
    visit('/volunteers');
    click('a:contains(Remove)');

    andThen(function () {
      assert.equal(currentPath(), 'volunteers.index');
      assert.deepEqual(confirmCalledWith, ['Are you sure?']);
      assert.equal(find('#blankslate').length, 1);
    });
  });
});
define('frontend/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/auth-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/auth-manager.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/constants.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/donations/save-model-mixin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/donations/save-model-mixin.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('mixins/donors/save-model-mixin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/donors/save-model-mixin.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('mixins/donors1/save-model-mixin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/donors1/save-model-mixin.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('mixins/inventories/save-model-mixin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/inventories/save-model-mixin.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('mixins/inventories1/save-model-mixin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/inventories1/save-model-mixin.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('mixins/volunteers/save-model-mixin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mixins/volunteers/save-model-mixin.js should pass ESLint\n\n11:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/donation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/donation.js should pass ESLint\n\n');
  });

  QUnit.test('models/donor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/donor.js should pass ESLint\n\n');
  });

  QUnit.test('models/inventory.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/inventory.js should pass ESLint\n\n');
  });

  QUnit.test('models/volunteer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/volunteer.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donations/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donations/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donations/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donations/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donations/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donations/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors/trackdonations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors/trackdonations.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors1/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors1/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors1/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors1/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/donors1/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/donors1/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home1.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories/itemstotal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories/itemstotal.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories1/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories1/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories1/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories1/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/inventories1/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inventories1/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/volunteers/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/volunteers/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/volunteers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/volunteers/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/volunteers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/volunteers/new.js should pass ESLint\n\n');
  });

  QUnit.test('services/auth-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth-manager.js should pass ESLint\n\n61:9 - Unexpected console statement. (no-console)\n73:3 - Unexpected console statement. (no-console)\n77:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/constants.js should pass ESLint\n\n');
  });
});
define('frontend/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('frontend/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'frontend/tests/helpers/start-app', 'frontend/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('frontend/tests/helpers/start-app', ['exports', 'frontend/app', 'frontend/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('frontend/tests/test-helper', ['frontend/app', 'frontend/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('frontend/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/volunteers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/volunteers-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/itemstotal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/itemstotal-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/trackdonations-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trackdonations-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/auth-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-manager-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/constants-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/constants-test.js should pass ESLint\n\n');
  });
});
define('frontend/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('frontend/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('frontend/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('frontend/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/routes/home1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home1', 'Unit | Route | home1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/routes/itemstotal-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:itemstotal', 'Unit | Route | itemstotal', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/routes/trackdonations-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:trackdonations', 'Unit | Route | trackdonations', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('frontend/tests/unit/services/auth-manager-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:auth-manager', 'Unit | Service | auth manager', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('frontend/tests/unit/services/constants-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:constants', 'Unit | Service | constants', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

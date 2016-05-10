import { expect } from 'chai';
import td from 'testdouble';

import { createWidget } from '../../../src/imports/api/widgets/methods.js';
import widgets from '../../../src/imports/api/widgets/collection.js';

describe('api.widgets.methods', function () {
  describe('createWidget', function () {
    afterEach(function () {
      td.reset();
    });

    it(
      'should be registered',
      function () {
        expect(createWidget).to.be.defined;
        const ValidatedMethod = Package['mdg:validated-method'].ValidatedMethod;
        expect(createWidget instanceof ValidatedMethod).to.be.true;
      }
    );

    it('should insert into widget collection', sinon.test(function () {
      const widget = { name: 'Test Widget'};
      td.replace(widgets, 'insert');
      createWidget.call(widget);
      td.verify(widgets.insert(widget));
    }));
  });
});

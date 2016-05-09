import { expect } from 'chai';
import td from 'testdouble';

describe('api.widgets.methods', function () {
  describe('createWidget', function () {
    let widgets = td.object(['insert']);
    let ValidatedMethod = td.function();
    let createWidget;

    beforeEach(function () {
      td.replace('meteor/mdg:validated-method', { ValidatedMethod });
      td.replace('../../../imports/api/widgets/collection.js', widgets);
      createWidget =
        require('../../../imports/api/widgets/methods.js').createWidget;
    });

    afterEach(function () {
      td.reset();
    });

    it('should insert into widget collection', function () {
      const widget = { name: 'Test Widget'};
      createWidget.spec.run(widget);
      td.verify(widgets.insert(widget));
    });
  });
});

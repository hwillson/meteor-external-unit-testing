// import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleMethod from '../../utilities/simple_method.js';
import widgets from './collection.js';

export const createWidget = new SimpleMethod({
  name: 'widgets.createWidget',
  validate: null,
  run(doc) {
    widgets.insert(doc);
  },
});

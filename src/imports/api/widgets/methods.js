// import { ValidatedMethod } from 'meteor/mdg:validated-method';
const ValidatedMethod = Package['mdg:validated-method'].ValidatedMethod;

import widgets from './collection.js';

export const createWidget = new ValidatedMethod({
  name: 'widgets.createWidget',
  validate: null,
  run(doc) {
    widgets.insert(doc);
  },
});

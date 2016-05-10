// import { Mongo } from 'meteor/mongo';
const Mongo = Package['mongo'].Mongo;

const widgets = new Mongo.Collection('widgets');

export default widgets;

import { Factory } from 'ember-cli-mirage';

export default Factory.extend(
  {item: 'MyString', donor: 'MyString', quantity: 'MyString', receiveddate: new Date() }
);

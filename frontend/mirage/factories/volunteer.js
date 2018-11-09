import { Factory } from 'ember-cli-mirage';

export default Factory.extend(
  {volNumber: 'MyString', lname: 'MyString', fname: 'MyString', volDob: new Date(), address: 'MyString', city: 'MyString', state: 'MyString', zipcode: 'MyString', email: 'MyString', cellPhone: 'MyString', volNotes: 'MyString' }
);

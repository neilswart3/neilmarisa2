export const regex = {
  special: /[ `!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(^0[78][2347][0-9]{7})/,
};

export const errors = {
  firstName: 'Please enter a valid First Name',
  lastName: 'Please enter a valid Last Name',
  email: 'Please enter a valid Email address',
  phone: 'Please enter a valid Phone number',
  relation: 'Please select a valid relationship value',
  attend: 'Please select a valid attendance value',
};

export const names = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email address',
  phone: 'Phone number',
  relation: 'Relationship',
  attend: 'Attending',
};

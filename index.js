
var firebase_email = 'snappy@firstbuild.com'
var firebase_password = 'snappy'
var firebase_sandbox = 'https://mobius-firstbuild.firebaseio.com'

var Firebase = require('firebase');
var ref = new Firebase(firebase_sandbox);
var credentials = { email: firebase_email, password: firebase_password };

ref.authWithPassword(credentials, function(err, auth) {

  if (err) {
    console.error('Failed to login with credentials:', err);
  }
  else if (auth) {
    ref.child('users').child('google:105724342149087020351/devices/chillhubs/dummy/sensors').on('value', function(snapshot) {
      console.log(JSON.stringify(snapshot.val(), null, 2));
    });
    ref.child('users').child('google:105724342149087020351/devices/chillhubs/dummy2/sensors').on('value', function(snapshot) {
      console.log(JSON.stringify(snapshot.val(), null, 2));
    });
  }
  else {
    console.error('Failed to login with credentials!');
    console.error('Make sure you entered your email and password correctly.');
  }
});


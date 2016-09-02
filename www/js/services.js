angular.module('app.services', [])
.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://ionic-store-2c979.firebaseio.com/products");
  return $firebaseArray(itemsRef);
})

.service('BlankService', [function(){

}]);


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCepLx7DcY5D3LVdm1vsZDeSE9HJ7ajXl0",
    authDomain: "ionic-store-2c979.firebaseapp.com",
    databaseURL: "https://ionic-store-2c979.firebaseio.com",
    storageBucket: "ionic-store-2c979.appspot.com",
  };
  firebase.initializeApp(config);

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
  

	
	var onSuccess = function onSuccess(imageData) {
	    var image = document.getElementById('myImage');	    
	    image.src = "data:image/jpeg;base64," + imageData;
	}
	
	var onFail = function onFail(message) {
	    alert('Failed because: ' + message);
	}  
	
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL
	});	
})

.controller('AccountCtrl', function($scope) {
});

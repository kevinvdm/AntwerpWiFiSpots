var app= angular.module("projectwebframeworks",[]);
angular.module("projectwebframeworks").controller("myController", function ($scope, $http)
{
    console.log("Controller loaded!");
    $scope.spotmarker={lat: 0, lng: 0};
    
    $http({
    method: 'GET',
    url: 'http://localhost:5000/wifispots'
    }).then(function successCallback(response) {
        console.log("JSON loaded!");
        //console.log(angular.toJson(response,true));
        var json = response;
        console.log(json);
        $scope.wifispots = json;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.g
    });
    $scope.AddToMap = function(lat, lng){
        var floatLat = parseFloat(lat);
        var floatLng = parseFloat(lng);
        $scope.spotmarker = {lat: floatLat, lng: floatLng};
        console.log(floatLat, floatLng);
        initialize();
    }
    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(51.2214428,4.3996739),
            zoom: 10,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
                position: $scope.spotmarker,
                map: map,
                title: 'Hello World!'
            });
    }
        google.maps.event.addDomListener(window, 'load', initialize);

});
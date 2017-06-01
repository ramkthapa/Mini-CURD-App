///<reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js" />

var myApp = angular.module("myModule", []);           
myApp.controller("myController", function($scope, $http)
{
	$scope.newUser = {};
	$scope.selectUser = {};

	$scope.users = [       // Default users Displayed in interface
		{username: "ram", fullName: "Ram Kumar", email:"ramkthapa@gmail.com"},
		{username: "will", fullName: "Williams", email:"will@gmail.com"},
		{username: "jenny", fullName: "Jennyfer", email:"jenny@gmail.com"}

	];

	$scope.saveUser = function()  // function for save user
    {
		console.log($scope.newUser);
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};

	$scope.selectUser = function(user)   // get informaton from the selected user
    {
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.deleteUser = function()  // To delete the user
    {
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);

	};
	$scope.localize = function(localizeLang)
    {

        $scope.loadLocalize(localizeLang);
	};

	$scope.loadLocalize = function(localizeLang)
    {

        $http.get('scripts/localization.json')  // call the json file
        .then(function(res)
        {
            $scope.dataLang = res.data;  
            console.log($scope.dataLang);

            if(localizeLang == "EN")  // for the language english and deutsch
            lang = 'config_en';
            else
            lang = 'config_de';

            console.log(lang);

            $scope.addEmployeeDetails = $scope.dataLang[lang]['addEmployeeDetails'];
            $scope.userDetails = $scope.dataLang[lang]['userDetails'];
            $scope.addUser = $scope.dataLang[lang]['addUser'];
            $scope.delete = $scope.dataLang[lang]['delete'];
            $scope.edit = $scope.dataLang[lang]['edit'];
            $scope.userName = $scope.dataLang[lang]['userName'];
            $scope.serialNo = $scope.dataLang[lang]['serialNo'];
            $scope.save = $scope.dataLang[lang]['save'];
            $scope.close = $scope.dataLang[lang]['close'];
            $scope.newUserReg = $scope.dataLang[lang]['newUserReg'];
            $scope.inputFullName = $scope.dataLang[lang]['inputFullName'];
            $scope.editThisUser = $scope.dataLang[lang]['editThisUser'];
            $scope.yes = $scope.dataLang[lang]['yes'];
            $scope.no = $scope.dataLang[lang]['no'];
            $scope.deleteUserInformation = $scope.dataLang[lang]['deleteUserInformation'];

            console.log($scope.serialNo);
        }); 
	}
       
    $scope.loadLocalize('EN');
                    
});

             
var miApp = angular.module('miApp', []);

miApp.factory('Dato', function() {
	return {mensaje: 'Saludos desde la Fabrica!'};
})

function ControladorUno($scope, Dato) {
	$scope.dato = Dato;
};


function ControladorDos($scope,Dato){

	$scope.dato = Dato;
};


/*function ControladorUno($scope){

	$scope.dato = {mensaje:'Saludos desde el ControladorUno'};

};


function ControladorDos($scope){

	$scope.dato = {mensaje:'Saludos desde el ControladorDos'};

};*/

var miApp = angular.module('miApp',[]);

miApp.factory ('Fabrica', function() {
	var servicio = {
		objeto: {mensaje: 'Saludos desde la Fabrica'},
		msjInicial: function() {
			servicio.objeto['mensaje'] = 'Saludos desde la Fabrica!';
		},
		msjNuevo: function(msj){
			servicio.objeto.mensaje = msj;
		}
	};
	return servicio;
});


function ControladorUno ($scope, Fabrica){

    $scope.nuevo = function(){
    	Fabrica.msjNuevo($scope.nuevoMensaje);
    };
    $scope.dato = Fabrica.objeto;
};

function ControladorDos ($scope, Fabrica){

    $scope.nuevo = function(){
    	Fabrica.msjNuevo($scope.nuevoMensaje);
    };
    $scope.dato = Fabrica.objeto;
};


function ControladorTres($scope, Fabrica) {
	$scope.resetear = function() {
		Fabrica.msjInicial();
	};

};
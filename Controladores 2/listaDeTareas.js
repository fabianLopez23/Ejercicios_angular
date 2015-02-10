function ControladorTareas($scope){
	
	$scope.tareas = [{texto: 'Crear login con angularJS', hecho: true}, 
					 {texto: 'Crear una app recargas con angularJS', hecho: true}];

	$scope.agregarTarea = function(){
		$scope.tareas.push({texto: $scope.textoNuevaTarea,hecho: true});
		$scope.textoNuevaTarea = '';

	};

	$scope.restantes = function(){
		var cuenta = 0;
		angular.forEach($scope.tareas, function(tarea){
			cuenta += tarea.hecho ? 0 : 1;
		});
		return cuenta;
	};

	$scope.eliminar = function(){
		var tareasViejas = $scope.tareas;
		$scope.tareas=[];
		angular.forEach(tareasViejas, function(tarea){
			if (!tarea.hecho) $scope.tareas.push(tarea);
		});
	};
}
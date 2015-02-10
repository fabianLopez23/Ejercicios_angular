function ControladorFiltros($scope) {
	$scope.empleados = 
	[
		{
			nombre: 'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),
			salario: 12000, telefono: '8484521', bono: 1.50000
		},
		{
			nombre: 'Ximena', paterno: 'Suarez', materno: 'Perez', primerDia: new Date(),
			salario: 13000, telefono: '8487521', bono: 1.60000
		},
		{
			nombre: 'Fernando', paterno: 'Gomez', materno: 'Carrillo', primerDia: new Date(),
			salario: 14000, telefono: '8483521', bono: 1.70000
		},
		{
			nombre: 'Fredy', paterno: 'Triana', materno: 'Alan', primerDia: new Date(),
			salario: 15000, telefono: '8484221', bono: 1.80000
		},
	];

	$scope.ordenarPor = function(orden){
		$scope.ordenSeleccionado = orden;


	};

};
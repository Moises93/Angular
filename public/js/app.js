(function(){
	var app = angular.module('equipos',[]);

	app.controller('EquipoController', function(){
		this.equipo={
			id:'001',
			name:'Brasil',
			continente:'Sudamerica',
			fundacion:'1914',
			tecnico:'Tite (2016)',
			ranking:['Octubre 2017','2do-']
		};

	});

})();
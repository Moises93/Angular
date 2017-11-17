(function(){
	var app = angular.module('equipos',[]);

	app.controller('EquipoController', function(){
		 this.tab = 1;
		this.equipo={
			id:'001',
			name:'Brasil',
			continente:'Sudamerica',
			fundacion:'1914',
			tecnico:'Tite (2016)',
			ranking:['Octubre 2017','2do-'],
			stats: {
		        attack: 99,
		        defense: 90,
		    },
		    copas: [ "alemania 2006", "Brasil 1985-", "Usa 1993-" ]
		};


	});

	app.controller('TabsController', function () {
    this.tab = 1;

    this.selectTab = function (tab) {
      this.tab = tab;
    };

  });

app.controller('CommentsController', function () {
    this.comments = [];
    this.comment = {};
    this.show = false;

    this.toggle = function () {
      this.show = !this.show;
    };

    this.anonymousChanged = function () {
      if (this.comment.anonymous) {
        this.comment.email = "";
      }
    };

    this.addComment = function () {
      this.comment.date = Date.now();
      this.comments.push(this.comment);
      this.comment = {};
    };

  });

})();
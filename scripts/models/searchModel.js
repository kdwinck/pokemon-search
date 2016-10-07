(function(module) {

  var searchModel = {};

  searchModel.getDataById = function() {
    $.get('http://pokeapi.co/api/v2/pokemon/1/')
    .done(function(data) {
      console.log(data.name);
    });
  };

  module.searchModel = searchModel;

})(window);

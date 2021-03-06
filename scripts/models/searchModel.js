(function(module) {

  var searchModel = {};

  function pokemon(id, height, weight, name, sprite) {
    this.id = id;
    this.height = height;
    this.weight = weight;
    this.name = name;
    this.sprite = sprite;
  }

  searchModel.getUserInput = function(callback) {
    $('#submit').on('click', function(event) {
      event.preventDefault();
      var userInput = $('#id').val();
      callback(userInput);
    });
  },

  searchModel.getDataById = function(userInput) {
    $.get('http://pokeapi.co/api/v2/pokemon/' + userInput + '/')
    .done(function(data) {
      var results = new pokemon(data.id, data.height, data.weight, data.name, data.sprites.front_default);
      searchView.compileTemplate(results);
    });
  };

  module.searchModel = searchModel;

})(window);

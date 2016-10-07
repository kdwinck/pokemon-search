(function(module) {

  var searchModel = {};

  searchModel.getUserInput = function(callback) {
    $('#submit').on('click', function(event) {
      event.preventDefault();
      var userInput = $('#id').val();
      console.log(userInput);
      callback(userInput);
    });
  },

  searchModel.getDataById = function(userInput) {
    $.get('http://pokeapi.co/api/v2/pokemon/' + userInput + '/')
    .done(function(data) {
      console.log(data.name);
    });
  };

  module.searchModel = searchModel;

})(window);

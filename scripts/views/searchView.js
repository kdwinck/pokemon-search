(function(module) {

  var searchView = {};

  searchView.compileTemplate = function(context) {
    $('#results').empty();
    var source = $('#pokemon-template').html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $('#results').append(html);
  };

  module.searchView = searchView;

})(window);

$(document).ready(function() {

  $.ajax({
    type: 'GET',
    url: '/countries',
    dataType: 'json'
  }).done(function(response){
    // console.log(response);
    $.each(response, function(index, value) {
      $('<option value="' + value.name + '">' + value.name + '</option>').appendTo('#country-select')
    })
  });

  var dropDown = $('#country-select');

  dropDown.on('change', function(){
    // console.log($(this).val());
    chosenCountry = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/countries',
      dataType: 'json'
    }).done(function(response){
      $('.other-country #other-header').html('');
      $('.other-country .other-all-stats').html('');
      $.each(response, function(index, country){
        // console.log(country.meal);
        if (country.name === chosenCountry) {
          $('<h2>' + country.name + '</h2>').prependTo('#other-header')
          $('<div class="stat">' + '<h4>Meal</h4>' + '<p>' + country.meal + '</div>' + '<div class="stat">' + '<h4>McDonalds</h4>' + '<p>' + country.mcdonalds + '</div>' + '<h4>Beer</h4>' + '<p>' + country.beer + '</div>' + '<h4>Coca-Cola</h4>' + '<p>' + country.coke + '</div>' + '<h4>Cigarettes</h4>' + '<p>' + country.cigs + '</div>' + '<h4>1 Bed Apartment</h4>' + '<p>' + country.rent + '</div>' + '<h4>Cinema</h4>' + '<p>' + country.cinema + '</div>' + '<h4>Jeans</h4>' + '<p>' + country.jeans + '</div>' + '<h4>Shoes</h4>' + '<p>' + country.shoes + '</div>' + '<h4>Taxi (1km)</h4>' + '<p>' + country.taxi + '</div>' + '<h4>Coffee</h4>' + '<p>' + country.coffee + '</div>').appendTo('.other-all-stats')
          // console.log('match!');  
        }
      })
    })
  });


});
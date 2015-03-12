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
          $('<div class="stat">' + '<h4>Meal</h4>' + '<img src="assets/plate7.png" class="icon" id="other-meal">' + '<p id="other-meal-amount">' + country.meal + '</p>' + '</div>' +
            '<div class="stat">' + '<h4>McDonalds</h4>' + '<p>' + country.mcdonalds + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Beer</h4>' + '<p>' + country.beer + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Coca-Cola</h4>' + '<p>' + country.coke + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Cigarettes</h4>' + '<p>' + country.cigs + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>1 Bed Apartment</h4>' + '<p>' + country.rent + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Cinema</h4>' + '<p>' + country.cinema + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Jeans</h4>' + '<p>' + country.jeans + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Shoes</h4>' + '<p>' + country.shoes + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Taxi (1km)</h4>' + '<p>' + country.taxi + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Coffee</h4>' + '<p>' + country.coffee + '</p>' + '</div>').appendTo('.other-all-stats')
          ukMeal = parseFloat($('#uk-meal-amount').text());
          otherMeal = parseFloat($('#other-meal-amount').text());
          difference = otherMeal / ukMeal;
          newSize = 250 * difference;
          $('#other-meal').css({'width' : newSize, 'height' : newSize});
          // console.log('match!');
        }
      })
    })
  });


});
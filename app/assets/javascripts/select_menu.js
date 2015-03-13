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
            '<div class="stat">' + '<h4>McDonalds</h4>' + '<img src="assets/fast-food.png" class="icon" id="other-mcdonalds">' + '<p id="other-mcdonalds-amount">' + country.mcdonalds + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Beer — £<span id="other-beer-amount">' + country.beer + '</span></h4>' + '<img src="assets/beer34.png" class="icon" id="other-beer">' + '</div>' + 
            '<div class="stat">' + '<h4>Coca-Cola</h4>' + '<img src="assets/coke.png" class="icon" id="other-coke">' + '<p id="other-coke-amount">' + country.coke + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Cigarettes</h4>' + '<img src="assets/cigarette8.png" class="icon" id="other-cigs">' + '<p id="other-cigs-amount">' + country.cigs + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>1 Bed Apartment</h4>' + '<img src="assets/house121.png" class="icon" id="other-rent">' + '<p id= "other-rent-amount">' + country.rent + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Cinema</h4>' + '<img src="assets/clapperboard2.png" class="icon" id="other-cinema">' + '<p id="other-cinema-amount">' + country.cinema + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Jeans</h4>' + '<img src="assets/jeans.png" class="icon" id="other-jeans">' + '<p id="other-jeans-amount">' + country.jeans + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Shoes</h4>' + '<img src="assets/trail.png" class="icon" id="other-shoes">' + '<p id="other-shoes-amount">' + country.shoes + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Taxi (1km)</h4>' + '<img src="assets/taxi14.png" class="icon" id="other-taxi">' + '<p id="other-taxi-amount">' + country.taxi + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Coffee</h4>' + '<img src="assets/hot51.png" class="icon" id="other-coffee">' + '<p id="other-coffee-amount">' + country.coffee + '</p>' + '</div>').fadeIn(1500).appendTo('.other-all-stats')

          var ukMeal = parseFloat($('#uk-meal-amount').text());
          var otherMeal = parseFloat($('#other-meal-amount').text());
          var difference = otherMeal / ukMeal;
          var newSize = 250 * difference;
          $('#other-meal').css({'width' : newSize, 'height' : newSize});

          var ukMcdonalds = parseFloat($('#uk-mcdonalds-amount').text());
          var otherMcdonalds = parseFloat($('#other-mcdonalds-amount').text());
          var difference = otherMcdonalds / ukMcdonalds;
          var newMcdonaldsSize = 250 * difference;
          $('#other-mcdonalds').css({'width' : newMcdonaldsSize, 'height' : newMcdonaldsSize});
          // console.log('match!');

          var ukBeer = parseFloat($('#uk-beer-amount').text());
          var otherBeer = parseFloat($('#other-beer-amount').text());
          var difference = otherBeer / ukBeer;
          var newBeerSize = 250 * difference;
          $('#other-beer').css({'width' : newBeerSize, 'height' : newBeerSize});

          var ukCoke = parseFloat($('#uk-coke-amount').text());
          var otherCoke = parseFloat($('#other-coke-amount').text());
          var difference = otherCoke / ukCoke;
          var newCokeSize = 250 * difference;
          $('#other-coke').css({'width' : newCokeSize, 'height' : newCokeSize});

          var ukCigarette = parseFloat($('#uk-cigs-amount').text());
          var otherCigarette = parseFloat($('#other-cigs-amount').text());
          var difference = otherCigarette / ukCigarette;
          var newCigaretteSize = 250 * difference;
          $('#other-cigs').css({'width' : newCigaretteSize, 'height' : newCigaretteSize});

          var ukRent = parseFloat($('#uk-rent-amount').text());
          var otherRent = parseFloat($('#other-rent-amount').text());
          var difference = otherRent / ukRent;
          var newRentSize = 250 * difference;
          $('#other-rent').css({'width' : newRentSize, 'height' : newRentSize});
          var otherHeight = $('#other-rent-amount').parent().height();
          if ($('#uk-rent-amount').parent().height() < otherHeight) {
            $('#uk-rent-amount').parent().css({'height' : otherHeight})
          };

          var ukCinema = parseFloat($('#uk-cinema-amount').text());
          var otherCinema = parseFloat($('#other-cinema-amount').text());
          var difference = otherCinema / ukCinema;
          var newCinemaSize = 250 * difference;
          $('#other-cinema').css({'width' : newCinemaSize, 'height' : newCinemaSize});

          var ukJeans = parseFloat($('#uk-jeans-amount').text());
          var otherJeans = parseFloat($('#other-jeans-amount').text());
          var difference = otherJeans / ukJeans;
          var newJeansSize = 250 * difference;
          $('#other-jeans').css({'width' : newJeansSize, 'height' : newJeansSize});

          var ukJeans = parseFloat($('#uk-jeans-amount').text());
          var otherJeans = parseFloat($('#other-jeans-amount').text());
          var difference = otherJeans / ukJeans;
          var newJeansSize = 250 * difference;
          $('#other-jeans').css({'width' : newJeansSize, 'height' : newJeansSize});

          var ukShoes = parseFloat($('#uk-shoes-amount').text());
          var otherShoes = parseFloat($('#other-shoes-amount').text());
          var difference = otherShoes / ukShoes;
          var newShoesSize = 250 * difference;
          $('#other-shoes').css({'width' : newShoesSize, 'height' : newShoesSize});

          var ukTaxi = parseFloat($('#uk-taxi-amount').text());
          var otherTaxi = parseFloat($('#other-taxi-amount').text());
          var difference = otherTaxi / ukTaxi;
          var newTaxiSize = 250 * difference;
          $('#other-taxi').css({'width' : newTaxiSize, 'height' : newTaxiSize});

          var ukCoffee = parseFloat($('#uk-coffee-amount').text());
          var otherCoffee = parseFloat($('#other-coffee-amount').text());
          var difference = otherCoffee / ukCoffee;
          var newCoffeeSize = 250 * difference;
          $('#other-coffee').css({'width' : newCoffeeSize, 'height' : newCoffeeSize});
        }
      })
    })
  });


});
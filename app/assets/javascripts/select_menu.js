$(document).ready(function() {

  function clearList() {
    $('.other-country #other-header').html('');
    $('.other-country .other-all-stats').html('');
  }

  function setOtherHeight(ukAmount, otherAmount, otherIcon) {
    var ukPrice = parseFloat($(ukAmount).text());
    var otherPrice = parseFloat($(otherAmount).text());
    var difference = otherPrice / ukPrice;
    var newHeight = 250 * difference;
    $(otherIcon).css({'width' : newHeight, 'height' : newHeight});
  }

  $.ajax({
    type: 'GET',
    url: '/countries',
    dataType: 'json'
  }).done(function(response){
    $.each(response, function(index, value) {
      $('<option value="' + value.name + '">' + value.name + '</option>').appendTo('#country-select')
    })
  });

  var dropDown = $('#country-select');

  dropDown.on('change', function(){
    chosenCountry = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/countries',
      dataType: 'json'
    }).done(function(response){
      clearList();
      $.each(response, function(index, country){
        if (country.name === chosenCountry) {
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
          
          setOtherHeight('#uk-meal-amount', '#other-meal-amount', '#other-meal');
          setOtherHeight('#uk-mcdonalds-amount', '#other-mcdonalds-amount', '#other-mcdonalds');
          setOtherHeight('#uk-beer-amount', '#other-beer-amount', '#other-beer');
          setOtherHeight('#uk-coke-amount', '#other-coke-amount', '#other-coke');
          setOtherHeight('#uk-cigs-amount', '#other-cigs-amount', '#other-cigs');
          setOtherHeight('#uk-rent-amount', '#other-rent-amount', '#other-rent');
          setOtherHeight('#uk-cinema-amount', '#other-cinema-amount', '#other-cinema');
          setOtherHeight('#uk-jeans-amount', '#other-jeans-amount', '#other-jeans');
          setOtherHeight('#uk-jeans-amount', '#other-jeans-amount', '#other-jeans');

          var ukRent = parseFloat($('#uk-rent-amount').text());
          var otherRent = parseFloat($('#other-rent-amount').text());
          var difference = otherRent / ukRent;
          var newRentSize = 250 * difference;
          $('#other-rent').css({'width' : newRentSize, 'height' : newRentSize});
          var otherHeight = $('#other-rent-amount').parent().height();
          if ($('#uk-rent-amount').parent().height() < otherHeight) {
            $('#uk-rent-amount').parent().css({'height' : otherHeight})
          } else {
            $('#uk-rent-amount').parent().css({'height' : '400'})
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
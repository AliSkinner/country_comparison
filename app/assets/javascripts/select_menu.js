$(document).ready(function() {

  function clearList() {
    $('.other-country .other-all-stats').html('');
  }

  function setAndMatchItemHeight(ukAmount, otherAmount, otherIcon) {
    var ukPrice = parseFloat($(ukAmount).text());
    var otherPrice = parseFloat($(otherAmount).text());
    var difference = otherPrice / ukPrice;
    var newHeight = 250 * difference;
    $(otherIcon).css({'width' : newHeight, 'height' : newHeight});
    var otherHeight = $(otherAmount).parent().height();
    if ($(ukAmount).parent().height() < otherHeight) {
      $(ukAmount).parent().css({'height' : otherHeight})
    } else {
      $(ukAmount).parent().css({'height' : '400'})
    };
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
          var countryTotal = (country.meal + country.mcdonalds + country.beer + country.coke + country.cigs + country.rent + country.cinema + country.jeans + country.shoes + country.taxi + country.coffee).toFixed(2);
          $('<div class="stat">' + '<h4>Meal in an Inexpensive Restaurant</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/plate7.png" class="icon" id="other-meal">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-meal-amount">' + country.meal + '</p>' + '</div>' +
            '<div class="stat">' + '<h4>Meal at McDonalds</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/fast-food.png" class="icon" id="other-mcdonalds">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-mcdonalds-amount">' + country.mcdonalds + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Domestic Beer (500ml Draught)</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/beer34.png" class="icon" id="other-beer">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-beer-amount">' + country.beer + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Coca-Cola (330ml Bottle)</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/coke.png" class="icon" id="other-coke">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-coke-amount">' + country.coke + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>20 Marlboro Cigarettes</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/cigarette8.png" class="icon" id="other-cigs">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-cigs-amount">' + country.cigs + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Monthly Rent of a City-Center 1 Bedroom Apartment</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/house121.png" class="icon" id="other-rent">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id= "other-rent-amount">' + country.rent + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Cinema Ticket</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/clapperboard2.png" class="icon" id="other-cinema">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-cinema-amount">' + country.cinema + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Jeans (Levis 501 or Equivolent)</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/jeans.png" class="icon" id="other-jeans">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-jeans-amount">' + country.jeans + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Nike Trainers</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/trail.png" class="icon" id="other-shoes">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-shoes-amount">' + country.shoes + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Taxi (1km)</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/taxi14.png" class="icon" id="other-taxi">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-taxi-amount">' + country.taxi + '</p>' + '</div>' + 
            '<div class="stat">' + '<h4>Cappuccino</h4>' + '<img src="https://s3-eu-west-1.amazonaws.com/assorted-projects/hackathon-icons/hot51.png" class="icon" id="other-coffee">' + '</br>' + '<p class="price">£</p>' + '<p class="price" id="other-coffee-amount">' + country.coffee + '</p>' + '</div>' +
            '<div class="stat other-total">' + '<h3>Total:</h3>' + '</br>' + '<h1 class="price">£</h1>' + '<h1 class="price">' + countryTotal + '</h1>' + '</div>').fadeIn(1000).appendTo('.other-all-stats')
          
          setAndMatchItemHeight('#uk-meal-amount', '#other-meal-amount', '#other-meal');
          setAndMatchItemHeight('#uk-mcdonalds-amount', '#other-mcdonalds-amount', '#other-mcdonalds');
          setAndMatchItemHeight('#uk-beer-amount', '#other-beer-amount', '#other-beer');
          setAndMatchItemHeight('#uk-coke-amount', '#other-coke-amount', '#other-coke');
          setAndMatchItemHeight('#uk-cigs-amount', '#other-cigs-amount', '#other-cigs');
          setAndMatchItemHeight('#uk-rent-amount', '#other-rent-amount', '#other-rent');
          setAndMatchItemHeight('#uk-cinema-amount', '#other-cinema-amount', '#other-cinema');
          setAndMatchItemHeight('#uk-jeans-amount', '#other-jeans-amount', '#other-jeans');
          setAndMatchItemHeight('#uk-shoes-amount', '#other-shoes-amount', '#other-shoes');
          setAndMatchItemHeight('#uk-taxi-amount', '#other-taxi-amount', '#other-taxi');
          setAndMatchItemHeight('#uk-coffee-amount', '#other-coffee-amount', '#other-coffee');
        }
      })
    })
  });


});
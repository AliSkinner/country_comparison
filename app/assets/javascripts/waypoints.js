$(document).ready(function(){

  var waypoint = new Waypoint({
    element: document.getElementById('uk-cigs'),
    handler: function(direction) {
      console.log('waypoing')
    }
  })

});
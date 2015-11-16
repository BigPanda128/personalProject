/*
* spa.entry.spa
*hold the logic for the entry form on the main page
* Ryan Postma
*/

spa.entry = (function () {
  'use strict';

  //--- Local variables
  var
    configMap = {
      main_html : String()


      + '<div class="container" id="main">'
      + '<p></p>'
      + '<div class="jumbotron">'

      + '<h1>Artist Database</h1>'
      + '<p>Hello fellow artist! Please enter your info as follows below. Thank you!</p>'
      + '</div>'

      + '<h3>Data Entry Form </h3>'
      + '<div class="row">'
      + '<div class="form-group col-md-3">'

      + '<div class="input-group">'
      + '<span class="input-group-addon" id="basic-addon1">Name:</span>'
      + '<input type="text" class="form-control" placeholder="John Doe" aria-describedby="basic-addon1">'
      + '</div>'
      + '<br/>'

      + '<div class="input-group">'
      + '<span class="input-group-addon" id="basic-addon1">Email:</span>'
      + '<input type="text" class="form-control" placeholder="email@domain.com" aria-describedby="basic-addon1">'
      + '</div>'
      + '<br/>'

      + '<div class="input-group">'
      + '<span class="input-group-addon" id="basic-addon1">Bio:</span>'
      + '<textarea name="biography" class="form-control" placeholder="Your story..." id="biography"></textarea><br />'
      + '<input type="hidden" name="articleid" id="articleid"  />'
      + '</div>'

      + '</div>'

      +'<div class="form-group col-md-3">'

      + '<h4>Upload Images here</h4>'
      + '<input type="file" name="pic" accept="image/*">'

      + '</div>'
      + '</div>'

      + '<button type="button" class="btn btn-success">Submit</button>'
      + '<p></p>'
    + '</div>'

      },

    stateMap = {
      $container  : undefined,
    },
    jqueryMap = {},


    // Local variables, both data and functions
    initModule;
  //--- end local variables
  // Begin public method /initModule
  initModule = function ( $container ) {
    // load HTML and map jQuery collections SILENTLY!
    // Start out in generic view
    stateMap.$container = $container;
    $container.hide();

    // Load up all the HTML
    $container.html( configMap.main_html );

    // Set collection references
    setJqueryMap();

 } // End public method /initModule


  return { initModule : initModule};
  //--- end public methods
}());

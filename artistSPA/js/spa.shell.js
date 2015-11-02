/*
 * spa.shell.js
 * Shell module for SPA
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function () {
  'use strict';
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
      + '<ul class="nav nav-pills" id="navi">'
      + '<li role="presentation" class="active"><a href="#">Entry</a></li>'
      + '<li role="presentation"><a href="#">Browse</a></li>'
      + '</ul>'
      + '<div class="container" id="main">'
      + '<div class="jumbotron">'

      + '<h1>Artist Database</h1>'
      + '<p>Hello fellow artist! Please enter your info as follows below. Thank you!</p>'
      + '</div>'
      + '<h3>Data Entry Form </h3>'
      + 'NAME: <input type="text" placeholder="John Doe" name="name" id="name" /><br />'

      + '<div class="input-group">'
      + '<span class="input-group-addon" id="sizing-addon2">Name:</span>'
      + '<input type="text" class="form-control" placeholder="John Doe" aria-describedby="sizing-addon2">'
      + '</div>'

      + 'Email: <input type="text" placeholder="email@domain.com" name="email" id="email" /><br />'
      + '<div class="input-group">'
      + '<span class="input-group-addon" id="sizing-addon2">Email:</span>'
      + '<input type="text" class="form-control" placeholder="Users username" aria-describedby="basic-addon2">'
      + '<span class="input-group-addon" id="basic-addon2">@</span>'
      + '<input type="text" class="form-control" placeholder="Users domain">'
      + '</div>'

      + 'Biography:<br />'
      + '<textarea name="biography" placeholder="Your story..." id="biography"></textarea><br />'

      + '<input type="hidden" name="articleid" id="articleid"  />'

      + '<input type="submit" value="Submit"/>'
    + '</div>'
    },
    stateMap  = { $container : null },
    jqueryMap = {},

    setJqueryMap, initModule, submitClick;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //-------------------- BEGIN UTILITY METHODS -----------------
  //--------------------- END UTILITY METHODS ------------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container : $container };
  };
  // End DOM method /setJqueryMap/
  //--------------------- END DOM METHODS ----------------------

  //------------------- BEGIN EVENT HANDLERS -------------------

  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin Public method /initModule/
  initModule = function ( $container ) {
    stateMap.$container = $container;
    console.log("It works");
    $container.html( configMap.main_html );
    setJqueryMap();
  };
  // End PUBLIC method /initModule/

  return { initModule : initModule };
  //------------------- END PUBLIC METHODS ---------------------
}());

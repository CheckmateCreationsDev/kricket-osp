/*
*   platform.js
*   Get mobile device platform
*/

Platform = {
  isIOS: function () {
    return (!!navigator.userAgent.match(/iPad/i) || !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i))
           || Session.get('platformOverride') === 'iOS';
  },

  isAndroid: function () {
    return navigator.userAgent.indexOf('Android') > 0
           || Session.get('platformOverride') === 'Android';
  }
};

/* Global helpers */

Template.registerHelper('isIOS', function () {
  return Platform.isIOS();
});

Template.registerHelper('isAndroid', function () {
  return Platform.isAndroid();
});

/* Back button on android mobile device */

document.addEventListener("backbutton", function(){
  Template.map.showMapComponents();
}, false);
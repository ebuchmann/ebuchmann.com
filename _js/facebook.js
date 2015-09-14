/*
  Facebook sharing

  Attributes:
  - link: The link attached to this post
  - picture: The URL of a picture attached to this post. Must be at least 200px by 200px
  - source: The URL of a media file (SWF or MP3), picture attribute is required to use source
  - name: The name of the link attachment
  - caption: The caption of the link (appears beneath the link name), if empty it will populate with the URL of the link
  - description: The description of the link (appears beneadth the link caption), if empty it will populate by information scraped from the link, typically the title of the page
  - ref: A comma-separated list, consisting of at most 5 distinct items, each of length at least 1 and at most 15 characters (alpha, numeric, and _). Each is a category used in facebook insights
*/

(function() {
  var appId = '1464356960535642';  // test api, localhost:4000
  var language = 'en_US';
  var className = 'fb-share';

  window.fbAsyncInit = function() {
    FB.init({
      appId      : appId,
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "http://connect.facebook.net/" + language + "/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  var links = document.getElementsByClassName(className);

  for( var i = 0; i < links.length; i++ ) {
    var link = links[i];

    link.onclick = function(e) {
      e.preventDefault();

      FB.ui({
        method: 'feed',
        link: this.getAttribute('data-href'),
        name: this.getAttribute('data-name')
      });
    };
  };
})();

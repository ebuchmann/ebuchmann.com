(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40066370-7', 'auto');
ga('send', 'pageview');

(function() {
  var links = document.getElementsByClassName('ga-link');

  // track clicks to originals and prints on Etsy
  for( var i = 0; i < links.length; i++ ) {
    var link = links[i];

    link.onclick = function(e) {
      var title = this.getAttribute('title');
      var category = this.getAttribute('data-category');

      ga('send', 'event', category, 'click', title)
    };
  };

})();

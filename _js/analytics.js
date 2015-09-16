(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40066370-7', 'auto');
ga('send', 'pageview');

(function() {
  var originals = document.getElementsByClassName('ga-original');
  var prints = document.getElementsByClassName('ga-print');

  // track clicks to original paintings on Etsy
  for( var i = 0; i < originals.length; i++ ) {
    var original = originals[i];

    original.onclick = function(e) {
      var title = this.getAttribute('title');

      ga('send', 'event', 'original', 'click', title)
    };
  };

  // track clicks to prints on Etsy
  for( var i = 0; i < prints.length; i++ ) {
    var print = prints[i];

    print.onclick = function(e) {
      var title = this.getAttribute('title');

      ga('send', 'event', 'print', 'click', title)
    };
  };
})();

/*
  Pinterest share example
  - data-ref: URL of the page you want the pin to link to
  - data-media: URL of the image you want to pin
  - data-description: Description you want to include with the pin

  <a class="pin-it" data-href="" data-media="" data-description="" href="#">...</a>
*/

(function() {
  var className = 'pin-it';
  var links = document.getElementsByClassName(className);

  for( var i = 0; i < links.length; i++ ) {
    var link = links[i];

    link.onclick = function(e) {
      e.preventDefault();

      var pinterest = '//www.pinterest.com/pin/create/button/?url=' + this.getAttribute('data-href') + '&media=' + this.getAttribute('data-media') + '&description=' + this.getAttribute('data-description');

      window.open(pinterest, null, "height=650, width=750, status=yes, toolbar=no, menubar=no, location=no");
    };
  };

})();

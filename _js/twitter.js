/*
  Twitter tweet button

  example: <a href="https://twitter.com/intent/tweet?text=(text)&url=(url)">

  &url is optional, but it does separate the text from the url when the tweet opens up and automatically highlights the text for editing
*/

(function() {
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));
})();

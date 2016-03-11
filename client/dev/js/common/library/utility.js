var ready = (function(ready) {  
  var ie = function() {
    return (!document.attachEvent || typeof document.attachEvent === "undefined" ? false : true);
  }
  
  ready = function(callback) {
    if(callback && typeof callback === 'function'){
      if(ie()) {
        document.attachEvent("onreadystatechange", function() {
          if(document.readyState === "complete") {
            return callback();
          }
        });
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          return callback();
        });
      }
    } else {
      console.error('The callback is not valid');
    }
  }
  
  return ready;
})(ready || {});


(function(document, window, ready, undefined) {
    ready(function() {
        console.log('DOM Is Ready...');
        $(document).on("click",".navbar-toggle,.inner .navbar .nav a, .navbar .nav.main a",function(){
          $(".app").toggleClass("off-canvas");
        })
    });
})(document, window, ready);

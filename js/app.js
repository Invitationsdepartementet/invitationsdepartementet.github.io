$(function() {

  $(".js-button-play-movie").click(function(e) {
    e.preventDefault();
    $(".js-video-overlay")
      .addClass("video-overlay-active")
      .append('<iframe class="js-vimeo-iframe" src="https://player.vimeo.com/video/141152511?autoplay=1&title=0&byline=0" width="1020" height="574" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });

  $(".js-video-overlay").click(function(e) {
    $(".js-vimeo-iframe").remove();
    $(this).removeClass("video-overlay-active");
  });

  $.getJSON("http://v1.invitationsdepartementet.se/api/regions/list", function( data ) {
    var options = [];

    $.each( data, function( key, val ) {
      options.push( '<option value="' + key + '">' + val + '</option>' );
    });

    $("#regions").append(options.join(''));
  });

  // Heatmap
  heatmap_ext = {
    altShiftH: false
  };

  (function(h,e,a,t,m,p) {
    m=e.createElement(a);m.async=!0;m.src=t;
    p=e.getElementsByTagName(a)[0];p.parentNode.insertBefore(m,p);
  })(window,document,'script','https://u.heatmap.it/log.js');

});

window.onscroll = function() {scroller()};

function scroller() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main-header").className = 'header scrolled';
  } else {
    document.getElementById("main-header").className = "header";
  }
}

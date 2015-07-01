$(document).ready(function() {
$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  }
});
});

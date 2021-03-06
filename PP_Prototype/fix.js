
var $grid = $('.grid').packery({
  itemSelector: '.grid-item'
});

$grid.on( 'click', '.grid-item', function( event ) {
  // change size of item by toggling large class
  $(  event.currentTarget  ).toggleClass('grid-item--large');
  // trigger layout after item size changes
  $grid.packery('layout');
});

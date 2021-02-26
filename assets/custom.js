function addItemToCart (post_id, qty) {

  $(".trigger-addtocart.btn_" + post_id).text("Adding...");
  data = {
    "quantity": qty,
    "id": post_id
  }
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: data,
    dataType: 'json',
    error: addToCartFail,
    success: function(cart) {
      //window.location.href = '/cart';

      setTimeout(function(){
        $(".trigger-addtocart.btn_" + post_id).text("Added");
      }, 1000);

      var addedQuantity = 1,
          prevCartQuantity = parseInt($('#CartButton .cart-count-js').text()),
          newTotal = addedQuantity + prevCartQuantity;
      $('#CartButton .cart-count-js').text( newTotal ).show().addClass('pulse-cart-icon');

      return false;
    }
  });
}
function addToCartFail(jqXHR, textStatus, errorThrown){
  var response = $.parseJSON(jqXHR.responseText);
  alert(response.description);
}
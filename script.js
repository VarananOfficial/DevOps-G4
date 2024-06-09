$('.cart_btn').on('click', function () {
    alert('Successfully Added to cart')
    $('.cart_btn').attr('disabled', true);

    document.getElementById("cpu_text").innerHTML = '<span id="selected_product"><a id="cpu_btn" class="btn btn-dark cpu_btn">+ Select</a></span>';
    document.getElementById("unit_price_cpu").innerHTML = '';
    document.getElementById('price_cpu').innerHTML = '';
    document.querySelector(".qty_cpu").innerHTML = '';
    document.getElementById("delete_btn_cpu").innerHTML = '';

    document.getElementById("mb_text").innerHTML = '<span id="selected_product"><a id="mb_btn" class="btn btn-dark mb_btn">+ Select</a></span>';;
    document.getElementById("unit_price_mb").innerHTML = '';
    document.getElementById('price_mb').innerHTML = '';
    document.querySelector(".qty_mb").innerHTML = '';
    document.getElementById("delete_btn_mb").innerHTML = '';
  })
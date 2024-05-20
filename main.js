$(document).ready(() => {
  $.get('https://fakestoreapi.com/products')
    .done((data) => {
      const productContainer = $('#card-container')
      data.forEach(product => {
        const card = $('<div>').addClass('card')
        const img = $('<img>').attr('src', product.image)
        const title = $('<h3>').text(product.title)
        const price = $('<h4>').text("$" + product.price)
        // append childs
        card.append(img, price, title)
        productContainer.append(card)
        card.click(() => {
          const productPage = `product.html?id=${product.id}`
          window.location.href = productPage
        })

      })

    })
    .fail(() => {
      console.log('failed mera bhai')
    })


})

const productId = new URLSearchParams(window.location.search).get('id');
$.get(`https://fakestoreapi.com/products/${productId}`, (product) => {
  const productWrapper = $('.product-detail-wrapper');
  const productContainer = $('<div>').addClass('product-img-des')
  const productDetailContainer = $('<div>').addClass('productDetails')
  const productImage = $('<img>').attr({ src: product.image })
  const productTitle = $('<h1>').html(`<i class="bi bi-tags-fill"></i> ${product.title}`)
  const productDes = $('<p>').html(`${product.description}`)
  const categoryButton = $('<button>').html(`<i class="bi bi-bookmark-star-fill"></i> ${product.category}`).addClass('productCategory')
  const AddToCart = $('<button>').html(`<i class="bi bi-cart4"></i> Add To Cart`).addClass('addtocart')
  const productPrice = $('<h1>').html(`<i class="bi bi-currency-dollar"></i>${product.price}`).addClass('price')
  //product text detail

  productDetailContainer.append(productTitle, productDes, categoryButton, productPrice, AddToCart)
  //product container
  productContainer.append(productImage, productDetailContainer)
  productWrapper.append(productContainer)
});



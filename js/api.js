function getProductUsingAxios(){
axios.get('https://dummyjson.com/products')
.then((response) => {
   const data = response.data;
   const products = data.products;
   const result = products.map( function(product){
      return `
      <div class="posts">
      <h2> "${product.title}"</h2>
       <span>"${product.brand}"</span>
       <br>  
      <img src ="${product.thumbnail}"/>
      <br>
      <a href="detelis.html?productId=${product.id}" class="pro_href">Detelis</a>
      <h4><span class="span"> This is price </span>${product.price} $ </h4>
      </div>
  
      `;
  
     } ).join('')
     document.querySelector(".posts").innerHTML =result
  
   })

}
getProductUsingAxios()

async function getProductUsingSwiper(){
   const response = await fetch(`https://dummyjson.com/products`);
   const data = await response.json();
   const products = data.products;
   const result = products.map(function(ele){
     return `
     <div class="swiper-slide">
     <img src="${ele.thumbnail}"/>
     </div>
     `;
   }).join('');

  document.querySelector('.swiper-wrapper').innerHTML=result
  const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 2,
   autoplay:true,
   clickable:true,
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
};
getProductUsingSwiper()




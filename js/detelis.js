async function getDetilesUsingAxios(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    const response= await axios.get(`https://dummyjson.com/products/${productId}`);
    const data = response.data;

    console.log( data);

        const {title, description, brand, price, category, thumbnail, images} = data;
        document.querySelector(".title").textContent=title;
        document.querySelector(".description").textContent=description;
        document.querySelector("img").src= thumbnail;
        document.querySelector(".category").textContent=category;
        document.querySelector(".brand").textContent=brand;
        document.querySelector(".price").textContent=price;

        const result =images.map(function(ele){
            return `
            <br/>
            <img src ="${ele}" class ="img_det"/>
            `;

        }).join('');

        document.querySelector(".detelis_product").innerHTML = result;
    
}
getDetilesUsingAxios();









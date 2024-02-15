const products = document.querySelectorAll(".product");
let number = 1;
let totalPrice = 0;

for (let product of products) {
    product.addEventListener('click', function () {
        const headingText = product.querySelector("h3").innerText;


        // create element 
        const item = document.createElement("p");
        item.innerText = number + ". " + headingText;

        const selectedItem = document.getElementById("selected");
        selectedItem.appendChild(item)
        number++;

        // product price collect
        const productPrice = product.querySelector("p").innerText;
        const productPriceArr = productPrice.split(" ");
        const productP = productPriceArr[1];
        const productPriceNumber = Number(productP)

        totalPrice = totalPrice + productPriceNumber;

        // set the value total Price 
        const displayTotalPrice = document.getElementById("totalP");
        displayTotalPrice.innerText = totalPrice;



        console.log(totalPrice)

    })
}

const cuponBtn = document.getElementById("cuponBtn");
cuponBtn.addEventListener("click", function () {

    const cuponInput = document.getElementById("cuponInput").value;
    const cuponInputArr = cuponInput.split(" ");
    const cuponInputText = cuponInputArr.join("").toLowerCase()
    
    const totalPrice = document.getElementById("totalP").innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    // console.log(typeof totalPriceNumber)
   
    if(totalPriceNumber >= 200){
        if(cuponInputText === "sell200"){
            const discount = (totalPriceNumber * 20) / 100;
            const discountPrice = document.getElementById("discountPrice");
            discountPrice.innerText = Math.round(discount);

            const totalRate = document.getElementById("total");
            totalRate.innerText = totalPriceNumber - discount;
        }
        else{
            alert ("Sister coupon code vul hoisa!!")
        }
    }
    else{
        alert ("Bro 200 takar besi kina lagbe !! ")
    }
    
    document.getElementById("cuponInput").value = "";
})
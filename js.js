
 
  
// if (document.readyState === "complete"){
//   let popup = document.getElementsByClassName("popup")[0]
// console.log(popup)
//   // popup.style.display="block"
// // popup.classList.add('popupActive')  

//   function rquiredSetTimeout(){
//     popup.style.display="none"
    

//   }setTimeout(rquiredSetTimeout,3000)

// }

const toggleButton =document.querySelector('#hamburger')
const navbarLinks=document.getElementsByClassName('nav')[0]
toggleButton.addEventListener("click",()=>{
    if(navbarLinks.classList.contains("hide")){navbarLinks.classList.remove("hide");
    navbarLinks.classList.add("show")
        
    }else if(navbarLinks.classList.contains("show")){navbarLinks.classList.remove("show");
    navbarLinks.classList.add("hide")
}

})
// navbarLinks.classList.toggle('hidden')




// my slider

let menu = document.getElementById("menu");
let list = document.getElementById("menulist");
let image = document.getElementsByClassName("bgs");
let imageIndex = 0;
function slideshow() {
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  imageIndex++;

  if (imageIndex > image.length) {
    imageIndex = 1;
  }
  image[imageIndex - 1].style.display = "block";

  setTimeout(slideshow, 2000);
}

slideshow();

// menu.addEventListener("click", myfunction);
function myfunction() {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display="none";
 }
}







// add to cart
let submit=document.getElementsByClassName("addToCart")
 
for (let i=0; i<submit.length; i++){
  let submitBtn=submit[i];
  // console.log(submitBtn.textContent,"ready")
  submitBtn.addEventListener("click",addToCartClick);
}


function addToCartClick(e){

  let submitted=e.target
  let submitParent=submitted.parentElement.parentElement;

  let ourTitle=submitParent.children[0].textContent
  console.log(ourTitle,"kevnlk")
  

  let ourImage=submitParent.children[1].src

  console.log(ourImage,"Images")

  let ourPrice=submitParent.children[2].textContent.replace("$","")

  console.log(ourPrice,"Prices")

  // console.log(ourTitle,ourImage,ourPrice,"check values")


  let tableRow=document.createElement("tr")
  
  tableRow.classList.add("cartItems")
  
  tableRow.innerHTML=

                 `
  
                    <td class="image"><img src="${ourImage}" alt=""></td>
                    <td class="title">${ourTitle}</td>
                    <td class="price">$ ${ourPrice}</td>
                    <td class="class-items-qty-container">
                    <input class="cartItemsQty" type="number" value="1" />
                    <td><button class="remove"><i class="fa-solid fa-3x fa-xmark"></i></botton></td>
                
                   
     


                `
    // let row=tableRow.innerHTML


  

let body=document.getElementsByTagName("tbody")[0]
  // console.log(tableRow ,"wetin dey body")
  body.appendChild(tableRow)
  // console.log(body.appendChild(tableRow))



  // Remove button from basket
let removeBtn= document.getElementsByClassName("remove")

for (let i=0; i<removeBtn.length; i++){
  
  // console.log(removeBtn[i],"remo")
  removeBtn[i].addEventListener("click",remover)
}
updateCartTotal()
}







function remover(e){
  let removeTarget=e.target
  removeTarget.parentElement.parentElement.parentElement.remove()
  
  updateCartTotal()
}


function updateCartTotal(){

  cart=document.getElementsByTagName("tbody")[0]
  

  cartItems=cart.getElementsByClassName("cartItems")
  // console.log(cartItems," this is a price ")

  // initiate total sum

  let total =0
  for (let item of cartItems){

  const priceElement=item.getElementsByClassName("price")[0]
  
  const price =parseFloat(priceElement.textContent.replace("$",""))
  // console.log(price ,"htis is the price")

  
  

  const qty=item.getElementsByClassName("cartItemsQty")[0]


  const quantity=parseInt(qty.value)
  // console.log(quantity," this is a quantity ")

  total=total + price * quantity
  // console.log(total," this is a total quantity ")

  }
  


  // to 2 decimal places
  const totalPrice = Math.round(total*100)/100
cartTotal=document.getElementsByClassName("cart-total")[0].textContent=`Total=$ ${totalPrice}`
// console.log(cartTotal,"yeps yeps")


}





const modeToggle=document.getElementsByTagName("body")[0]

const toggleMode=document.querySelector(".mode")

// let getMode=localStorage.getItem("mode")
// if(getMode==="darkMode"){
//   toggleMode.classList.add("darkMode")
// }

let getMode=localStorage.getItem("mode")
if( getMode === "lightMode"){
  modeToggle.classList.remove("darkMode")

}
toggleMode.addEventListener("click",()=>{

// localStorage.setItem("mode",e.target)
  modeToggle.classList.toggle("darkMode")

  toggleMode.classList.toggle("modeChange")

  if(modeToggle.classList.contains("darkMode")){
    localStorage.setItem("mode","darkMode")
  }else{
    localStorage.setItem("mode","lightMode")
  }



})
// let mode=localStorage.getItem("mode")
// toggleMode.e.target=mode




 

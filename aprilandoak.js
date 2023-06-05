

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//change image when click on different color
function changeScr(n) {
  if(n<1){
    document.getElementById("Image1").src="pics/sidetable.jpeg";
  document.getElementById("Image2").src="pics/sidetable1.jpeg";
  document.getElementById("Image3").src="pics/sidetable2.jpeg";
  }
  else{

  document.getElementById("Image1").src="pics/greysidetable.jpeg";
  document.getElementById("Image2").src="pics/greysidetable1.jpeg";
  document.getElementById("Image3").src="pics/greysidetable2.jpeg";

  }

}

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

function addToCart(n){

  //Assigning the variable to the user input
  var p_quantity = document.getElementById('quantity').value;

  // to print the input here
  document.getElementById("printhere").innerHTML = p_quantity
}
 
function deleteItem(n){
  
  if(n<1){
    var element= document.getElementById("product1")
    element.remove();
  }
  if(n>1){
    var element= document.getElementById("product2")
    element.remove();
  }
}

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

}

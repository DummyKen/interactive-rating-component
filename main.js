// all the selectors
const submitBtn = document.querySelector('#submit');
const ratings = document.querySelector('.numbers');
const rating = document.querySelector('.number');
const ratingValue = document.querySelector('.rValue')
const ratingState = document.querySelector('.rating');
const thankYouState = document.querySelector('.thank-you');
// go back btn
const backBtn = document.querySelector('.back')
//rating value
let value = 0;

//submit
submitBtn.addEventListener('click', () =>{

  ratingState.style.display = "none";
  thankYouState.style.display = "block";

}
)

//back
backBtn.addEventListener('click', () => {
  ratingState.style.display = "block";
  thankYouState.style.display = "none";

})

//ratings
ratings.addEventListener('click', (e) => {
  e.target.classList.add('selected');
  value = e.target.innerText;
  ratingValue.textContent = value;

})

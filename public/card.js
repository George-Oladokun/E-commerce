const paymentForm = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');
const cardNumberInput = document.getElementById('cardNumber');
const cardNumberDisplay = document.querySelector('.card__number');
const cardNameInput = document.getElementById('cardName');
const cardNameDisplay = document.querySelector('.card__name');
const expiryDateInput = document.getElementById('expiryDate');
const expiryDateDisplay = document.querySelector('.card__expiry');
const cvvInput = document.getElementById('cvv');
const cvvDisplay = document.querySelector('.card__cvv');

paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  animateCardFlip();
  setTimeout(() => {
    paymentForm.reset();
    successMessage.style.display = 'none';
    animateCardFlip();
  }, 5000);
});

cardNumberInput.addEventListener('input', (e) => {
  const cardNumber = e.target.value;
  cardNumberDisplay.textContent = formatCardNumber(cardNumber);
});

cardNameInput.addEventListener('input', (e) => {
  const cardName = e.target.value;
  cardNameDisplay.textContent = cardName ? cardName.toUpperCase() : 'YOUR NAME';
});

expiryDateInput.addEventListener('input', (e) => {
  const expiryDate = e.target.value;
  expiryDateDisplay.textContent = formatExpiryDate(expiryDate);
});

cvvInput.addEventListener('input', (e) => {
  const cvv = e.target.value;
  cvvDisplay.textContent = cvv;
});
// cardNumberInput, cardNameInput,expiryDateInput.onclick=(()=>{
//     document.querySelector('.card').style.transform="rotateY(180deg)"
// })
// cvvInput.onclick=(()=>{
//     document.querySelector('.card').style.transform="rotateY(180deg)"
// })
function animateCardFlip() {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');
}

function formatCardNumber(cardNumber) {
  const formattedNumber = cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  return formattedNumber.length === 19 ? formattedNumber : cardNumber;
}

function formatExpiryDate(expiryDate) {
  const formattedDate = expiryDate.replace(/\s/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
  return formattedDate.length === 5 ? formattedDate : expiryDate;
}

let counter = 0;
 
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.querySelector('#reset');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
 
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}
let form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if(height === '' || height <=0 || isNaN(height)){
        results.innerHTML = "Please provide valid height"
    }
   else if(weight === '' || weight <=0 || isNaN(weight)){
        results.innerHTML = "Please provide valid weight"
    }
    else {
        let bmi = (weight/ ((height * height)/ 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
})

const propanePercentageSlider = document.getElementById('propanePercentageSlider');
const sliderValue = document.getElementById('sliderValue');
const inputValue = document.getElementById('inputValue');
const numberElements = document.getElementsByClassName('number');
const delElement = document.getElementsByClassName('del')[0];
const clearElement = document.getElementsByClassName('clear')[0];
const sendButtonElement = document.getElementsByClassName('sendButton');
const formContainerElement = document.getElementById('formContainer');

    propanePercentageSlider.addEventListener('input', function() {
    const value = propanePercentageSlider.value;
    sliderValue.textContent = value + "%";
    });

    Array.from(numberElements).forEach(numberElement => {
        numberElement.addEventListener('click', function() {
            const number = this.textContent;
            inputValue.value += number;
        })
    })

    delElement.addEventListener('click', function(){
        let value = inputValue.value;
        value = value.slice(0, -1);
        inputValue.value = value;
    });
    
    clearElement.addEventListener('click', function(){    
        inputValue.value = '';
    });

    document.addEventListener('submit', function(event){
        event.preventDefault();
        let numberInput = parseInt(inputValue.value);
        let numberSlide = parseInt(propanePercentageSlider.value);
        inputValue.value = resultado(numberInput, numberSlide);
        // numberElements.addEventListener('click', function(){
        //     inputValue.value = '';
        // })
    });

    function resultado(value, percentege){
         return (((value*percentege)/100)+value).toFixed(2);
    }




//your JS code here. If required.


let input = document.querySelectorAll('.code')

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('input', function(e) {
        if (e.target.value.length == 1 && i < input.length - 1) {
            input[i + 1].focus();
        }
    });
}

input[i].addEventListener('keydown', function(e){
    if(e.key == 'Backspace' && input.value.length === 0 && index > 0){
    input[i - 1].focus();
 }
})

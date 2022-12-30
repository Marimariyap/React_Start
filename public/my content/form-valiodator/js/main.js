const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

function error(input, message){
    const formControl= input.parentElement;
    formControl.className= 'form_control error';
    const small= formControl.querySelector('small');
    small.innerText= message;
}

function success(input){
    const formControl= input.parentElement;
    formControl.className= 'form_control success';
}

function checkEmail(input){
    const check= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(check.test(input.value.trim())){
        success(input);
    }else{
        error(input, '이메일이 유효하지 않아요!');
    }
}

function getField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
      if(input.value.trim() === '') {
        error(input, `${getField(input)} is required`);
        isRequired = true;
      }else{
        success(input);
      }
    });
    return isRequired;
  }

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `${getField(input)}은(는) ${min}글자 이상 입력해주세요!`);
    }else if(input.value.length > max){
        error(input, `${getField(input)} must be less than ${max} characters`);
    }else{
        success(input);
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        error(input2, '비밀번호가 맞지 않아요! 다시 확인 부탁드릴께여...');
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(checkRequired([username, email, password, password2])){
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPassword(password, password2);
    }
});
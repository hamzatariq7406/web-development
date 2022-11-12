var firstName="";

function submitButtonClickHandler () {
    firstName = "";
}

function firstNameOnChangeHandler(event){
    firstName = firstName + event.key;
}

function maleCheckBoxClickHandler(event) {
    console.log(event.target.value);
}
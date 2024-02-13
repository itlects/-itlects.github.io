const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});




function addHyphenToPhoneNumber(phoneNumberInput) {
    const phoneNumber = phoneNumberInput.value;
    const length = phoneNumber.length;
    
    if(length >= 9) {
        let numbers = phoneNumber.replace(/[^0-9]/g, "")
                    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        phoneNumberInput.value = numbers;
    }
}

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', () => {
    addHyphenToPhoneNumber(phoneInput);
});



function check_email(emailInput) {   
    let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    //const guid = document.getElementById('guid_para');
    if (email_format.test(emailInput.value)) 
        alert("Email Check Ok!");
    else {
        alert("Not a Email Address");
        emailInput.value = "";
    }
}

const emailInput = document.getElementById('email');

emailInput.addEventListener('change', () => {
    check_email(emailInput);
});
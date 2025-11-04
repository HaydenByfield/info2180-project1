/* Add your JavaScript to this file */
window.onload  = function(){
    const form = document.querySelector('form');
    const email = document.getElementById('email')
    let message = document.querySelector('.message')

    form.addEventListener('submit', (sub)=> {
        sub.preventDefault();
        let Messages = []
        const emailValue = email.value;
        if(emailValue === "" || emailValue.includes('@') === false || emailValue.includes('.') === false){
            Messages.push("Please enter a valid email address.");   
            message.style.color = 'red';
        }else if(emailValue !== "" && emailValue.includes('@') && emailValue.includes('.')){
            Messages.push( "Thank you! Your email address "  + emailValue + " has been added to our mailing list!")
            message.style.color = 'blue';
        }
        message.innerText =  Messages.join("\n");
          
    })

}
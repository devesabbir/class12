// simpleFormValidaion
const simpleForm = document.querySelector("#simpleForm")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const phone = document.querySelector("#phone")
const city = document.querySelector("#city")
const zipCode = document.querySelector("#zip-code")
const button = document.querySelector("#button")
const label = document.querySelector(".input-box label")
const input_box = document.querySelectorAll(".input-box")
const p = document.querySelector(".input-box p")
const alrt = document.getElementById('alrt')

//currencyConverter

const crnbtn = document.getElementById('crn-btn')
const output = document.getElementById('output')

//marrigeSatus
const maName = document.getElementById('ma_name')
const maAge = document.getElementById('ma_age')

const maButton = document.getElementById('ma_button')
const maOutput = document.getElementById('ma_output')


//simpleFormValidation
password.onkeyup = () => {
  
    if(password.value.length < 6){
        input_box[2].children[4].innerHTML = `<b style="color:red;">Your Password must be at least 6 characters.</b>`
        password.style.border = '1px solid red';

    }else if(password.value.search(/[a-z]/i) < 0){
        input_box[2].children[4].innerHTML = `<b style="color:red;">Must contain at least one Letter.</b>` 
    }else if(password.value.search(/[@!#$%&\*]/) < 0){
        input_box[2].children[4].innerHTML = `<b style="color:red;">Must contain at least one Speacial Character.</b>`   
    }else if(password.value.search(/[0-9]/) < 0){
        input_box[2].children[4].innerHTML = `<b style="color:orange;">Must contain at least one Digit.</b>`   
    }else{
        input_box[2].children[4].innerHTML = `<b style="color:green;">Your Password Is Strong.</b>` 
        password.style.border = '1px solid green'
    }
}

password.onblur = ()  => {
    input_box[2].children[4].innerHTML = ''
}

//nameValidation
name.addEventListener('keyup', function(){
    if((/^[a-zA-Z0-9 ]*$/).test(name.value)){
        name.style.border =  '1px solid green'
    }else if(name.value == ''){
        name.style.border =  '1px solid red'
    }else{
        name.style.border =  '1px solid red'
    }
})

name.addEventListener('blur', function(){
    if(name.value == ''){
        name.style.border =  '1px solid red'
    }
})


//mailvalidation
email.addEventListener('keyup', function(){
    if((/^[a-z0-9_\.]*@[a-z]{1,6}\.[a-z]{2,7}$/).test(email.value)){
        email.style.border =  '1px solid green'
    }else{
        email.style.border =  '1px solid red'
    }
})

//phoneValidation
phone.addEventListener('keyup', () => {
     if((/^(01|8801|\+8801)[0-9]{9}$/).test(phone.value)){
        phone.style.border = '1px solid green';  
     }else{
        phone.style.border = '1px solid red ';   
     }

})

phone.addEventListener('blur', () => {
    if((/^(01|8801|\+8801)[0-9]{9}$/).test(phone.value)){
       phone.style.border = '1px solid green';  
    }else{
       phone.style.border = '1px solid red ';   
    }

})


zipCode.onkeyup = () => {
     if((/^[0-9]{4,}$/).test(zipCode.value)){
        zipCode.style.border = '1px solid green'
     }else{
        zipCode.style.border = '1px solid red'
     }
}





city.onclick = () => {
     if(city.value != ''){
        city.style.border = '1px solid green'
     }
}

//simpleFormPreventDefault
simpleForm.onsubmit = (e) => {
    e.preventDefault()
    
     name.style.border = name.value == '' ? '1px solid red' : '1px solid green'
     email.style.border = email.value == '' ? '1px solid red' : '1px solid green'
     password.style.border = password.value == '' ? '1px solid red' : '1px solid green';
     phone.style.border = phone.value == ''  ? '1px solid red' : '1px solid green';
     city.style.border = city.value == ''  ? '1px solid red' : '1px solid green';
     zipCode.style.border = zipCode.value == '' || zipCode.value.length < 4  ? '1px solid red' : '1px solid green';


     if(name.value == '' || email.value == '' || password.value == '' || phone.value == '' || city.value == '' || zipCode.value == '' || zipCode.value.length < 4){
          alrt.innerHTML = `<b style="color:red;">All Feilds Are Required!</b>` 
     }else if(((/^[a-zA-Z0-9 ]*$/).test(name.value) != true )|| (password.value.length < 6) || ((/^[a-z0-9_\.]*@[a-z]{1,6}\.[a-z]{2,7}$/).test(email.value) != true )||( (/^(01|8801|\+8801)[0-9]{9}$/).test(phone.value) != true)){
        alrt.innerHTML = `<b style="color:red;">All Feilds Must be Fill With Valid information!</b>` ;
       
     }else{
        alrt.innerHTML = `<b style="color:#fff;background:#45b78d;">Data is Stable.</b>`  
     }
       

}


//currencyConverter
crnbtn.onclick = () => {
    const bdtamount = document.getElementById('bdtamount').value
    const crnlist = document.getElementById('crnlist').value
     
    if(bdtamount == ''){
        output.innerHTML = `
           <p style="color:#ecf0f1;">Please Input Your amount.</p>
       `
    }else if(crnlist == ''){
        output.innerHTML =`
             <p style="color:#ecf0f1;">Please Select a Currency Type</p>
          `
    }else{
        output.innerHTML = `
             <p>${currencyc(bdtamount,crnlist)}</p> 
        `
    }
    
}


//marriageStatus


maAge.onkeyup = () => {
    if(maAge.value.length < 4 || maAge.value > new Date().getFullYear()){
        maAge.style.border = '1px solid red'
    }else{
        maAge.style.border = '1px solid green'
    }
}

maButton.addEventListener('click', () => {
    const maGender = document.getElementById('ma_gender')
     maName.style.border = (maName.value == '') ? '1px solid red': '1px solid green'  ;
     maAge.style.border = (maAge.value == '') ? '1px solid red' :'1px solid green' ;
     maGender.style.border = (maGender.value == '') ? '1px solid red' :'1px solid green' ;
       
     if(maName.value == '' || maAge.value == '' || maGender == '' || maAge.value.length < 4 || maAge.value > new Date().getFullYear()){
         maOutput.innerHTML = `
                    <p style="color:#d35400;">All Feild Required!</p>
         ` 
         maAge.style.border = '1px solid red'
     }else{
         
          setTimeout(function () {
                    maOutput.innerHTML = `
                    ${marriage(maName.value,maAge.value,maGender.value)}

                `
          },1000)

     }
})

 
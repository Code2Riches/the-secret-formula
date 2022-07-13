// == The Alerter ==
let inputText1 = document.querySelector("#userInput1");
let formAlert = document.querySelector("#alert");
let submitButton1 = document.querySelector("#submitButton1");

formAlert.addEventListener('submit', function(event){

    event.preventDefault();

    console.log(inputText1.value);

    if(inputText1.value !== ""){
        alert(inputText1.value); 
     } else {
         alert("Please input text before you hit the submit button");
     }
})

// == Sandwich Builder ==
//Breads
let whiteBread = document.querySelector("#white-bread");
let wholeBread = document.querySelector("#whole-wheat");
let multiBread = document.querySelector("#multi-grain");

//Meats
let hamMeat = document.querySelector("#ham");
let salamiMeat = document.querySelector("#salami");
let bolognaMeat = document.querySelector("#bologna");
let mortadellaMeat = document.querySelector("#mortadella");

//Cheeses
let americanCheese = document.querySelector("#amer-cheese");
let mozzarellaCheese = document.querySelector("#mozz-cheese");
let swissCheese = document.querySelector("#swiss-cheese");

let submitButton2 = document.querySelector("#submitButton2")
let formSandwich = document.querySelector("#sandwich");

formSandwich.addEventListener('submit', function(event){
    event.preventDefault();

    let breadType = ""
        if(whiteBread.checked === true){
         breadType = "White Bread";
        } else if(wholeBread.checked === true){
         breadType = "Wholewheat Bread";
        } else if(multiBread.checked === true){
            breadType = "Multi-Grain Bread";
     }
    console.log(breadType);

    let meatType = " "
        if(hamMeat.checked === true){
            meatType += "Ham ";
        } if(salamiMeat.checked === true){
            meatType += "Salami ";
        } if(bolognaMeat.checked === true){
            meatType += "Bologna ";
        } if(mortadellaMeat.checked === true){
            meatType += "Mortadella ";
        }
    console.log(meatType);

    let cheeseType = " "
        if(americanCheese.checked === true){
            cheeseType += "Ameircan Cheese ";
        } if(mozzarellaCheese.checked === true){
            cheeseType += "Mozzarella Cheese ";
        } if(swissCheese.checked === true){
            cheeseType += "Swiss Cheese ";
        }
    console.log(cheeseType);
   
    alert(`You're lucky you're eating today! Bread: ${breadType}, Meat: ${meatType} Cheese: ${cheeseType}`)

})

// == Haircut Appt Scheduler ==
let formHaircut = document.querySelector("#haircut");
let submitButton3 = document.querySelector("#submitButton3");

let cutDate = document.querySelector("#date");
let inputText2 = document.querySelector("#userInput2");
let shortHair = document.querySelector("#short-hair");
let longHair = document.querySelector("#long-hair");

formHaircut.addEventListener('submit', function(event){

    event.preventDefault();

    console.log(`Appointment Date: ${cutDate.value}`);
    console.log(`Hairstylist: ${inputText2.value}`);

    let hairLength = ""
    if(shortHair.checked === true){
        hairLength = "short-hair";
    } else if(longHair.checked === true){
        hairLength = "long-hair"
    }
    console.log("Hair length: " + hairLength);

    alert(`Your appt is scheduled: [DATE]: ${cutDate.value}, [Stylist]: ${inputText2.value}, [long or short hair]: ${hairLength}`)

  
})

// == Create Account ==
let formAccount = document.querySelector("#account");
let submitButton4 = document.querySelector("#submitButton4");

let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let passwordConfirm = document.querySelector("#passwordConfirm");

formAccount.addEventListener('submit', function(event){

    event.preventDefault();

   alert(`Your username is: ${userName.value}, Your email is: ${userEmail.value}`);
  
})
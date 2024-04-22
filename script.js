// function for email validation
function validateEmail() {
    let valid = document.getElementById("email").value;
    let pat = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,4})*$/;
    if (pat.test(valid) === false)
        alert("Chyba Vo Forme Zadaneho Mailu!");
}

//fucntion for age and date of Birth
function ageAndDateCheck() {
    let input = document.getElementById("DateOfBirth").value;
    let age = document.getElementById("age").value;
    let birthDate = new Date(input);
    let today = new Date();
    //  alert((today.getFullYear()-birthDate.getFullYear())==age);
    if ((today.getFullYear() - birthDate.getFullYear()) == age) {
        if (today.getMonth() + 1 < birthDate.getMonth() + 1)
            alert("Oops, váš dátum narodenia a vek nesedia (rozdiel v mesiace!)");
        if ((today.getMonth() + 1) == (birthDate.getMonth() + 1)) {
            if (today.getDay() < birthDate.getDay())
                alert("Oops, váš dátum narodenia a vek nesedia (rozdiel v dene)!");
        }
    } else
        alert("Oops, váš dátum narodenia a vek nesedia! (rozdiel v roku)");
}

//functions for the select and option.
function checkFirstAndSecond(){
    if (firstBar.options[firstBar.selectedIndex].index === 0) {
        secondBar.options[0].text = "Hra o tróny";
        secondBar.options[0].value = "Hra o tróny";
        secondBar.options[1].text = "Vikingovia";
        secondBar.options[1].value = "Vikingovia";
        thirdBar.options[0].text = "Jon Snow";
        thirdBar.options[0].value = "Jon Snow";
        thirdBar.options[1].text = "Tyrion Lannister"
        thirdBar.options[1].value = "Tyrion Lannister";
    } else {
        secondBar.options[0].text = "Lúpež peňazí";
        secondBar.options[0].value = "Lúpež peňazí";
        secondBar.options[1].text = "Elita";
        secondBar.options[1].value = "Elita";
        thirdBar.options[0].text = "Professor";
        thirdBar.options[0].value = "Professor";
        thirdBar.options[1].text = "Tokyo";
        thirdBar.options[1].value = "Tokyo";
    }
}

function checkSecondAndThird(){
    if (firstBar.options[firstBar.selectedIndex].index === 0) {
        if (secondBar.options[secondBar.selectedIndex].index === 0) {
            thirdBar.options[0].text = "Jon Snow";
            thirdBar.options[0].value = "Jon Snow";
            thirdBar.options[1].text = "Tyrion Lannister";
            thirdBar.options[1].value = "Tyrion Lannister";
        } else {
            thirdBar.options[0].text = "Ragnar Lothbrok";
            thirdBar.options[0].value = "Ragnar Lothbrok";
            thirdBar.options[1].text = "Bjorn Ironside";
            thirdBar.options[1].value = "Bjorn Ironside";
        }
    } else {
        if (secondBar.options[secondBar.selectedIndex].index === 0) {
            thirdBar.options[0].text = "Professor";
            thirdBar.options[0].value = "Professor";
            thirdBar.options[1].text = "Tokyo";
            thirdBar.options[1].value = "Tokyo";
        } else {
            thirdBar.options[0].text = "Danna Piper";
            thirdBar.options[0].value = "Danna Piper";
            thirdBar.options[1].text = "Itzan Esca";
            thirdBar.options[1].value = "Itzan Esca";
        }
    }
}


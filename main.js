
// Build buttons
assign_tasks()

function build_buttons(numberofTasks){
    let btns = []
    let i
    let btn
    for(i=0;i<numberofTasks;i++){
        btn = document.createElement("BUTTON") 
        btn.innerHTML = "Task "+(i+1)                  
        document.body.appendChild(btn)
        document.body.appendChild(document.createElement("br"))
        btns[i] = btn
    }
    return btns
}

function assign_tasks(){
    let btns = build_buttons(9);
    btns[0].addEventListener("click", function() {
        console.clear()
        part_one_exercise_one()
    });
    btns[1].addEventListener("click", function() {
        console.clear()
        part_one_exercise_two()
    });
    btns[2].addEventListener("click", function() {
        console.clear()
        part_one_exercise_three()
    });
    btns[3].addEventListener("click", function() {
        console.clear()
        conditions_exercise_one()
    });
    btns[4].addEventListener("click", function() {
        console.clear()
        conditions_exercise_two()
    });
    btns[5].addEventListener("click", function() {
        console.clear()
        conditions_exercise_three()
    });
    btns[6].addEventListener("click", function() {
        console.clear()
        conditions_exercise_four()
    });
    btns[7].addEventListener("click", function() {
        console.clear()
        conditions_exercise_six()
    });
    btns[8].addEventListener("click", function() {
        console.clear()
        conditions_exercise_seven()
    });

}

// Start of exercise one

function part_one_exercise_one(){
    const maxCapacity = 14
    let surfTime = true
    let bestStudent
    // const purposeInLife
    
    console.log(maxCapacity)
    console.log(surfTime)
    console.log(bestStudent)
    console.log("------")
    // console.log(purposeInLife)
}

// End of exercise two

// Start of exercise two
function part_one_exercise_two(){
    let cookies = "Cookies"
    let result = cookies + " is the best thing ever"
    console.log(result)
    console.log("------")
    // End of exercise two
    
    // Start of exercise three
    let password = "myPassword"
    let confirmPassword = "mypassword"
    if (password != confirmPassword) {
        console.log("The two passwords are different, please try again!")
    }
    else {
        console.log("The two passwords are identical");
    }
    console.log("------")
}

// End of exercise three

// Start of excersice four
function part_one_exercise_three(){
// finding the result of 423 X 12 statement
console.log("The result of 423 multiplied by 12 is: " + (423 * 12))
// finding the result of 802 / 2 statement
console.log("The result of 802 divided by 2 is: " + (802 / 2))
// finding the result of the sum of 5 and 6, multiplied by 3 statement
console.log("The result of the sum of 5 and 6, multiplied by 3 is: " + ((5 + 6) * 3))
console.log("------")
}
// End of exercise four

// start of exercise five
// false
// true
// true
// false
// true
// true
// false
// true
// false
// End of ercise five

// Start of exercise six
// a,b equals 0, and c equals 2
// End of ercise six

// exercise one in conditions
function conditions_exercise_one(){
    let numChildren = prompt("Please enter the number of children that you have")
    let isCareful = false
    let message = ""
    let intNumChildren = parseInt(numChildren, 10)
    if (Number.isNaN(intNumChildren)) {
        console.log("You should only enter integer values")
    }
    else {
        if (!isCareful) {
            intNumChildren = intNumChildren + 1
            message += "The man is not"
    
        } else {
            message += "The man is "
        }
        message += " careful, and he has " + intNumChildren + " children"
        console.log(message)
    }
}

// end of exercise one

// Exercise two
function conditions_exercise_two(){
    let silverwareCount = prompt("Please enter any integer")
    let message = ""
    if (Number.isNaN(silverwareCount)) {
        console.log("You should only enter integer values")
    }
    else {
        if ((silverwareCount%2) == 0) {
            message += "Number is even"
    
        } else {
            message += "Number is odd"
        }
        console.log(message)
    }
}


// Exercise three
function conditions_exercise_three(){
    let performance = "stellar"
    let salary = 10000
    const goodBonus = 1000
    const stellarBonus = 3000
    
    if (performance == "stellar") {
        salary+=3000
    } else {
        salary+=1000
    }
    console.log("New salary is: "+ salary)
}


// Exercise four
function conditions_exercise_four(){
    const isVIP = false
    let cash = 500
    
    if (isVIP || cash>300) {
        console.log("You can join the club")
    } else {
        console.log("You can't join the club")
    }
}


// exercise five
// a=3, b=15, c=12, d=160

// Exercise six
function conditions_exercise_six(){
    const gender = null
    let message = ""
    let profession = "business"
    if (gender!=null) {
        if (gender == "female") {
             message+="businesswoman"
        } else if(gender == "male"){
            message+="businessman"
        }
    } else {
        message+="businessperson"
    }
    console.log(message)
}


// Exercise seven
function conditions_exercise_seven(){
    let boughtTesla = true
    const yearOfTeslaPurchase = 2014
    let isUSCitizen = true
    let currentYear = 2018
    let message = ""
    
    if(boughtTesla && isUSCitizen){
        if(currentYear-yearOfTeslaPurchase >= 4){
            message = "Would you like to upgrade?"
        }else{
            message = "Are you satisfied with Tesla?"
        }
    
    }else if(boughtTesla){
        message = "Would you like to move to the U.S?"
    }else{
        message = "Do you want to buy Tesla?"
    }
    console.log(message)
}

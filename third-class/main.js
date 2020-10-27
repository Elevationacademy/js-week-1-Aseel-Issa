

const calcAge = function (currentYear, birthYear){
    return currentYear - birthYear
}

const task_1 = function (){
    const age = calcAge(2017, 1989)
    console.log(age)
}

const calcRangeOfAge = function (currentYear, birthYear){
    let largest  = currentYear - birthYear
    const range = {
        largest : largest,
        smallest: currentYear - birthYear -1
    }
    
    return range
}

const task_2 = function (){
    const ageRange = calcRangeOfAge(2017, 1989)
    console.log(`You are either ${ageRange.largest}, or ${ageRange.smallest} years old.`)
}

const isEven = function(number){
    return number%2==0? true : false
}

const task_3 = function (){
    let num = 50
    if(isEven(num)){
        console.log(`${num} is even`)
    }else{
        console.log(`${num} is odd`)
    }
}

const task_4 = function (){
    let numbers = [10, 36, 33, 78, 67, 49]
    for (const number of numbers) {
        if(!isEven(number)){
            console.log(number)
        }
        
    }
}

const checkExist = function(arrayOfNumbers, number) {
    for (const value of arrayOfNumbers) {
        if(value == number){
            return true
        }
    }
    return false

}

const task_5 = function(){
    let arrayOfNumbers = [1, 2, 3, 4, 5]
    let number = 6
    let str = `number ${number} `
    if(checkExist(arrayOfNumbers, number)){
        str+= 'exists'
    }else{
        str+= 'does not exist'
    }
    str+= `in the list of ${arrayOfNumbers}`
    console.log(str)
}

const task_6 = function(){
    let calculator = {
        add: function(x, y){ return x+y },
        subtract: function(x, y){ return x-y }
    }

    const result1 = calculator.add(20, 1)
    const result2 = calculator.subtract(30, 9)

    console.log(calculator.add(result1, result2))
}

const increaseByNameLength = function(money, name){
    return money + name.length
}

const makeRegal = function(name){
    return "His Royal Highness, "+name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

const task_7 = function(){
    turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
}

const splice = function(arr, index, numOfElements, ...numbers){
    let deleted = []
    // write your code here  
    if(numbers.length!=0){
        if(numOfElements!=0){
            // means we have to replace all the items from the specified index numOfElements times
            for(let i=index, j=0; j<numOfElements; i++, j++){
                 arr[i] = numbers[j] // if the number of arguments are larger than the specified numOfElements they will be ignored
                 // and if the arguments are less that the specified numOfElements there would be a problem
            }

        }else{
            for(let j=numbers.length-1; j>=0; j--){
                arr.unshift(numbers[j]) // adds the arrgument's numbers from the last to the first
            }
        }
    // there are no arguments specified (numbers) 
    }else{
        let newArr = []
        // whether there is a specified number of elements to be deleted or not, we save the numbers till index
        for(let i =0; i< index; i++){
            newArr.push(arr[i])
        }
        // number of deleted elements are specified
        if(numOfElements!=undefined){
            let j
            for(j=1, i =index; j<=numOfElements; j++, i++){
                deleted.push(arr[i])
            }
            for(i; i<arr.length; i++){
                newArr.push(arr[i])
            }
        }// delete till the end of the array
        else{
            for(let i=index; i<arr.length; i++){
                deleted.push(arr[i])
            }
        }
        // Assign the new array to the previous referance
      //  arr = newArr
      // couldn't reassign the array from within the function
        for(i=0; i<newArr.length; i++){
            arr[i] = newArr[i]
        }
        for(i; i<arr.length;){
            // pop() already reduces the arrays length
            arr.pop()
        }
    }

    return deleted
}

const task_8 = function(){

    // remove 1 element
    let arr = [1,2,3]
    splice(arr, 0,1); 
    console.log(arr); //should be [2,3]

    // add 1 element
    arr = [1,2,3]
    splice(arr, 0,0,0); 
    console.log(arr); //should be [0,1,2,3]


    // add 2 elements
    arr = [1,2,3]
    splice(arr,0,0,-1,0); 
    console.log(arr); //should be [-1,0,1,2,3]

    // replace 1 element
    arr = [1,2,3]
    splice(arr,1,1,55); 
    console.log(arr); //should be [1,55,3]

    // delete all elements from index to end
    arr = [1,2,3,4,5]
    splice(arr,1); 
    console.log(arr); //should be [1] 


    // returns array of deleted elements
    arr = [1,2,3]
    let deleted = splice(arr,1); 
    console.log(deleted); //should be [2,3] 


    // returns an array of the deleted element (1 element)
    arr = [1,2,3]
    deleted = splice(arr,1,1); 
    console.log(deleted); //should be [2] 


    // returns an empty array when no elements are deleted
    arr = [1,2,3]
    deleted = splice(arr,1,0,5); 
    console.log(deleted); //should be [] 
}
task_8()
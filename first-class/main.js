

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
    let btns = build_buttons(6);
    btns[0].addEventListener("click", function() {
        console.clear()
        task_1()
    });
    btns[1].addEventListener("click", function() {
        console.clear()
        task_2()
    });
    btns[2].addEventListener("click", function() {
        console.clear()
        task_3()
    });
    btns[3].addEventListener("click", function() {
        console.clear()
        task_4()
    });
    btns[4].addEventListener("click", function() {
        console.clear()
        task_5()
    });
    btns[5].addEventListener("click", function() {
        console.clear()
        task_6()
    });
}

function manipulate_genes(){
    // predefined genes list
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let newGenes = []
// The first two genes should be the same as those in genes
newGenes.push(genes[0], genes[1])
// Replace "RLF" with "CRYZ" and "CRYZ" with "RLF" (swap their places)
newGenes.push(genes[genes.length-1])
newGenes[4] = genes[2]
// Remove "AZIN2" from where it is, and insert two of these "AZIN2"s at the end of the strand
newGenes.splice(3,1)
newGenes.push(genes[3], genes[3])
//  add the gene "FXT" to the beginning of the strand
newGenes.unshift("FXT")

console.log(newGenes)
}

function task_1(){

    let firstPerson = {
        name: "Jill",
        age: 24,
        city: "Miamy"
    }

    let secondPerson = {
        name: "Robert",
        age: 30,
        city: "California"
    }

    if(firstPerson.age == secondPerson.age){
        if(firstPerson.city == secondPerson.city){
            console.log(firstPerson.name+" wanted to date "+ secondPerson.name)
        }else{
            console.log(firstPerson.name+" wanted to date "+ secondPerson.name+" but couldn't")
        }
    }else{
        console.log("The don't have the same age!")
    }
}

function task_2(){

    // define obejcts
    let firstPet = {
        type: "dog",
        color: "brown"
    }
    let secondPet = {
        type: "cat",
        color: "white"
    }

    console.log("Pets we have at home are:\n"+firstPet.type+"\n"+secondPet.type)

    // build an array of two pets
    let pets = [firstPet, secondPet]
    console.log("build an array of two pets")
    console.log(JSON.parse(JSON.stringify(pets)))

    // update firstPet to be chick instead of a dog
    pets[0].type = "chick"
    console.log("update firstPet to be chick instead of a dog")
    console.log(JSON.parse(JSON.stringify(pets)))

    // delete the last pet
    pets.splice(1,1)
    console.log("delete the last pet")
    console.log(JSON.parse(JSON.stringify(pets)))


}

function task_3(){
    // define obejcts
    let firstPet = {
        type: "dog",
        color: "brown"
    }
    let secondPet = {
        type: "cat",
        color: "white"
    }
    let thirdPet = {
        type: "chick",
        color: "yelloe"
    }
    let fourthPet = {
        type: "duck",
        color: "white"
    }

    console.log("Pets we have at home are:\n"+firstPet.type+"\n"+secondPet.type)

    // build an array of two pets
    let pets = [firstPet, secondPet]
    console.log("build an array of two pets")
    console.log(console.log(JSON.parse(JSON.stringify(pets))))

    // build another array of two pets
    let newPets = [thirdPet, fourthPet]
    console.log("build an array of two new pets")
    console.log(console.log(JSON.parse(JSON.stringify(newPets))))

    // add the newPets array to the pets array
    pets.push(...newPets)
    console.log("add the newPets array to the pets array")
    console.log(console.log(JSON.parse(JSON.stringify(pets))))

}

function task_4(){
    // define books
    let firstBook = {
        title: "This is book number one",
        author: "James"
    }
    let secondBook = {
        title: "This is book number two",
        author: "Natalie"
    }

    // add books to the library
    let library = {
        books: [firstBook, secondBook]
    }
    console.log(library.books)
}

function task_5(){
    const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true }
      }
      
      const name1 = prompt('Please enter the name for your reservation');
      let name = name1.toString().toLocaleLowerCase()
      let firstChar = name.charAt(0)
      name = name.replace(firstChar.toString(), firstChar.toString().toUpperCase())
      console.log(name)

      if(reservations[name]!= undefined){
          if(reservations[name].claimed){
              console.log("it seems that you have already claimed the reservation")
          }else{
            console.log("welcome to our hotel")
          }

      }else{
          console.log("your registration does not exist, we will add you to the registration list")
          reservations[name]= { claimed: true}
          console.log(reservations)
      }
}

function task_6(){
    const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // manipulate
    fridge: {
        price: 500,
        works: false, // manipulate
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

let item = kitchen.fridge.items[1]
if (kitchen.hasOven){
    if(kitchen.fridge.works){
        console.log(kitchen.owner+"'s "+item.name+" expired "+(date - item.expiryDate)+" day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.")
    }else{
        console.log(kitchen.owner+"'s "+item.name+" expired "+(date - item.expiryDate)+" day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay "+(kitchen.fridge.price/2)+" to fix the fridge.")
    }
}else{
    if(kitchen.fridge.works){
        console.log(kitchen.owner+"'s "+item.name+" expired "+(date - item.expiryDate)+" day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.")
    }else{
        console.log(kitchen.owner+"'s "+item.name+" expired "+(date - item.expiryDate)+" day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay "+(kitchen.fridge.price/2)+" to fix the fridge.")
    }
}
}
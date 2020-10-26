

task_11()

function task_1(){
    let names = ['Tom', 'Jerry']
    let ages = [25, 29]

    for(let i=0; i<names.length; i++){
        console.log(`${names[i]} is ${ages[i]} years old`);
    }
}

function task_2(){
    let numbers = [10, 56, 3, 8, 9]
    let sum = 0

    for(let number of numbers){
        sum+=number
    }

    console.log(`Sum is equal to ${sum}`)
}

function task_3(){
    let numbers = [10, 56, 3, 8, 9]
    let sum = 0

    for(let number of numbers){
        sum+=number
    }

    console.log(`Average is equal to ${sum/numbers.length}`)
}

function task_4(){
    let numbers = []
    let i=1
    while(i<=100){
        numbers.push(i)
        i++
    }
    console.log(numbers)
}

function task_5(){
    let numbers = []
    let i=1
    while(i<=100){
        numbers.push(i)
        if(i%2==1){
            console.log(i)
        }
        i++
    }
}

function task_6(){
    let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
    for(let i in nums){
        if(nums[i] == 709){
            console.log(i)
            break;
        }
    }
}

function task_7(){
    const names = ["Ashley", "Donovan", "Lucas"]
    const ages = [23, 47, 18]
    const people = []

    for(let i=0; i<names.length; i++){
        people[i] = {name: names[i], age: ages[i]}
    }
    console.log(people)
}

function task_8(){
    const names = ["Ashley", "Donovan", "Lucas"]
    const ages = [23, 47, 18]
    const people = []

    for(let i=0; i<names.length; i++){
        people[i] = {name: names[i], age: ages[i]}
    }

    for (const person of people) {
        console.log(`${person.name} is ${person.age} years old`)
    }
}

function task_9(){
    const posts = [
        {id: 1, text: "Love this product"},
        {id: 2, text: "This is the worst. DON'T BUY!"},
        {id: 3, text: "So glad I found this. Bought four already!"}
      ]

      for (let postIndex in posts) {
          if(posts[postIndex].id == 2){
              posts.splice(postIndex, 1)
          }
      }

      console.log(posts)
}

function task_10(){
    const posts = [
        {
          id: 1, 
          text: "Love this product",
          comments: []
        },
        { 
          id: 2, 
          text: "This is the worst. DON'T BUY!", 
          comments: [
                      {id: 1, text: "Idiot has no idea"}, 
                      {id: 2, text:"Fool!"}, 
                      {id: 3, text: "I agree!"}
                    ]
         },
         {
          id: 3, 
          text: "So glad I found this. Bought four already!",
          comments: []
         }
      ]

      for (const post of posts) {
          if(post.id == 2){
              for (let commentIndex in post.comments) {
                  if(post.comments[commentIndex].id == 3){
                      post.comments.splice(commentIndex, 1)
                      break
                  }
              }
          }
      }
      console.log(posts)
}

function task_11(){
    const dictionary = {
        "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
        "B": ["Banana", "Bonkers", "Brain", "Bump"],
        "C": ["Callous", "Chain", "Coil", "Czech"]
      }
    let letters =   Object.keys(dictionary)
    let Words
    for (const letter of letters) {
        console.log(`Words that begin with  ${letter}:`)
        words = dictionary[letter]
        for (const word of words) {
            console.log(word)
        }
    }
}
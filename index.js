`
▒█▀▀█ ░█▀▀█ ▒█▀▀▀█ ▀█▀ ▒█▀▀█ 
▒█▀▀▄ ▒█▄▄█  ▀▀▀▄▄  █  ▒█
▒█▄▄█ ▒█ ▒█ ▒█▄▄▄█ ▄█▄ ▒█▄▄█

`;


// 1. Prime numbers Step 1

function isPrime(n){
  if(n<=1){
    return false;
  }
  for(let i = 2; i<= n/2; i++){
    if(n % i == 0){
      return false;
    }
  } 
  return true;
}

// Prime numbers step 2: filtering the array

function filterPrime(arr){
  let n = arr.length;
  let newArr = [];
  for(let i = 0; i<n; i++){
    if(isPrime(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 2.Palindrome

function isPalindrome(str){
  let arr = [];
  for(let i = str.length - 1; i >= 0; i--){
    arr.push(str[i]);
  }
  let newStr = arr.join("");
  if(newStr == str){
    return true;
  }
  return false;
}

// 3.Array reversing

function arrayReverse(arr){
  return arr.reverse();
}

// 4.Array reversing 2

function customArrayReverse(arr){
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

// 5. Array and object

function arrayObject(arr){
  let females = [];
  let males = [];
  for(let i = 0; i<arr.length; i++){
    let newStr = arr[i].split(",");
    age = Number(newStr[1]);
    newStr[2] = newStr[2].replace(/ /g, "");
    let fname = newStr[0].split(" ")[0];
    let lname = newStr[0].split(" ")[1];
    if(newStr[2] == "male"){
      males.push({
        [fname]: [{
          "second-name": lname, "age": age
        }]
      });
    }
    else{
      females.push({
				[fname]: [
					{
						"second-name": lname,
						age: age,
					},
				],
			});
    }
  }
  let finalObject = {
    "females":females,
    "males": males
  };
  return finalObject;
}

console.log(arrayObject(["Patrick wyne, 30, male","lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male","Patrick wyne, 40,male"]));

`
▒█▀▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▄  █ ▒█▀▀█ 
 ▀▀▀▄▄ ▒█   █ ▒█▄▄▀   █    █  ▒█▒█ █ ▒█ ▄▄ 
▒█▄▄▄█ ▒█▄▄▄█ ▒█ ▒█   █   ▄█▄ ▒█  ▀█ ▒█▄▄█
`
// 1. Custom array sorting

function arraySorting(arr){
  for(let i = 0; i < arr.length - 2; i++){
    for(let m = i+1; m<arr.length -1; m++){
      if(arr[m] > arr[i]){
        let temporary = arr[m];
        arr[m] = arr[i];
        arr[i] = temporary;
      }
    }
  }
  let newArr = [];
  for(let n = 0;n<arr.length;n++){
    if(!isPrime(arr[n])){
      newArr.push(arr[n]);
    }
  }
  return newArr;
}

console.log(arraySorting([1,2,565,223,121,7,8,11,20]));
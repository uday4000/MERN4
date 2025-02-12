// let i=1;
// while(i<= 10){
//   console.log(i);
//   i++;
// }

// let i=1;
// while(i<= 10){
//   if(i % 2 == 0){
//     console.log('even');
//   }else{
//     console.log('odd');
//   }
  
//   i++;
// }

let age = Number (prompt('Enter your age'));
 
while(age < 18){
  age = Number (prompt('Your are too young ! Get older'));
}
if(age >= 18){
  alert('Welcome to our site');
}
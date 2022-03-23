//battle between obi wan and anakin. obi wan wins

let obiwanAttack = 35;
let anakinAttack = 25;
let anakinHealth = 100;
let anakinDefense = 0;

if(anakinAttack > obiwanAttack){
  console.log('anakin has the stronger attack');
}else if( obiwanAttack > anakinAttack){
  console.log('obi wan has the higher attack');
}else{
  console.log('the force is with them both')
}

if( anakinHealth <= 0){
  console.log('Anakin has fallen. #noLegs lol')
}else{
  anakinHealth -= obiwanAttack;
  console.log(`Anakin's health is now: ${anakinHealth} ` )
}


anakinDefense += 25;

if(anakinHealth <= obiwanAttack - anakinDefense){
  console.log("Anakin Has fallen. #oneMetalArm")
} else {
  anakinHealth -= obiwanAttack - anakinDefense;
  console.log(`Anakin's health is now ${anakinHealth}`);
}

console.log('Anakin takes a medpack.')

if(anakinHealth + 50 >= 100){
  anakinHealth =100;
  console.log(anakinHealth);
} else {
  anakinHealth += 50
  console.log(anakinHealth);
}

for(let i = 0; i < 5; i++){
  anakinHealth -= obiwanAttack - anakinDefense;
  console.log(`Anakin's health is now ${anakinHealth}`);
}

while(anakinHealth > 0){
   anakinHealth -= obiwanAttack - anakinDefense;
  console.log(`Anakin's health is now ${anakinHealth}`);
  if(anakinHealth <= 0){
    console.log('Anakin has fallen to the dark side. bye bye legs.')
  }
}
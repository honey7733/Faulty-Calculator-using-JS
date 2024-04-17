/*  CREATE A FAULTY CALCULATOR USING JAVASCRIPT
  THIS FAULTY CALCULATOR DOES FOLLOWING:
  (i) IT TAKES TWO NUMBERS AS INPUT FROM THE USER
  (ii) IT PERFORM WRONG OPERATION 
  +---->-
  *---->+
  - --->/
  /---->**

*/

let random=math.random()
let a= prompt("Enter first number")
let b=prompt("Enter second number")
let c=prompt("Enter operation")

let obj={
  "+":"-"
  "*":"+"
  "-":"/"
  "/":"**"
}

if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`)
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

else {
  // Perform wrong calculation
  c = obj[c]
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}
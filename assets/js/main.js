//Accordian js
// let accordionBtns=document.getElementsByClassName("accordion-btn")

// for (const btn of accordionBtns) {
//   btn.addEventListener('click',function () {
//     this.classList.toggle("active")
//     var body=this.nextElementSibling
//     if (body.style.display === "block") {
//       body.style.display = "none";
//     } else {
//       body.style.display = "block";
//     }
//   })
// }
//========================================================
//Array Sorting

let firstArr=[1,2,3,4,5]
let secondArr=[6,7,8,9,0,10,11]
let thirdArr=[20,21,22,23,24,25]
let forthArr=[15,16,17,18,19]
let fifthArr=[51,52,53,54,55,56]


function sortArrays(firstArr,secondArr,third,fourth,fifth) {
  let newArr=[]
  if (third==null && fourth==null && fifth==null) {
    newArr=[].concat(firstArr,secondArr).sort((x,y)=>x-y)
    return newArr
  }
  else if (third!=null && fourth==null && fifth==null) {
    newArr=[].concat(firstArr,secondArr,thirdArr).sort((x,y)=>x-y)
    return newArr
  }
  else if (third!=null && fourth!=null && fifth==null) {
    newArr=[].concat(firstArr,secondArr,thirdArr,fourth).sort((x,y)=>x-y)
    return newArr
  }
  else if (third!=null && fourth!=null && fifth!=null) {
    newArr=[].concat(firstArr,secondArr,thirdArr,fourth,fifth).sort((x,y)=>x-y)
    return newArr
  }
}

console.log(sortArrays(firstArr,secondArr,thirdArr,forthArr,fifthArr))
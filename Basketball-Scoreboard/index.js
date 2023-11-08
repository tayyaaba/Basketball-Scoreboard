
let resultId = document.getElementById("result-id") 

  

let increI = document.getElementById("home-score-btn-1") 

let count=12

function increaseHomeScoreOne(){   

    count =count+1  
    resultId.textContent= count 
  
}  

function increaseHomeScoreTwo(){ 

    count+=2 
    resultId.textContent= count 
}
 
function increaseHomeScoreThree(){ 

    count+=3 
    resultId.textContent= count 
}  

let guestId = document.getElementById("guest-id") 

let guestCount =5  

function increaseGuestScoreOne(){ 

    guestCount+=1 
    guestId.textContent = guestCount
}
 
function increaseGuestScoreTwo(){ 

    guestCount+=2 
    guestId.textContent = guestCount
} 

function increaseGuestScoreThree(){ 

    guestCount+=3 
    guestId.textContent = guestCount
}




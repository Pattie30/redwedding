// Create Two Functions -> addChild and redWedding

const addBtn = document.querySelector('#addchild')
const addBtn2 = document.querySelector('#redWedding')
const starks = document.querySelector('.starks')


const addChild = () => {
     let child = document.createElement('child')
     child.textContent =  'New Child';
    //child.classList.add(child)
     starks.appendChild(child);
     
return addChild
    }
   
   // 
const redWedding = () => {
    while(starks.firstElementChild){ 
        starks.firstElementChild.remove()
        
    }
    return redWedding
}

// Attach functions to buttons
addBtn.addEventListener('click',addChild)
addBtn2.addEventListener('click',redWedding)


   // The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)












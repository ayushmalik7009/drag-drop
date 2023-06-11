let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let btn = document.getElementById('btn');
let notification = document.getElementById('noti'); // Get the notification element
let leftBox = document.getElementById("left");
    


// iterates each element of list
for(let list of lists){
        list.addEventListener("dragstart",function(e){
            let selected = e.target;     //selected is the element which we start to drag from the leftbox lists

            rightBox.addEventListener("dragover",function(e){
                e.preventDefault();
            });

            rightBox.addEventListener("drop",function(e){
                rightBox.appendChild(selected);  //child is appended to the rightbox from leftbox
                selected = null;
                
                notification.style.display = "block";
                setTimeout(function(){
                  notification.style.display = "none";
                }, 2000); 
            })

            leftBox.addEventListener("dragover",function(e){
                e.preventDefault();
            });

            leftBox.addEventListener("drop",function(e){
        
                leftBox.appendChild(selected);  // it is used if we want to drag list from right to left box
                selected = null;
            })
        })
}

// click event listener on the button with id 'btn
btn.addEventListener('click', () => {
    
    let n = rightBox.childElementCount;
    for (let i = 0; i < n; i++) {
      let clonedNode = rightBox.children[i].cloneNode(true); //clone the rightbox node to the leftbox
      leftBox.appendChild(clonedNode);
    }
    function removeAllChildNodes(parent) {    //function to remove all nodes from rightbox it works until he got first child
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(rightBox);
    
  });


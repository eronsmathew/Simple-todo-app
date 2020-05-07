//This is the function that gets called when the add button is clicked
function addItem(){

    //getting the input and the Uls
    let input = document.getElementById("my-input");
    let ulItem = document.getElementById("list-items");

    if(input.value != ""){
      //let's create an element and add a value to it

      let newList = document.createElement("LI");
      newList.appendChild(document.createTextNode(input.value));

      //Adding the new lists to the UL
      ulItem.appendChild(newList); 
      
      //empty the input box
      input.value = "";

      //delete a list item on clicking it
      newList.onclick = function(){
          this.parentNode.removeChild(this);
      }
    }
    else{
        alert("Please add an element");
    }
}
var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit', addItem)
//delete Event
itemList.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup',filterItems)

//add item

function addItem(e)
{
    e.preventDefault()

    //get Input value
    var newItem = document.getElementById('item').value

    //create new li element

    var li = document.createElement('li')
    li.className = "list-group-item"

    //Add text node with input value

    li.appendChild(document.createTextNode(newItem))

    //create the delete button element

    var deleteBtn = document.createElement('button')

    //add classes to delete btn

    deleteBtn.className = "btn btn-danger btn-sm float-right delete"

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    //append btn to li
    li.appendChild(deleteBtn)

    //append li to itemList(ul)

    itemList.appendChild(li)

}

function removeItem(e)
{
   if(e.target.classList.contains('delete'))
   {
       if(confirm("Are You Sure Want To Delete This Item?"))
       {
           var li = e.target.parentElement//e.target will target to delete btn but we want to target li thats why use .parentElement
           itemList.removeChild(li)
       }
   }
}

function filterItems(e)
{
    // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

}
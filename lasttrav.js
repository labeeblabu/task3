

filter.addEventListener('keyup', filterItems);

function filterItems(e){
  
  var items = itemList.getElementsByTagName('li');
  
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

var ul = document.getElementById('list')
var li;


var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem) 

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

function addItem(){
    var input = document.getElementById('input')
    var item = input.value
    var textnode = document.createTextNode(item)
    
    if(item === ''){

        var ele = document.createElement('p')
        ele.textContent = 'Enter your ToDo !!'
        document.querySelector('div').appendChild(ele)
        setTimeout(()=>{
            ele.textContent=''
        },1500)
    }
    else{
        // create li 
        li = document.createElement('li')
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        //create label
        var label = document.createElement('label')
        //add these elements to webpage
        ul.appendChild(li)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)

        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(()=>{
            li.className = 'visual' 
        },3)

        input.value = '';
    }
}

function removeItem(){
    li = ul.children
    for(let index = 0; index<li.length; index++){

        while( li[index] && li[index].children[0].checked ){
            ul.removeChild(li[index])
        }
    }
}


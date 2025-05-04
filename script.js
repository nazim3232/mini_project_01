const inputBox = document.querySelector("#input-box");
const list_conatiner = document.querySelector("#list_conatiner");


function addTask()
{
    if(inputBox.value ==='')
    {
              alert("Enter a task.");
}
else
{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    list_conatiner.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);

}
inputBox.value = '';
save();

}

list_conatiner.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") { 
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN") { 
        e.target.parentElement.remove();
        save();
    }
}, false);


function save()
{
    localStorage.setItem("data", list_conatiner.innerHTML);
}

function showData()
{
    list_conatiner.innerHTML = localStorage.getItem("data");
}
showData();
let texts = [];
let textarea = document.querySelector('#textarea');
let btnnew = document.querySelector('#btnnew');
let ul = document.querySelector('#notes');
let lis = document.querySelectorAll('li');

for(let i = 0; i < lis.length; i++){
  lis[i].onclick = ()=>{
    textarea.value = lis[i].dataset.content;
    for(let j = 0; j<lis.length; j++){
      lis[j].classList.remove("blue");  
    }
    lis[i].className = "blue";  
  }
}

btnnew.addEventListener("click", ()=>{
  texts = textarea.value.split('\n');

  let li = document.createElement("li");
  li.textContent = `запись`; 
  li.dataset.content = texts;
  li.onclick = ()=>{
    textarea.value = li.dataset.content;
  }
  ul.appendChild(li);
});



let AddButton = document.getElementById('Add');
let Skillslist = document.getElementById('skillslist');
let Input = document.getElementById('inputskill');


AddButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('p-style');
    paragraph.innerText = Input.value;
    Skillslist.appendChild(paragraph);
    Input.value ="";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
})



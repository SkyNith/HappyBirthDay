let editMode = false;
let input = document.createElement('input');
input.type = 'text';
input.id = 'input';
input.style.display = 'none';

document.body.appendChild(input);

document.getElementById('btn').addEventListener('click', function () {
    editMode = !editMode;
    if (editMode) {
        input.style.display = 'block';
        input.value = document.getElementById('name').textContent;
        document.getElementById('name').contentEditable = 'none';
    } else {
        document.getElementById('name').textContent = input.value;
        input.style.display = 'none';
        document.getElementById('name').style.display = 'block';
    }
});
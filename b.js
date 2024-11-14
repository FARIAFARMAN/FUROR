const todolist = [];
function  toadd() {
    let tasks = document.getElementById('task');
    todolist.push(tasks.value);

    displayText();
    tasks.value = '';
    
}
function todel(){
    let tasks = document.getElementById('task')
    todolist.pop(tasks.value);
    displayText()
    tasks.value = '';
}
function displayText() {
    let content = '';
    for (let i = 0; i < todolist.length; i++) {
        content += `<p>${todolist[i]}</p>`;
    }
    document.getElementById('para').innerHTML = `${content}`;
}


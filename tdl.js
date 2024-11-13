const todolist=[];
function todo(){
    let tasks=document.getElementById('task')              
    todolist.push(tasks.value);
    console.log(todolist)
    tasks.value='';
}
function todel()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {
    let tasks=document.getElementById('task')
     todolist.pop(task.value);
    console.log(todolist)
    tasks.value='';
}
 
function displayText(){
    let content = '';
    for (let i = 0; i < todolist.length; i++){
        content += `<p>${todolist[i]}<p>`;
    }
    document.querySelector('.js-text').innerHTML = `${content}`;
}
// declaring variables
const task = document.querySelector('#task');
let task_value = task.value;
const tasks = document.querySelector('#tasks');
const add_task_btn = document.querySelector('#add_task');
const btn_del = document.querySelector('#delete_button');
const btn_done = document.querySelector('#done_button');
const add_sound = document.querySelector('#add');
const done_sound = document.querySelector('#done_sound');
const done_all_sound = document.querySelector('#done_all_sound');
const delete_sound = document.querySelector('#delete_sound');
const delete_all_sound = document.querySelector('#delete_all_sound');

// retrievedObjects from the localStorage
let tasks_retrievedObject = JSON.parse(localStorage.getItem('user'));
let done_retrievedObject = JSON.parse(localStorage.getItem('done'));

// objects
let list = {};
let done_list = {};

for(obj in tasks_retrievedObject) list[obj] = obj;
//functions

// delete item
function deletion(item){
    item.style.display = 'none';
    delete_sound.play();
}

function finished(item){
    item.style.textDecoration = 'line-through';
    done_list[item.innerText] = item.innerText;
    localStorage.setItem('done', JSON.stringify(done_list));
    done_sound.play();
}

// delete all items
function delete_all_f(){
    for (var member in list) delete list[member];
    localStorage.clear();
    tasks.innerHTML = '';
    delete_all_sound.play();
}
// finish all items
function finish_all_f(){
    for(something in list) done_list[something] = something;
    localStorage.setItem('done', JSON.stringify(done_list));
    tasks.style.textDecoration = 'line-through';
    done_all_sound.play();
}

function reset(){
    task.value = '';
    localStorage.setItem('user', JSON.stringify(list));
    add_sound.play();
}

// loop through the the retrieved object from the local storage
for (const key in tasks_retrievedObject)
{
    // get rid previous line-throughs
    tasks.style.textDecoration = 'none';
    let item = document.createElement('li');
    item.innerText = key;
    tasks.appendChild(item);

    // loop through the done_retrievedObject to see if any of the items were previously finished
    for (const second_key in done_retrievedObject)
    {
        if(item.innerText === second_key)
        {
            done_list[item.innerText] = item.innerText;
            localStorage.setItem('done',JSON.stringify(done_list));
            finished(item);
        }
    }
    
    // items can be lined through and deleted just like newly added item
    if(screen.width > 500)
    {
        item.onclick= ()=>
        {
            if(item.style.textDecoration == 'line-through')
            {
                delete done_list[item.innerText];
                delete list[item.innerText];
                localStorage.setItem('user',JSON.stringify(list));
                localStorage.setItem('done',JSON.stringify(done_list));
                deletion(item);
            }
            else
            {
                finished(item);   
            }
            item.onclick =()=>
            {
                delete done_list[item.innerText];
                delete tasks_retrievedObject[item.innerText];
                localStorage.setItem('user',JSON.stringify(tasks_retrievedObject));
                localStorage.setItem('done',JSON.stringify(done_list));
                deletion(item);
            }
        }
    }

    // adding functionalities for mobile
    else if(screen.width <= 500)
    {
        item.ontouchstart= ()=>
        {
            if(item.style.textDecoration == 'line-through')
            {
                delete done_list[item.innerText];
                delete list[item.innerText];
                localStorage.setItem('user',JSON.stringify(list));
                localStorage.setItem('done',JSON.stringify(done_list));
                deletion(item);
            }
            else
            {
                finished(item);
            }
            item.ontouchstart = ()=>
            {
                delete done_list[item.innerText];
                delete tasks_retrievedObject[item.innerText];
                localStorage.setItem('user',JSON.stringify(tasks_retrievedObject));
                localStorage.setItem('done',JSON.stringify(done_list));
                deletion(item);
            }
        }
    }
}



// add new tasks
if(screen.width > 500)
{
    add_task_btn.onclick = ()=>
    {
        task_value = task.value;
        // check to see if the user inputed anything
        // if they didnt alert them with a message
        if(task.value === '')
        {
            alert('please Enter A Task!');
        }
        // otherwise add that input to the list
        else
        {
            let item = document.createElement('li');
            item.innerText = task.value;
            tasks.appendChild(item);
            list[item.innerText] = item.innerText;
            reset();
            // click on item to line though it
            item.onclick= ()=>{
                finished(item);
                // click again for delete
                item.onclick =()=>{
                    delete list[item.innerText];
                    delete done_list[item.innerText];
                    localStorage.setItem('user',JSON.stringify(list));
                    localStorage.setItem('done',JSON.stringify(done_list));
                    deletion(item);
                }
            }
        }
    }
}

//same for mobile
else if(screen.width <= 500)
{
    
    add_task_btn.ontouchstart = ()=>
    {
        
        task_value = task.value;
        // check to see if the user inputed anything
        // if they didnt alert them with a message
        if(task.value === '')
        {
            alert('please Enter A Task!');
        }
        // otherwise add that input to the list
        else
        {
            let item = document.createElement('li');
            item.innerText = task.value;
            tasks.appendChild(item);
            list[item.innerText] = item.innerText;
            reset();
            item.ontouchstart= ()=>{
                finished(item);
                item.ontouchstart =()=>{
                    delete list[item.innerText];
                    delete done_list[item.innerText];
                    localStorage.setItem('user',JSON.stringify(list));
                    localStorage.setItem('done',JSON.stringify(done_list));
                    deletion(item);
                }
            }
            
        }
    }
}

// trigger function for clicking on delete all button
btn_del.onclick = ()=>
{
    delete_all_f();
}

// same for mobile
btn_del.ontouchstart = ()=>
{
    delete_all_f();
}

// trigger function for clicking on finish all button
btn_done.onclick = ()=>
{
    finish_all_f();
}

// same for mobile
btn_done.ontouchstart = ()=>
{
    finish_all_f();
}

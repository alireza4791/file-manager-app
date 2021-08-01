//main table rows
const names = document.querySelectorAll('#name');
const sizes = document.querySelectorAll('#size');
const modified = document.querySelectorAll('#modified');
const tip = document.querySelector('#tip');
//the name, size, modified date buttons
const name_button = document.querySelector('#item_name');
const size_button = document.querySelector('#item_size');
const date_button = document.querySelector('#item_date');
//up and down arrows indicating asc or desc
const up = document.querySelector('#up');
const down = document.querySelector('#down');
//arrays and objects for storing current or the sorted versions of name, size and modified date
let row_storage = {};
let size_array = [];
let modified_storage = [];
let ordered_names = [];
let ordered_sizeandtime_arrays = [];
//variable for displaying asc or desc format
let phases = 0;
//for indexing the arrays
let i = 0;

sizes.forEach(size=>{
    size_array.push(size.innerText);
});

modified.forEach(mod =>{
    modified_storage.push(mod.innerText);
});

name_button.onclick = () => {
    if(phases === 0)
    {
        //storing table data in the row storage obj
        names.forEach(name => {
            row_storage[name.innerText.toLowerCase()] = [size_array[i], modified_storage[i]];
            i++;
        });
        
        //sorting the row storage obj in asc order
        const ordered_storage = Object.keys(row_storage).sort().reduce(
            (obj, key) => { 
              obj[key] = row_storage[key]; 
              return obj;
            }, 
            {}
          );

        i = 0;
        
        //transfering data from row storage obj to name, size, modified date arrays
        for(key in ordered_storage) ordered_names[i++] = key;
        i = 0;
        for(key2 in ordered_storage) ordered_sizeandtime_arrays[i++] = ordered_storage[key2];
        i = 0;
        
        //displaying data from arrays
        names.forEach(name => {
            name.innerText = ordered_names[i++];
        });
        i = 0;
        sizes.forEach(size => {
            size.innerText = ordered_sizeandtime_arrays[i++][0];
        });
        i = 0;
        modified.forEach(mod => {
            mod.innerText = ordered_sizeandtime_arrays[i++][1];
        });

        //making the up icon visible
        up.style.visibility = 'visible';
    }
    else if (phases === 1){
        //reversing all the arrays from previous phase than displaying them
        i = 0;
        ordered_names = ordered_names.reverse();
        names.forEach(name => {
            name.innerText = ordered_names[i++];
        });

        ordered_sizeandtime_arrays = ordered_sizeandtime_arrays.reverse();
        i = 0;
        sizes.forEach(size => {
            size.innerText = ordered_sizeandtime_arrays[i++][0];
        });
        i = 0;
        modified.forEach(mod => {
            mod.innerText = ordered_sizeandtime_arrays[i++][1];
        });


        up.style.visibility = 'hidden';
        down.style.visibility = 'visible';
    }
    else if (phases === 2){
        //reload the page to display the data in it's original placement
        location.reload();
    }
    phases++;
};
name_button.onmouseover = () => {
    tip.style.visibility = 'visible';
};

console.log([{name: 'jack', age: 22}, {name: 'dan', age: 41}, {name: 'tom', age: 36}].sort((person1, person2)=>{
    const name1 = person1.age;
    const name2 = person2.age;

    if(name1 > name2){
        return 1;
    }
    else if(name2 > name1){
        return -1;
    }
    return 0;
}).reverse());
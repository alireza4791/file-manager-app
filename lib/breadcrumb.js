const BuildBreadCrumb = (pathname)=>{
    let PathElements = pathname.split('/');
    PathElements = PathElements.filter(element => element !== '');

    let itemString = '';
    let link = '';
    for(let i = 0; i < PathElements.length; i++){
        link +=  '/' + PathElements[i];
        if(i !== PathElements.length - 1){
            itemString += `<li class="breadcrumb-item"><a href="${link}">` + PathElements[i] + '</a></li>';
        }
        else{
            itemString += `<li class="breadcrumb-item active" aria-current="page">` + PathElements[i] + '</li>';
        }
        
    }

    return itemString;
};

module.exports = BuildBreadCrumb;
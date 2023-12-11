let alien={    //having an object inside a object
    name:'Ramya',
    tech:'JS',
    laptop:{
        cpu: 'i7',
        ram:4,
        brand:'Asus'
    }
}
for(let key in alien)
{
    if(key==='laptop')
    {
    console.log(key, alien[key]);
}
}


//console.log(alien.laptop.brand?.length);
//delete alien.laptop
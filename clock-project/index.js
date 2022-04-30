

let a; let date; let time;
const options = { weekday:'long', year: 'numeric', month: 'long', day: 'numeric'};
setInterval(() => {
    a = new Date();
    
    date = a.toLocaleDateString(undefined,options);
    
    time = a.getHours()+ ':' + a.getMinutes() + ':' + a.getSeconds();
    
    // time = a.getHours()%12+ ':' + a.getMinutes() + ':' + a.getSeconds();

    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

}, 1000);


/////////////////////////////

button.addEventListener('click', function(){
    alert('coming soon');
})

// window.onload = function(){document.getElementById('more').remove()};

// button.addEventListener('click', function(){
//     document.getElementById('more').add();
// })

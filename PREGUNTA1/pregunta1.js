document.getElementById('nombre').innerHTML = 'leonardo';  
document.getElementById('apellido').innerHTML = 'rios';   
document.getElementById('ano').innerHTML = "2000";
document.getElementById('edad').innerHTML = new Date().getFullYear() - parseInt(document.getElementById('ano').textContent) ;   
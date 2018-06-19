const start = document.getElementById('start');
const contenedor = document.getElementById('contenedor');

start.addEventListener('click', function(event){
  let evento = event.target;
  console.log(evento);
  galery();
});

function galery(){
  var num =1;

  let html = `<form>
  <input type="button" value=">>" id="adelante">
  <img src="foto1.jpg" width="100" heigth="150" id="foto">
  <input type="button" value="<<" id="atras">
  </form>`;
  contenedor.innerHTML = html;

  const btnadelante = document.getElementById('adelante');
  const btnatras = document.getElementById('atras');

btnadelante.addEventListener('click', function(){
  	num++;
  	if(num>3)
  		num=1;
  		var foto=document.getElementById("foto");
  		foto.src="foto" + num + ".jpg";
});

btnatras.addEventListener('click', function(){
  	num--;
  	if(num<1)
  		num=3;
  		var foto=document.getElementById("foto");
  		foto.src="foto" + num + ".jpg";
});

};

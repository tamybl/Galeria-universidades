const btn = document.getElementById("btn");
const container = document.getElementById("container");



document.addEventListener('DOMContentLoaded', listeners);

function listeners(){
  btn.addEventListener('click', galery); 
}

function galery(){ 
  
  var num =1;

  let html = `<div class="modal-container">
                <div class="st-card"> 
                  <div class="st-card-section">
                    <button id="cerrar" class="cerrar"></button>
                    <input type="button" value="<<" id="forward"> 
                    <img src="foto1.jpg" id="foto">
                    <input type="button" value="<<" id="back"> 
                  </div>
                </div>
              </div>`;
  container.innerHTML = html;
 
  let imagen = document.getElementById('foto');
  const btnForward = document.getElementById('forward');
  const btnBack = document.getElementById('back');
  const cerrar = document.getElementById('cerrar');
 
  btnForward.addEventListener('click', function(){
    	num++;
    	if(num>5)
    		num=1;
    		var foto=document.getElementById("foto");
    		foto.src="foto" + num + ".jpg";  
        imagen.parentElement.style.height = imagen.height + 'px';
        imagen.parentElement.style.width = imagen.width  + 'px';
  });

  btnBack.addEventListener('click', function(){
    	num--;
    	if(num<1)
    		num=5;
    		var foto=document.getElementById("foto");
    		foto.src="foto" + num + ".jpg";
        imagen.parentElement.style.height = imagen.height + 'px';
        imagen.parentElement.style.width = imagen.width  + 'px';
  });

  cerrar.addEventListener('click', function(){
       container.innerHTML = "";
  });
 
  imagen.parentElement.style.height = imagen.height + 'px';
  imagen.parentElement.style.width = imagen.width  + 'px';

  console.log(  imagen.height );
  console.log(  imagen.width  );
 
};
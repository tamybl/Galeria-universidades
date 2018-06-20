const btn = document.getElementById("btn");
const container = document.getElementById("container");



document.addEventListener('DOMContentLoaded', listeners);

function listeners(){
  btn.addEventListener('click', gallery); 
}

function gallery(){ 
  
  var num =1;

  let html = `<div class="modal-container">
                <div class="st-card"> 
                  <button id="cerrar" class="cerrar">x</button>
                  <div class="st-card-section">
                    <input type="button" value=">>" id="forward"> 
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
    	if(num>5) { num=1; };
    		imagen.src="foto" + num + ".jpg";  

        
  
  } );

  btnBack.addEventListener('click', function(){
    	num--;
    	if(num<1)
    		num=5;
    		foto.src="foto" + num + ".jpg";

  });

  cerrar.addEventListener('click', function(){
       container.innerHTML = "";
  });

};


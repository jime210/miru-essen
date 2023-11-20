let loadMoreBtn = document.querySelector('#load-more')
let currenItem = 4;

loadMoreBtn.onclick = () => {

    let boxes = [...document.querySelectorAll('.conteiner-box .box')];
    for(var i = currentItem; i< currenItem + 6; i++) {
        boxes[i].computedStyleMap.display ="none"
    }
}

//carrito
constcarrito = document.getElementById('carrito');
const elementos1 = document. getElementById('lista-1');
const lista = ducument.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = ducument.getElementByID('vaciar-carrito');

cargarEventListaners();

function cargarEventListaners() {
    elementos1.addEventListener('click', comprarElemento)
    vaciarCarritoBtn.addEventListener('click', vaciarCarritoBtn);

}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classlist.contains('agregar-carrito')){
        leerDatosElentos(elemento)
    }

}
function leerDatosElento(elemento){
    const infoElement ={
        imagen:elemento.querySelector(`img`).src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElement)
}


function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML=`
     <td>
     <img src="${elemnto.imagen}" width=100   />
     </td>

     <td>
     <img src="${elemnto.titulo}" width=100   />
     </td>

     <td>
     <img src="${elemnto.precio}" width=100   />
     </td>

     <td>

      <a heref="#" class="borrar" data-id=`(elemento.id0)` >x</a>

     </td>    
    
    `;
    listas.appendChild(row); 

}

function eliminarElemento(e) {
    e.preventaDefault();
    let elemento,
        elementoId;
    
    if(e.target.classlist.contains('borrar'));
    e.target.parentElement.parentElement.remove();
    elemento=e.target.parentElement.parentElement;
    elementoId= elemento.querySelector(`a`).getAttribute(`data-id`);

}

function vaciarCarrito() {
    while(lista.firtChild) {
        lista.removeChild(lista.firtChild);
    }
    return false
}
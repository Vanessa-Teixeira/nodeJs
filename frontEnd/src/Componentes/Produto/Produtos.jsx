import React from "react";
import {Carousel} from 'react-bootstrap'
import './produtos.css';




export default function ComponenteProdutos(props){

    return(

/*<div class="row"> 
<div class ="col-sm">
    <figure className={props.categoria  }>
    <img src={require(`./imagens/${props.imagem}`).default} alt="Imagem de Produtos" width="150" height="150" aling="center"/>  
        <p className="nome-prod">
            {props.descriçao}
        </p>
        <p className="preco-prod">
            R$ {props.preco}
        </p>
        <p className="precofinal-prod">
            R$ {props.precofinal}
        </p>
        <hr>
        </hr>
    </figure>
    </div>
    </div>

*/

<div class="container-floud">
<div class="col sm 2" >
        
        </div>
        <div class="col">
        <figure className={props.categoria  }>
    <img src={require(`./imagens/${props.imagem}`).default} alt="Imagem de Produtos" width="150" height="150" aling="center"/>  
        <p className="nome-prod">
            {props.descriçao}
        </p>
        <p className="preco-prod">
            R$ {props.preco}
        </p>
        <p className="precofinal-prod">
            R$ {props.precofinal}
        </p>
        <hr>
        </hr>
    </figure>
    </div>
        </div>
          




)}
@charset "UTF-8";

*{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

:root { 
    --cor0:white;
    --cor1:black;
    --cor2:#DA291C;
    --cor3:#b32218;
   
}

img[src*="https://www.000webhost.com/static/default.000webhost.com/images/powered-by-000webhost.png"] {
    display: none;
  }

body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #b32218;
    
 background:  linear-gradient(rgba(22, 22, 22, 0.164), rgba(20, 20, 20, 0.212)), url(../imagens/tv-box.png) ;
  background-position: center center;
  background-size: cover;
  background-position-y: 0px;
  background-repeat: no-repeat;
 
}
header {
    width: 100%;
    height: 2vh;
    padding-top: 44px;
    margin-bottom: 20px;
    
    
  }
.menu-content {
    text-transform: uppercase;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0 20px;
  }


.menu-content .menu-toggle {
    display: none;
}
.logo {
    font-size: 1.2rem;
    letter-spacing: 0.4rem;
    cursor: pointer;
    text-decoration: none; /* Remove o sublinhado */
    color: white; /* Mantém a cor padrão do texto */

}
.logo:hover {
    text-decoration: none; /* Remove o sublinhado ao passar o mouse */
    color: white; /* Mantém a cor padrão do texto */
}

.menu-content .list-itens {
    margin-right: 10px;
    display: flex;
    list-style: none;
    gap: 10px;
  }
  
  .menu-content .list-itens a {
    text-decoration: none;
    color: white;
    padding: 0.7rem;
    transform: 2ms ease-in;
    position: relative;
  }
  
  .menu-content .list-itens a:before {
    content: ' ';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 3px;
    background-color: var(--cor2);
    transition: all 1.5s ease; 
  }
  
  .menu-content .list-itens a:hover:before {
    width: 100%;
  }

  

  main {
   
    min-width: 300px;
    max-width: 1224px;
    margin: auto;
    margin-bottom: 30px;
    padding-top: 20px;
    position: relative;
    z-index: 1; /* Para garantir que a tabela fique acima da imagem de fundo */
}

#escuroA{
    background-color: var(--cor3);
    border-radius: 25px;
}

.table-container {
    position: relative;
    margin: auto;
    display: none; /* Inicialmente esconde a tabela */
    z-index: 1; /* Posiciona acima do plano de fundo */
}
table{
    background-color: var(--cor0);
    border-collapse: collapse;
    width: 100%;
    
}
thead{
    font-size: 1.3em;
}
.check{
    margin-left: 20px;
    
}
#check:hover{
    color: black;
}
th{
    font-size: 0,8em;
}
.tr1{
    background-color: rgb(207, 207, 207);
}
th,td {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
}

.h1corpo{
    color: white;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
}
#mescla {
    text-align: center;
    font-weight: bolder;
}

.center {
    margin: auto;
}

#center {
    vertical-align: middle;
    padding-left: 85px;
    font-size: 1.1em;
}

#center1 {
    text-align: center;
}

.plano {
    background-color: darkgray;
    color: black;
    vertical-align: middle;
    text-align: center;
    font-size: 1.1em;
}

.modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.9); 
}

.modal-imagem {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 920px;
}

.fechar {
    color: #aaa;
    float: right;
    font-size: 50px;
    font-weight: bold;
    position: absolute; /* Adicionando uma posição absoluta para controlar o posicionamento */
    top: 20px; /* Ajuste a distância do topo conforme necessário */
    right: 50px; /* Ajuste a distância da direita conforme necessário */
}

.fechar:hover,
.fechar:focus {
    color: rgb(156, 4, 4);
    text-decoration: none;
    cursor: pointer;
}
.combo{
    text-align: center;
    font-size: 1.2em;
}

.seta-esquerda, .seta-direita {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}

.seta-esquerda {
    left: 10px;
}

.seta-direita {
    right: 10px;
}

.hidden {
    display: none;
}


.buttonth {
    font-size: 1.2em;
    padding-left: 10px;
    padding-right: 10px;
    background-color: transparent; /* Define o fundo como transparente */
    cursor: pointer; /* Muda o cursor ao passar sobre o botão */
    outline: none; /* Remove o contorno ao focar no botão */
    
}
.buttonth {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.buttonth:hover {
    background-color: #0056b3;
}

#iconpdf{
    max-width:34px;
}

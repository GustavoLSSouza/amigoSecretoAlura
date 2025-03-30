//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo(){
    const inputTexto = document.getElementById("amigo");//aqui eu recebo o input
    const nomeAmigo = inputTexto.value.trim();// aqui eu removo os espaços extras
    const lista = document.getElementById("listaAmigos");
    if (nomeAmigo){
        const li = document.createElement("li");
        li.textContent = nomeAmigo;//essas duas linhas eu crio um elemento e defino ele como um nomeAmigo para poder ser inserido na lista 
        lista.appendChild(li);//inserido na lista 
        inputTexto.value = ""; //limpa o campo
    }else{
        alert("Erro!!!.Digite um nome válide")
    }
    
}

function sortearAmigo(){
    const lista = document.getElementById("listaAmigos");
    const itens = lista.getElementsByTagName("li"); // Obtém todos os itens da lista
    if (itens.length === 0) {
        document.getElementById("resultado").textContent = "Nenhum amigo na lista para sortear!";
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * itens.length);
    const amigoSorteado = itens[indiceAleatorio].textContent;
    document.getElementById("resultado").textContent = `O amigo sorteado é: ${amigoSorteado}`;
    lista.textContent = "";

}

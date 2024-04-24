// Função para ler o número da mesa a partir do QR Code
function lerNumeroMesa() {
    // Implementar a leitura do QR Code (ex: usando bibliotecas como QuaggaJS)
    // Atualizar a variável 'numeroMesa' com o valor lido do QR Code
    const numeroMesa = 10; // Exemplo: substitua por valor real
    document.getElementById('numeroMesa').textContent = numeroMesa;
  }
  
  // Função para enviar os dados do cliente para o servidor
  function enviarDadosCliente() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
  
    // Implementar a requisição AJAX para enviar os dados ao servidor
    // Ex: usando bibliotecas como jQuery ou Axios
  
    // Após o envio, redirecionar para a próxima tela (ex: tela de pedidos)
    window.location}

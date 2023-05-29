window.addEventListener('DOMContentLoaded', function() {
    // Captura o formulário
    const form = document.getElementById('calcGorjeta');
  
    // Adiciona um listener para o evento de submit do formulário
      form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Obtém o valor da conta
      let valorDaConta = parseFloat(document.getElementById('valorDaConta').value);
  
      // Obtém a qualidade do serviço selecionada
      const qualidadeDoServ = parseFloat(document.getElementById('qualidadeDoServ').value);
  
      // Calcula o valor da gorjeta
      let valorDaGorjeta = valorDaConta * qualidadeDoServ;
  
      // Calcula o valor total da conta
      let valorTotalDaConta = valorDaConta + valorDaGorjeta;
  
      // Exibe o resultado da gorjeta
      let gorjetaOutput = document.getElementsByClassName('outputStyle')[0];
      gorjetaOutput.textContent = valorDaGorjeta.toFixed(2);
  
      // Exibe o resultado do valor total da conta
      let valorTotalOutput = document.getElementsByClassName('outputStyle')[1];
      valorTotalOutput.textContent = valorTotalDaConta.toFixed(2);
    });
  });
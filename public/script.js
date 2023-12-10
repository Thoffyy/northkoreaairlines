function aprovador() {
    // Array de mensagens
    var mensagens = [
      'PERMISSÃO NEGADA, Seu HWID não está na WHITELIST. Você é realmente o líder?',
      'Você não tem permissão para acessar esta área. Verifique suas credenciais.',
      'Acesso restrito. Sua identificação não está autorizada.',
      'Desculpe, você não tem permissão para entrar. Verifique seu status de aprovação',
      'Voce so pode usar esta função sendo o Lider supremo Kim Jonh Un ',
      'Deus salve o Lider, mas voce nao pode usar esta função',
      'Voce nao pode fazer isso, voce e o lider supremo?'

    ];
  
    // Escolher uma mensagem aleatória
    var mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  
    // Exibir o alerta com a mensagem aleatória
    window.alert(mensagemAleatoria);
  }
  
  // Chame a função para testar

  
function enviarFormulario(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // captura os valores dos campos
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('subject').value;
    const mensagem = document.getElementById('message').value;

    // exibe uma mensagem de sucesso ou erro
    alert('Obrigado por entrar em contato! Seu e-mail foi enviado com sucesso.');

    // limpa o formulário
    document.getElementById('contactForm').reset();
}

function enviarFormulario(event) {
    event.preventDefault(); 

    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('subject').value.trim();
    const mensagem = document.getElementById('message').value.trim();

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return; 
    }
    alert('Obrigado por entrar em contato! Seu e-mail foi enviado com sucesso.');
    
    
    document.getElementById('contactForm').reset();
}

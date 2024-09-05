function enviarFormulario(event) {
    event.preventDefault(); 

    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('subject').value.trim();
    const mensagem = document.getElementById('message').value.trim();

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        mostrarMensagem('Por favor, preencha todos os campos antes de enviar.', 'error');
        return; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarMensagem('Por favor, insira um e-mail válido.', 'error');
        return;
    }

    mostrarMensagem('Obrigado por entrar em contato! Seu e-mail foi enviado com sucesso.', 'success');
    
    document.getElementById('contactForm').reset();
}

function mostrarMensagem(mensagem, tipo) {
    const mensagemElemento = document.getElementById('feedbackMessage');
    mensagemElemento.innerText = mensagem;
    mensagemElemento.className = `feedback-message ${tipo}`;
    mensagemElemento.style.display = 'block';
}

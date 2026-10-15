
const botaoWhatsApp = document.querySelector("#botao-whatsapp");

// Troque pelo número comercial verdadeiro.
// Formato: 55 + DDD + número, somente algarismos.
const numeroWhatsApp = "5598987513579";

const mensagem =
    "Olá! Gostaria de agendar um horário na Barbearia Estilo.";

if (botaoWhatsApp) {
    const numeroValido = /^55\d{10,11}$/.test(numeroWhatsApp);

    if (numeroValido) {
        const texto = encodeURIComponent(mensagem);

        botaoWhatsApp.href =
            `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    } else {
        botaoWhatsApp.addEventListener("click", function (evento) {
            evento.preventDefault();

            alert(
                "Configure o número do WhatsApp no arquivo script.js."
            );
        });
    }
}

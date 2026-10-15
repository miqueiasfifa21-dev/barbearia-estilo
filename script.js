
const formulario = document.querySelector("#form-agendamento");
const campoData = document.querySelector("#data");

// Mantenha aqui o número comercial que você já configurou.
// Use 55 + DDD + telefone, somente algarismos.
const numeroWhatsApp = "5598987513579";

// Impede que o client escolha uma data passada.
function obterDataLocal() {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const dia = String(agora.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

if (campoData) {
    campoData.min = obterDataLocal();
}

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const numeroValido = /^55\d{10,11}$/.test(numeroWhatsApp);

        if (!numeroValido) {
            alert("Configure o número do WhatsApp no arquivo script.js.");
            return;
        }

        const nome = document.querySelector("#nome").value.trim();
        const servico = document.querySelector("#servico").value;
        const data = campoData.value;
        const horario = document.querySelector("#horario").value;

        if (!nome || !servico || !data || !horario) {
            alert("Preencha todos os campos antes de continuar.");
            return;
        }

        // Converte AAAA-MM-DD para DD/MM/AAAA.
        const partesData = data.split("-");
        const dataFormatada =
            `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

        const mensagem =
            `Olá! Gostaria de solicitar um agendamento.\n\n` +
            `Nome: ${nome}\n` +
            `Serviço: ${servico}\n` +
            `Data desejada: ${dataFormatada}\n` +
            `Horário desejado: ${horario}\n\n` +
            `Aguardo a confirmação da barbearia!`;

        const textoCodificado = encodeURIComponent(mensagem);

        const linkWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

        window.location.href = linkWhatsApp;
    });
}

const dataInicio = new Date("2024-11-27T11:30:00");

function isAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function calcularDiasNoMes(ano, mes) {
    const diasPorMes = [31, isAnoBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return diasPorMes[mes];
}

function calcularTempo() {
    const agora = new Date();
    
    // Calcula anos completos
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    // Ajuste para segundos negativos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    // Ajuste para minutos negativos
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    // Ajuste para horas negativas
    if (horas < 0) {
        horas += 24;
        dias--;
    }

    // Ajuste para dias negativos (CORREÇÃO DO PROBLEMA DE RESET)
    if (dias < 0) {
        meses--;
        // Se o mês atual é janeiro, vamos para dezembro do ano anterior
        if (agora.getMonth() === 0) {
            dias += calcularDiasNoMes(agora.getFullYear() - 1, 11);
        } else {
            dias += calcularDiasNoMes(agora.getFullYear(), agora.getMonth() - 1);
        }
    }

    // Ajuste para meses negativos
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    // Garante que não temos valores negativos
    anos = Math.max(0, anos);
    meses = Math.max(0, meses);
    dias = Math.max(0, dias);
    horas = Math.max(0, horas);
    minutos = Math.max(0, minutos);
    segundos = Math.max(0, segundos);

    // Atualizando o conteúdo na página
    document.getElementById('anos').innerText = anos;
    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    // Atualiza a data completa
    document.getElementById('data-completa').innerText = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualizando a contagem de tempo a cada segundo
setInterval(calcularTempo, 1000);
calcularTempo(); // Inicializa o contador imediatamente

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("heart");
    coracao.innerText = "❤️";
  
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 20) + "px";
    coracao.style.animationDuration = (Math.random() * 2 + 3) + "s";
  
    document.getElementById("coracoes").appendChild(coracao);
  
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 300);

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function() {
            const menu = this.querySelector('.dropdown-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }
});

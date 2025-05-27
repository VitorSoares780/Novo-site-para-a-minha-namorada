const dataInicio = new Date("2024-11-28T11:30:00");

function isAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function calcularDiasNoMes(ano, mes) {
    const diasPorMes = [31, isAnoBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return diasPorMes[mes];
}

function calcularTempo() {
    const agora = new Date();
    
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    // Ajuste de meses e anos
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Ajuste de dias
    if (dias < 0) {
        meses--;
        let mesAnterior = agora.getMonth() - 1;
        let anoDoMesAnterior = agora.getFullYear();
        if (mesAnterior < 0) {
            mesAnterior = 11;
            anoDoMesAnterior--;
        }
        const diasMesAnterior = calcularDiasNoMes(anoDoMesAnterior, mesAnterior);
        dias += diasMesAnterior;
    }

    // Calculando a diferença de tempo em horas, minutos e segundos
    const tempoRestante = agora - dataInicio;
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    // Atualizando o conteúdo na página
    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

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
  document.querySelector('.dropdown').addEventListener('click', function() {
    const menu = this.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
   
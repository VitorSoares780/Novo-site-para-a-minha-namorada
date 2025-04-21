const dataInicio = new Date("2024-11-27T11:30:00");

function isAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function calcularDiasNoMes(ano, mes) {
    // Janeiro = 0, Fevereiro = 1, ..., Dezembro = 11
    const diasPorMes = [31, isAnoBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return diasPorMes[mes];
}

function calcularTempo() {
    const agora = new Date();
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    if (dias < 0) {
        meses--;
        // Agora queremos o mês anterior ao atual
        let mesAnterior = agora.getMonth() - 1;
        let anoDoMesAnterior = agora.getFullYear();
        if (mesAnterior < 0) {
            mesAnterior = 11;
            anoDoMesAnterior--;
        }
        const diasMesAnterior = calcularDiasNoMes(anoDoMesAnterior, mesAnterior);
        dias += diasMesAnterior;
    }

    const tempoRestante = agora - dataInicio;
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    const contador = document.getElementById('contador');
    contador.innerHTML = `Passaram ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos desde 27/11/2024`;
}

setInterval(calcularTempo, 1000);
calcularTempo();

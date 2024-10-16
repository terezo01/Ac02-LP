const candidato1 = [];
const candidato2 = [];
const brancos = [];
const nulos = [];

let totalVotos = 0;

function submitVote() {
    const num = parseInt(document.getElementById('num').value);

    if (num === 17) {
        candidato1.push(1);
    } else if (num === 22) {
        candidato2.push(1);
    } else if (num === 0) {
        brancos.push(1);
    } else if (num === -1) {
        aparecerResultados();
        return; 
    } else {
        nulos.push(1);
        return;
    }

    totalVotos += 1;

    document.getElementById('num').value = '';
}

function aparecerResultados() {
    document.getElementById('candidatos').innerHTML = `O candidato 1 teve ${candidato1.length} votos <br> O candidato 2 teve ${candidato2.length} votos`;
    document.getElementById('nulos').innerHTML = `Tiveram ${nulos.length} votos nulos`;
    document.getElementById('brancos').innerHTML = `Tiveram ${brancos.length} votos em branco`;
    
    const porcentagemCandidato1 = ((candidato1.length) / totalVotos) * 100;
    const porcentagemCandidato2 = ((candidato2.length) / totalVotos) * 100;
    
    document.getElementById('porcentagem').innerHTML = `O candidato 1 teve ${porcentagemCandidato1.toFixed(2)}% de votos <br> O candidato 2 teve ${porcentagemCandidato2.toFixed(2)}% de votos`;
    
    if (candidato1.length > candidato2.length) {
        document.getElementById('winnerName').innerHTML = `O candidato 1, com ${candidato1.length} votos, ganhou!!`;
    } else if (candidato2.length > candidato1.length) {
        document.getElementById('winnerName').innerHTML = `O candidato 2, com ${candidato2.length} votos, ganhou!!`;
    } else {
        document.getElementById('winnerName').innerHTML = `Houve um empate, ambos os candidatos tiveram ${candidato1.length} votos`;
    }
}

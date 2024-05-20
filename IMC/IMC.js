

const calcularH = document.getElementById('CalcularH');
const calcularM = document.getElementById('CalcularM');

function IMCH() {
    const pesoH = document.getElementById('pesoH').value;
    const alturaH = document.getElementById('alturaH').value;
    const respostaH = document.getElementById('RespostaH');

    if (pesoH != '' && alturaH != '') {
        const VIMCH = (pesoH / (alturaH * alturaH)).toFixed(2);
        let verificarH = null;
        if (VIMCH <= 18.5) {
            verificaRH = 'está abaixo do peso';
        } else if (VIMCH <= 25) {
            verificarH = 'está no peso ideal';
        } else if (VIMCH < 30) {
            verificaRH = 'está sobre peso';
        }else if(VIMCH <= 35){	
            verificarH = 'obesidade Grau I';
        }else if(VIMCH <= 40){
            verificarH = 'obesidade Grau II';
        }else{ 
            verificarH = 'obesidade Grau III';
        };
        respostaH.textContent = 'Seu IMC é: ' + VIMCH + ' e ' + verificarH;
    };
};




calcularH.addEventListener('click', IMCH);


function IMCM() {
    const pesoM = document.getElementById('pesoM').value;
    const alturaM = document.getElementById('alturaM').value;
    const respostaM = document.getElementById('RespostaM');

    if (pesoM != '' && alturaM != '') {
        const VIMCM = (pesoM / (alturaM * alturaM)).toFixed(2);
        let VerificarM = null;
        if(VIMCM < 18.5) {
            VerificarM = 'está abaixo do peso';
        }else if (VIMCM <= 25){
            VerificarM = 'está no peso ideal';
        }else if (VIMCM < 30){
            VerificarM = 'está sobre peso';
        }else if(VIMCM <= 35){	
            VerificarM = 'obesidade Grau I';
        }else if(VIMCM <= 40){
            VerificarM = 'obesidade Grau II';
        }else{ 
            VerificarM = 'obesidade Grau III';
        };
        respostaM.textContent = 'Seu IMC é: ' + VIMCM + ' e você ' + VerificarM;
    };
};

calcularM.addEventListener('click', IMCM);
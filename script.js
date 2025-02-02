const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if(!isNaN(bmi)){
    const value = document.getElementById('value');
    let description ='';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'Voçê esta abaixo do peso! ';
    } else if (bmi >= 18.5 && bmi <=25){
        description = ' Voçê está no peso ideal !';
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi > 25 && bmi <=30){
        description ='Cuidado, Voçê está com Sobrepeso !';
    }else if (bmi > 30 && bmi<=35 ){
        description = 'Cuidadoo, voçê esta com obesidade moderada !';
    } else if ( bmi > 35 && bmi <= 40){
        description = 'CUIDADO, Voçê está com Obesidade Severa ! ';
    } else {
        description = 'CUIDADOOO, Voçê está com obesidade Morbida !';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
}

});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
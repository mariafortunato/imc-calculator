function calcular(){
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var res = document.getElementById('res')
    if(altura.value.length == 0 || peso.value.length == 0){
        res.innerHTML = " Insira os números corretamente! "
    }else{
        var a = Number(altura.value)
        var p = Number(peso.value)
        var imc = p / (a * a)
        var imc = imc.toFixed(2)
        res.innerHTML = ''
        if(imc < 18.5){
            res.innerHTML = `Seu IMC é: <strong>${imc}</strong>.<br> Você está abaixo do peso.`
            res.style.background = 'red'
            res.style.color = 'white'
        } else if(imc <= 24.9){
            res.innerHTML = `Seu IMC é: <strong>${imc}</strong>.<br>Você está no seu peso normal.`
            res.style.background = 'lightblue'
            res.style.color = 'black'
        }else if(imc <= 29.9){
            res.innerHTML = `Seu IMC é: <strong>${imc}</strong>.<br>Você está com sobrepeso.`
            res.style.background = 'rgba(243, 243, 17, 0.918)'
            res.style.color = 'black'
        }else if(imc <= 34.9){
            res.innerHTML = `Seu IMC é: <strong>${imc}</strong>.
            <br>Você está com obesidade grau 1.`
            res.style.background = 'rgb(243, 145, 17)'
        }else if(imc <= 39.9){
            res.innerHTML = `Seu IMC é: <strong>${imc}</strong>.<br>Você está com obesidade grau 2.`
            res.style.background = "rgb(64, 0, 94)"
            res.style.color ='white'
        }else{
            res.innerHTML = `Seu IMC é: <strong>${imc}</strong>.<br>Você está com obesidade grau 3.`
            res.style.background = 'red'
            res.style.color = 'white'
        }
    }
}
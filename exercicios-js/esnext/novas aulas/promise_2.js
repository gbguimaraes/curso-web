// setTimeout(function() {
//     console.log('Executando callback...')

//     setTimeout(function() {
//         console.log('Executando callback...')

//         setTimeout(function() {
//             console.log('Executando callback...')
//         },2000)
//     },2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando Promise...")
            resolve() //ao chamar o resolve, o then vai ser chamado
        }, tempo)
    })
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
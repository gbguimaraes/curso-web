/************************************************************************************
 *                                    PASSO 1                                       *
 ************************************************************************************/

const EXPLORADOR = 'Guilherme'

let bolsaDeItens = [];

let moedas = 0;

let energia = 5;

let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda']


/************************************************************************************
 *                                    PASSO 2                                       *
 ************************************************************************************/

function taverna() {
    console.log(`O explorador ${EXPLORADOR} entrou na Taverna.`);

    if (energia < 5){
        
        for (energia = 0; energia < 5; energia++){
            console.log(`O explorador ${EXPLORADOR} está descansando.`);
        }  

        return console.log(`O explorador ${EXPLORADOR} está revitalizado.`)
    }  
}


/************************************************************************************
 *                                    PASSO 3                                       *
 ************************************************************************************/

function pegarItem(item) {

    if(item === 'Moeda'){
        console.log(`O explorador ${EXPLORADOR} ganhou uma moeda.`)
        return moedas = moedas + 1
    } else {
        console.log(`O explorador ${EXPLORADOR} ganhou um item.`)
        return bolsaDeItens.push(item);
    }
}


/************************************************************************************
 *                                    PASSO 4                                       *
 ************************************************************************************/

function batalha() {
    console.log(`O explorador ${EXPLORADOR} encontrou um monstro.`)

    if(energia < 1){
        console.log(`O explorador ${EXPLORADOR} fugiu para a Taverna.`)
        return false;
    } else {
        console.log(`O explorador ${EXPLORADOR} derrotou o monstro.`)
        energia = energia - 1;
        if (energia === 0){
            console.log(`O explorador ${EXPLORADOR} fugiu para a Taverna.`)
            batalha();
            return false;
        }

        return true;  
        
    } 
}

function explorar() {
    console.log(`O explorador ${EXPLORADOR} saiu para explorar.`)

    if(energia < 1) {
        console.log(`O explorador ${EXPLORADOR} não pode explorar.`)
        taverna();
        return false;
    } else {
        if(batalha() === true) {
            roletarRecompensas()
            return true;
        } else {
            taverna()
            return false;
        }
    } 
}


/************************************************************************************
 *                                    PASSO 5                                       *
 ************************************************************************************/

function abrirBau() {

    if(bolsaDeItens.includes("Chave")) {
        console.log("Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!");
        return true
    } else {
        return false
    }
}

 
/************************************************************************************
 *                        NÃO APAGUE OU MEXA NO CÓDIGO ABAIXO                       *
 ************************************************************************************/

let properties = {}
let actions = {}

const roletarRecompensas = function() {
  let random = Math.floor(Math.floor(Math.random() * recompensas.length));
  let loot  = recompensas[random];

  pegarItem(loot);
  recompensas.slice(random, 1);
}

if (typeof EXPLORADOR !== 'undefined')          {properties.EXPLORADOR = EXPLORADOR}
if (typeof bolsaDeItens !== 'undefined')        {properties.bolsaDeItens = bolsaDeItens}
if (typeof moedas !== 'undefined')              {properties.moedas = moedas}
if (typeof energia !== 'undefined')             {properties.energia = energia}
if (typeof recompensas !== 'undefined')         {properties.recompensas = recompensas}
if (typeof taverna !== 'undefined')             {actions.taverna = taverna}
if (typeof roletarRecompensas !== 'undefined')  {actions.roletarRecompensas = roletarRecompensas}
if (typeof pegarItem !== 'undefined')           {actions.pegarItem = pegarItem}
if (typeof batalha !== 'undefined')             {actions.batalha = batalha}
if (typeof explorar !== 'undefined')            {actions.explorar = explorar}
if (typeof abrirBau !== 'undefined')            {actions.abrirBau = abrirBau}

module.exports.properties = properties;
module.exports.actions = actions
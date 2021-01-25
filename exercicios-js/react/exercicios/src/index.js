import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


// ReactDOM.render(<Primeiro></Primeiro>, document.getElementById('root'))
// ReactDOM.render(<BomDia nome="Guilherme"></BomDia>, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana"></BoaTarde>
//         <BoaNoite nome="Bia"></BoaNoite>
//     </div>
// , document.getElementById('root'))


// $('<h1>').html('React 2')


// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João"></Saudacao>
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" sobrenome="Silva"></Filho> 
            <Filho nome="Paulo" sobrenome="Silva"></Filho>
            <Filho nome="Carla" sobrenome="Silva"></Filho>
        </Pai>
    </div>
, document.getElementById('root'))
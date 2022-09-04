import './main.scss'

import { btnClickCounter } from "./components/buttonClick";

document.querySelector('#app').innerHTML = `
    <div class="test">
        <h2>ESTO ES UNA PRUEBA</h2>
        <h3> prueba </h3>
        <button id="btnClick"></button>
    </div>
`
btnClickCounter(document.querySelector('#btnClick'))


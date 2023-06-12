import { useState } from "react"
import Styles from './formulario.modules.css'

const Formulario = () => {

    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    const imcCalc = () => {
        const resultado = peso / (altura*altura);

        if (resultado <=18.5) {
            return (
                <>
                    <p>O seu IMC é <span><b>{resultado.toFixed(2)}</b></span></p>
                    <b>MAGREZA</b>
                </>
            )
        } if (resultado >18.5 && resultado < 25) {
            return (
                <>
                    <p>O seu IMC é <span><b>{resultado.toFixed(2)}</b></span></p>
                    <b>NORMAL</b>
                </>
            ) 
        } if (resultado >=25 && resultado < 30) {
            return (
                <>
                    <p>O seu IMC é <span><b>{resultado.toFixed(2)}</b></span></p>
                    <b>SOBREPESO</b>
                </>
            )
        } if (resultado >=30 && resultado < 40) {
            return (
                <>
                    <p>O seu IMC é <span><b>{resultado.toFixed(2)}</b></span></p>
                    <b>OBESIDADE</b>
                </>
            )
        } if (resultado >=40 ) {
            return (
                <>
                    <p>O seu IMC é {resultado.toFixed(2)}</p>
                    <b>OBESIDADE GRAVE</b>
                </>
            ) 
        } else {
            return (
                <>
                    <p>Vamos calcular o seu IMC! Complete os campos acima </p>
                </>
            )
        }
    }

    return (
        <div className="conatiner">
            <h1>Calculadora IMC</h1>
            <form>
                <input type="number" placeholder="Quanto você pesa?" onChange={({target})=> setPeso(parseFloat(target.value))} />
                <input type="number" placeholder="Qual é a sua altura?" onChange={({target}) => setAltura(parseFloat(target.value))} />
            </form>
            {imcCalc()}
            <p>VEJA A INTERPRETAÇÃO DO IMC</p>
            <table>
                <tbody>
                    <tr>
                        <th>IMC</th>
                        <th>Classicação</th>
                    </tr>
                    <tr>
                        <td>MENOR QUE 18,5</td>
                        <td>MAGREZA</td>
                    </tr>
                    <tr>
                        <td>ENTRE 18,5 E 24,9</td>
                        <td>NORMAL</td>
                    </tr>
                    <tr>
                        <td>ENTRE 25,0 E 29,9</td>
                        <td>SOBREPESO</td>
                    </tr>
                    <tr>
                        <td>ENTRE 30,0 E 39,9</td>
                        <td>OBESIDADE</td>
                    </tr>
                    <tr>
                        <td>MAIOR QUE 40,0</td>
                        <td>OBESIDADE GRAVE</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Formulario
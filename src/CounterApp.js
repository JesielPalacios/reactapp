import React, {useState} from 'react'

export const CounterApp = () => {

    // El Hook permite manejar cualquier cantidad de estados que se quieran en el componente.

    // useState permite definir una "variable", la cual en realidad es un estado, donde se crea una constante "counter" y una función "setCounter" para cambair esa constante.
    const [counter, setCounter] = useState(10);

    const handleAdd = () => {
        setCounter( counter + 1 );
    }
    
    return (
        <div className="container mt-5">
            <h1>Counter en React</h1>
            <p>Valor: { counter }</p>
            <button
                className="btn btn-primary"
                onClick={handleAdd}
            >
                +1
            </button>
        </div>
    )
}

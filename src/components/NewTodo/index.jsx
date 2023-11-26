import { useState } from "react";
import PropTypes from 'prop-types';
import  "../NewTodo/style.css"

function NewTodo({ onNewTodo }) {
    const [value, setValue] = useState('');

    const ENTER_KEY = 13;
    const ESC_KEY = 27;

    
  const erase = () => {
    setValue('')
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const submit = () => {
    if (onNewTodo) {
        onNewTodo(value);
        erase();
    }
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      console.log("Pressionado")
      submit()
    }else if (event.which === ESC_KEY) {
      erase();
    }
  }
  return (
    <>
    <input type="text" className='new-todo' placeholder='Tarefa a fazer'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
    </>
  )
}

//Tudo que voce coloca dentro dessa chave aqui vira validaçao desse newtodo acima
NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo

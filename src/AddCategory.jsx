import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 2) return alert('Debe ingresar una categoría válida');

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={ onSubmit } >
            <input
                type="text"
                placeholder="Ingresa una categoría"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>


    )
}

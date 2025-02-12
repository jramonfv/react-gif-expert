import {useState} from "react";

const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputValue = ({target}) => {
      setInputValue(target.value, ...inputValue);

  }

  const onSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length <= 1) return;
      
      onNewCategory(inputValue.trim());
      setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value = {inputValue}
        onChange={ onInputValue }
      />
    </form>
  )
}

export default AddCategory

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  /* Desestructurando target del evento */
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    /* setCategories((categories) => [inputValue, ...categories]); */
    onNewCategory(inputValue.trim());

    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        {" "}
        {/* (event) => onSubmit(event) */}
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

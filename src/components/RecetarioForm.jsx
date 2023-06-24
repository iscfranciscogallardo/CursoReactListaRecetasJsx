import { useEffect, useState } from "react";

const RecetarioForm = ({ onSubmit }) => {

    const [listadoIngredientes, setIngrediente] = useState([]);
    const [listIngredientsCount, setListIngredients] = useState(listadoIngredientes.length);

    const submit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const nombre = form['nombre'].value;
        const ingredientes = [...listadoIngredientes];//form[1].value;
        const tiempo = form['tiempo'].value;
        const imagen = URL.createObjectURL(form['imagen'].files[0]);
        
        const receta = {nombre, ingredientes, tiempo, imagen};
        listadoIngredientes.length = 0;
        onSubmit(receta);
        form.reset();
    }

    const addIngredient=()=>{
      setIngrediente(()=>[...listadoIngredientes, document.getElementById('ingredient').value]);
      document.getElementById('ingredient').value ='';
      document.getElementById('ingredient').focus();
      ;
    };

    const removeStorage=(event)=>{
      localStorage.removeItem("listado");
    };

    useEffect(()=>{setListIngredients(document.getElementById('listingredient').innerHTML = listadoIngredientes.join(','))});

    return (
      <form onSubmit={submit}>
        <label>Nombre de la Receta</label>
        <input type="text" placeholder="Nombre" id="nombre" /><br/>
        <label>Listado de Ingredientes:</label>
        <input type="text" placeholder="Ingrendiente" id="ingredient" />
        <button type="button" onClick={addIngredient}>Agregar Ingrediente</button>
        <label id="listingredient" /><br/>
        <label>Tiempo de preparación:</label>
        <input type="text" placeholder="Tiempo" id="tiempo" /><br/>
        <label>Imagen:</label>
        <input type="file" placeholder="Imagen" id="imagen" /><br/>
        <button type="submit">Agregar</button>
        <button type="button" onClick={removeStorage}>Eliminar Storage</button>
      </form>
    );
}



export default RecetarioForm;
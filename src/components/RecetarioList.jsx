import { useState } from "react";
import RecetaItem from "./RecetaItem";
import RecetarioForm from "./RecetarioForm";

const RecetarioList=()=>{

    const listStorage = localStorage.getItem("listado");

    const [listadoRecetas, setReceta] = useState(()=>{
        if(listStorage!=undefined)
            return JSON.parse(listStorage)
        else
            return [];
    });

    const addReceta = (receta) => {
        setReceta(()=>[...listadoRecetas, receta]);
        localStorage.setItem("listado", JSON.stringify([...listadoRecetas, receta]));
    };



    return  <>
            <h1>Mi Lista de recetas:</h1>
            <RecetarioForm onSubmit={addReceta}></RecetarioForm>
            <ul className={"list-inside"}>
                {listadoRecetas.map((receta) => (
                <li >
                    <RecetaItem receta={receta} />
                </li>
                ))}
            </ul>
        </>
};

export default RecetarioList;
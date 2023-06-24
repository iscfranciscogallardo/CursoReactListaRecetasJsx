const RecetaItem=({receta})=>{
    const {nombre, ingredientes, tiempo, imagen} = receta;

    return (
        <div>
            <div>
                <h1>Receta: {nombre}</h1>
            </div>
            <div>
                <h2>Ingredientes: {ingredientes.join(',')}</h2>
            </div>
            <div>
                <h2>Tiempo de preparación:{tiempo}</h2>
            </div>
            <div>
                <img src={imagen} className={"max-w-none"}/>
            </div>
        </div>
    );
};

export default RecetaItem;

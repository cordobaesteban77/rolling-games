import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
import "../styles/Gamestable.css";

const Gamestable = ({ products, borrarProducto, onEdit,destacado, setDestacado }) => {

const guardarDestacado = (game) => {
  setDestacado(game);
 localStorage.setItem("destacado", JSON.stringify(game));
}

  return (
    <div>
        <div className="table-container">
      <table className="table-wrapper">
        <thead>
          <tr>
            <th className="p-2 border">Código</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Categoría</th>
            <th className="p-2 border">Descripcion</th>
            <th className="p-2 border">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((game, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 border">{game.codigo}</td>
              <td className="p-2 border">{game.nombre}</td>
              <td className="p-2 border">{game.categoria}</td>
              <td className="p-2 border">{game.descripcion}</td>
              <td className="p-2 border">
                <div className="d-flex gap-2">
                  <button className="btn btn-dark" onClick={() => borrarProducto(game)} title="Eliminar">
                    <FaTrash className="boton-eliminar" />
                  </button>
                  <button className="btn btn-dark" onClick={() => onEdit(game)} title="Editar">
                    <FaEdit  className="boton-editar"/>
                  </button>
                  <button className="btn btn-dark"
                   title="Destacar"
                  onClick={() => guardarDestacado (game)}>
                  <FaStar color={destacado === game ? "gold" : "white"} />
                  </button>  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
  );
};

export default Gamestable;



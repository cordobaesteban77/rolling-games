import React, { useEffect, useState } from "react";
import Gamestable from "../components/Gamestable";
import { getGames } from "../data/api.js";
import Swal from "sweetalert2";
import ModalUpdateApp from "../components/ModalUpdateApp";

const AdminScreen = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [juegoAEditar, setJuego] = useState(null);
  const [destacado, setDestacado] = useState(null);

  useEffect(() => {
    setProductos(JSON.parse(localStorage.getItem("games")) || []);
  }, [])
  
  const fetchData = async () => {
      const respuesta = await getGames();
      const resultados = respuesta.results.map((game) => ({
        id: game.id,
        codigo: game.id,
        nombre: game.name,
        categoria: game.genres?.[0]?.name || "Sin categoría",
        descripcion: game.platforms?.[0]?.platform?.name || "Sin plataforma",
      }));
      console.log(resultados);
      setProductos(resultados);
      localStorage.setItem("games", JSON.stringify(resultados));
    };


  const deleteProduct = (game) => {
    const nuevosJuegos = productos.filter((p) => p.id !== game.id);
  
    Swal.fire({
      title: `¿Deseas eliminar el juego: ${game.nombre}?`,
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setProductos(nuevosJuegos);
        localStorage.setItem("games", JSON.stringify(nuevosJuegos));
  
        Swal.fire({
          icon: "success",
          title: "Juego eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  

  const updateProduct = (id, datosActualizados) => {
    const index = productos.findIndex((p) => p.id === id);
    const nuevos = [...productos];
    nuevos[index] = { ...nuevos[index], ...datosActualizados };
    setProductos(nuevos);
    localStorage.setItem("games", JSON.stringify(nuevos));
  };



  const handleEditarJuego = (juego) => {
    setJuego(juego);
    setShowModal(true); // abrir modal, osea quiero mostar el modal
  };
  

  return (
    <div>
      <h1 className="fs-3 fw-bold text-center p-4">Administración de productos 🎮</h1>
      {
        productos.length===0 &&(
          <button onClick={fetchData} className="btn btn-outline">Cargar por unica vez</button>

        )
      }
      
      {
        productos.length>0 && (
          <Gamestable
        products={productos}
        borrarProducto={deleteProduct}
        updateProduct={updateProduct}
        onEdit={handleEditarJuego}
        destacado={destacado}
        setDestacado={setDestacado}
      />

        )
      }
      
      <ModalUpdateApp
        show={showModal}
        handleClose={() => setShowModal(false)}
        juego={juegoAEditar}
        updateProduct={updateProduct}

      />
    </div>
  );
};

export default AdminScreen;


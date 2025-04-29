import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const ModalUpdateApp = ({ show, handleClose, juego, updateProduct }) => {
  const { register, handleSubmit, reset } = useForm();

  const Actualizarjuegos = (juegos) => {
    const datosActualizados = {
      nombre: juegos.title,
      categoria: juegos.category,
      descripcion: juegos.description,
    };
    updateProduct(juego.id, datosActualizados);
    handleClose();
  };

  useEffect(() => {
    if (juego) {
      reset({
        title: juego.nombre || "",
        category: juego.categoria || "",
        description: juego.descripcion || "",
      });
    }
  }, [juego, reset]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Juegos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(Actualizarjuegos)}>
          <div className="mb-4">
            <label className="form-label fw-bold">Nombre del Producto</label>
            <input
              type="text"
              className="form-control form-control-lg"
              {...register("title", { required: true })}
              placeholder="Ej: Grand Theft Auto V"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Categoría</label>
            <select
              className="form-select"
              {...register("category", { required: true })}
            >
              <option>Action</option>
              <option>Shooter</option>
              <option>RPG</option>
              <option>Deportes</option>
              <option>Otros</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Descripción</label>
            <textarea
              className="form-control"
              {...register("description", { required: true })}
              rows="4"
              placeholder="Describe detalladamente el producto..."
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-lg btn-primary">
              <i className="bi bi-save me-2"></i>Actualizar
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUpdateApp;




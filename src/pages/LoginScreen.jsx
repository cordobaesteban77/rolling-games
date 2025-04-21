import React from 'react'
import {useForm} from "react-hook-form"

const LoginScreen = () => {
  const {register, handleSubmit} = useForm()
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="login-container p-5">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3">Bienvenido de nuevo</h2>
              <p className="text-muted">Inicia sesión para continuar</p>
            </div>
            <form>
              <div className="mb-4 position-relative">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control form-control-lg ps-4"
                  {...register("correo")}
                  placeholder="nombre@ejemplo.com"
                  required
                />
                <i className="bi bi-envelope-fill input-icon"></i>
              </div>
              <div className="mb-4 position-relative">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control form-control-lg ps-4"
                  {...register("password")}
                  placeholder="••••••••"
                  required
                />
                <i className="bi bi-lock-fill input-icon"></i>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <a href="#" className="text-decoration-none text-purple">¿Olvidaste tu contraseña?</a>
              </div>
              <button type="submit" className="btn btn-custom btn-lg w-100 mb-3">
                Iniciar sesión
              </button>
              <div className="text-center mt-4">
                <span className="text-muted">¿No tienes cuenta? </span>
                <a href="#" className="text-decoration-none text-purple fw-bold">Regístrate</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
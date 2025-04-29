import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RegisterScreen = () => {
  const MySwal = withReactContent(Swal)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    const existe = usuarios.find((user) => user.email === data.email)

    if (existe) {
      MySwal.fire({
        title: "¡Error!",
        text: "El correo ya está registrado.",
        icon: "error"
      })
      return
    }

    usuarios.push({
      username: data.username,
      email: data.email,
      password: data.password
    })

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    MySwal.fire({
      title: "¡Registro exitoso!",
      text: "Ahora puedes iniciar sesión.",
      icon: "success"
    }).then(() => {
      navigate("/") // o cambia la ruta según la de tu LoginScreen
    })
  }

  return (
    <div className="container bg-dark">
      <div className="row justify-content-center pt-5">
        <div className="col-md-8 col-lg-6">
          <div className="login-container p-5">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3 text-light">Crear una cuenta</h2>
              <p className="text-light">Regístrate para comenzar a jugar</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="form-label text-light">Nombre de usuario</label>
                <input type="text" className="form-control" {...register("username", { required: true })} />
                {errors.username && <p className="text-danger">Este campo es obligatorio</p>}
              </div>
              <div className="mb-4">
                <label className="form-label text-light">Correo electrónico</label>
                <input type="email" className="form-control" {...register("email", { required: true })} />
                {errors.email && <p className="text-danger">Este campo es obligatorio</p>}
              </div>
              <div className="mb-4">
                <label className="form-label text-light">Contraseña</label>
                <input type="password" className="form-control" {...register("password", { required: true })} />
                {errors.password && <p className="text-danger">Este campo es obligatorio</p>}
              </div>
              <button type="submit" className="btn btn-custom btn-lg w-100 text-light custom-boton">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen


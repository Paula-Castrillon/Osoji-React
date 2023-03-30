import React from 'react';

function Header() {
    const FORMULARIO = document.querySelector("#formulariosoji")

FORMULARIO,addEventListener("submit", function(event) {
    event.preventDefault()

    const user = event.target.user.value.trim().toLowerCase()
    const email = event.target.email.value.trim().toLowerCase()
    const contraseña = event.target.contraseña.value.trim()

    console.log(user)
    console.log(email)
    console.log(contraseña)
})
    return (
        <div>
            <div className="row header p-2 ">
                <div className="col-12 col-lg-4 d-flex justify-content-center logo">
                    <img src="../public/Imagenes/logo-header.png" width="80" alt="" />
                </div>
                <div className="col-12 col-lg-8 d-flex justify-content-around align-items-center">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                        <div className="container">
                            <a className="navbar-brand" href="#"></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                                <div className="navbar-nav">
                                    <a className="nav-link titulo-1 m-2" href="#QueEsOsoji">¿QUÉ ES OSOJI?</a>
                                    <a className="nav-link titulo-1 m-2" href="#AcercaDeOsoji">ACERCA DE OSOJI</a>
                                    <a className="nav-link titulo-1 m-2" href="#SobreElJuego">SOBRE EL JUEGO</a>
                                    <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <a className="nav-link titulo-1 m-2" href="#">REGISTRESE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">REGISTRESE</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="formulariosoji">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputuser">Nombre de usuario</label>
                                    <input type="text" className="form-control" id="user" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Correo</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="contraseña" />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header; 
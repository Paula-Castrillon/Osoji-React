import React from 'react'

function SobreJuego() {
    return (
        <div>
            <div className="row nombre-juego d-flex p-2 my-4">
                <p className="d-flex justify-content-center text-center m-0" >RACOON: A CLEANING ADVENTURE BY OSOJI</p>
            </div>
            <div className="container">
                <div id="SobreElJuego">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-5">
                            <h2 className="titulos d-flex justify-content-center align-items-center">MODO DE JUEGO</h2>
                            <p className="parrafo-4 pt-3 pb-3">Los  jugadores  tendrán una  misión específica  de  recolección  y  clasificación  de residuos serán perseguidos por El golem, un monstruo de desechos tóxicos que lanzará una variedad de residuos con  el  propósito  de  impactar  el  cuerpo  de  los personajes y así generar una multa que se registrara en el Multometro. El equipo debe completar la misión de manera correcta, generando el menor número de multas.</p>
                            <div className="d-flex justify-content-center ">
                                <button className="btn-mj px-5">JUEGA YA</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 p-3">
                            <img src="./Imagenes/modo-juego.jpg" width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4 linea-personaje">
                <h1 className="d-flex justify-content-center align-items-center t-personaje">PERSONAJES</h1>
            </div>
        </div>
    )
}

export default SobreJuego;
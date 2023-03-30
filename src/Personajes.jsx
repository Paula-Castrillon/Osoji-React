import React from 'react'
import { useState } from 'react';

function Personajes(props) {

    return (
        <div>
            <div className="informacion-personaje">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 p-5">
                            <h3 className="titulo-peronajes d-flex justify-content-center pb-3">{props.tituloP}</h3>
                            <div className="d-flex justify-content-center p-2" data-bs-toggle="modal" data-bs-target="#ModalPowolf">
                                <img src={`./Imagenes/${props.imgPowolf}.png`} className="img-personajes" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-5">
                            <h3 className="titulo-peronajes d-flex justify-content-center pb-3">{props.tituloR}</h3>
                            <div className="d-flex justify-content-center p-2" data-bs-toggle="modal" data-bs-target="#ModalRacoon">
                                <img  src={`./Imagenes/${props.imgRacoon}.png`} className="img-personajes" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-5">
                            <h3 className="titulo-peronajes d-flex justify-content-center pb-3">{props.tituloG}</h3>
                            <div className="d-flex justify-content-center p-2" data-bs-toggle="modal" data-bs-target="#ModalGolem">
                                <img  src={`./Imagenes/${props.imgGolem}.png`} className="img-personajes"/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Powolf --> */}
                    <div className="modal fade" id="ModalPowolf" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 titulo-modal" id="ModalPowolf">CONOCE SOBRE POWOLF</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={`./Imagenes/${props.imgP}.png`} alt=""/>
                                    </div>
                                    <p className="parrafo-modal pt-3">{props.pModal}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- racoon --> */}
                    <div className="modal fade" id="ModalRacoon" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 titulo-modal" id="ModalRacoon">CONOCE SOBRE RACOON</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={`./Imagenes/${props.imgR}.png
                                        `} alt=""/>
                                    </div>
                                    <p className="parrafo-modal pt-3">{props.pModal2}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- golem --> */}
                    <div className="modal fade" id="ModalGolem" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 titulo-modal" id="ModalGolem">CONOCE SOBRE EL GOLEM</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={`./Imagenes/${props.imgG}.png`} alt=""/>
                                    </div>
                                    <p className="parrafo-modal pt-3">{props.pModal3}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personajes;
import React from "react";

function Footer() {
    return (
        <div className="pie-dp">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 p-4">
                        <h4 className="titulo-footer d-flex justify-content-center align-items-center">CONTACTENOS</h4>
                        <p className="texto-correos d-flex justify-content-center align-items-center m-0">evelinlozano163@gmail.com</p>
                        <p className="texto-correos d-flex justify-content-center align-items-center m-0">pcastrillon083@gmail.com</p>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <img src="./Imagenes/iconos/facebook.png" className="px-2 btn-footer" alt="" />
                        <img src="./Imagenes/iconos/instagram.png" className="px-2 btn-footer" alt="" />
                        <img src="./Imagenes/iconos/WhatsApp.png" className="px-2 btn-footer" alt="" />
                        <img src="./Imagenes/iconos/Snapchat.png" className="px-2 btn-footer" alt="" />
                        <img src="./Imagenes/iconos/TikTok.png" className="px-2 btn-footer" alt="" />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center py-3 px-0 logo">
                        <img src="./Imagenes/logo-pie-pagina.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
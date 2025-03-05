import { useState } from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import Nav from "@/Layouts/Nav";
import Form from "@/Layouts/Form";
import ServisesFlot from "@/Components/ServisesFlot";
import Tarjeta2 from "@/Components/Tarjeta2";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import { Servicios } from "@/Imags/Servises";
import { Pops } from "@/Imags/Pops";
import { Banner } from "@/Imags/Banners";

export default function InstalacionVinilMaterial(params) {

    const [activeModal, setActiveModal] = useState(null);
       

    // Función para abrir el modal correspondiente
    function openModal(id) {
        setActiveModal(id);
    }

    // Función para cerrar el modal
    function closeModal() {
        setActiveModal(null);
    }

    return(
        <>
            <Head title="Instalación de Vinil y Materiales Decoración"/>
            <Nav/>
            <main>
                <div>
                    <picture>
                        <img src={Banner.InstalaciónViniloMaterial} alt="Instalacion de Vinil y Materiales para Decoracion" title="Instalacion de Vinil y Materiales para Decoracion" loading="lazy"/>
                    </picture>
                </div>
                <section className="colorGr">
                    <h1 className="divCenter h1">Instalacion de Vinil y Materiales para Decoracion</h1>
                    <h2 className="divCenter texcenter h3">
                        CALIDAD PROFESIONAL EN LA INSTALACIÓN DE VINIL Y MATERIAL PARA DECORACIÓN
                    </h2>
                    <h3 className="divCenter texcenter h4">
                        Instalamos en:
                    </h3>
                </section>
                <section>
                    {/* Renderizar modal solo si está activo */}
                    {activeModal === 'InstalaVinilAdh' && (  
                        <ServisesFlot
                            Id={'InstalaVinilAdh'}
                            Titulo={'Vinil Adhesivo'}
                            Img={[
                                Servicios.InstalaciónVinil,
                                Servicios.VinilAdhesivo,
                                Pops.Pop1ImpresionVinilAdherible,
                                Pops.Pop1VinilAdherible,
                                Pops.Pop1VinilesAdheribles
                            ]}
                            ButonUrl={'galeriaVinilAdhesivo'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'InstalaVinilAdh'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'PapelTap' && (
                        <ServisesFlot
                            Id={'PapelTap'}
                            Titulo={'Papel Tapiz'}
                            Img={[
                                Servicios.PapeTapiz
                            ]}
                            // ButonUrl={'galeriaPapelFotografico'}
                            // ButonTit={'Galeria'}
                            isOpen={activeModal === 'PapelTap'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'FloorGraf' && (
                        <ServisesFlot
                            Id={'FloorGraf'}
                            Titulo={'FoolGraphics'}
                            Img={[
                                Servicios.Floorgraphics,
                                Servicios.FloorGraphicPrecio
                            ]}
                            ButonUrl={'galeriaFloor'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'FloorGraf'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Tapiales' && (
                        <ServisesFlot
                            Id={'Tapiales'}
                            Titulo={'Tapiales'}
                            Img={[
                                Servicios.Tapiales
                            ]}
                            // ButonUrl={'galeriaTelaCanvas'}
                            // ButonTit={'Galeria'}
                            isOpen={activeModal === 'Tapiales'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'LogosVolum' && (
                        <ServisesFlot
                            Id={'LogosVolum'}
                            Titulo={'Logos Volumetricos'}
                            Img={[
                                Servicios.LogosVolumétricos
                            ]}
                            // ButonUrl={'galeriaTelaCanvas'}
                            // ButonTit={'Galeria'}
                            isOpen={activeModal === 'LogosVolum'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'AnunciosVol' && (
                        <ServisesFlot
                            Id={'AnunciosVol'}
                            Titulo={'Anuncios Volumetricos'}
                            Img={[
                                Servicios.MontajeCajaLuzExteriores,
                                Pops.Pop4MontajeCarteles
                            ]}
                            isOpen={activeModal === 'AnunciosVol'}
                            closeModal={closeModal}
                        />
                    )}
                </section>
                <section>
                    <div className="cartsHome">
                        <Tarjeta2 
                            Img={Servicios.InstalaciónVinil} 
                            Alt={'IstalacionVinilAdhesivo'}
                            Clases={'carthre'}
                            openModal={() => openModal('InstalaVinilAdh')}>
                                Vinil Adhesivo
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.PapeTapiz} 
                            Alt={'PapelTapiz'}
                            Clases={'carthre'}
                            openModal={() => openModal('PapelTap')}>
                                Papel Tapiz
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.Floorgraphics} 
                            Alt={'FloorGrafphic'}
                            Clases={'carthre'}
                            openModal={() => openModal('FloorGraf')}>
                                Floor Graphics
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.Tapiales} 
                            Alt={'Tapiales'}
                            Clases={'carthre'}
                            openModal={() => openModal('Tapiales')}>
                                Tapiales
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.LogosVolumétricos}
                            Alt={'LogosVolumetricos'}
                            Clases={'carthre'}
                            openModal={() => openModal('LogosVolum')}>
                                Logos Volumetricos
                        </Tarjeta2>
                        <Tarjeta2
                            Img={Servicios.MontajeCajaLuzExteriores}
                            Alt={'AnunciosVolumetricos'}
                            Clases={'carthre'}
                            openModal={() => openModal('AnunciosVol')}>
                                Anuncios Exteriores
                        </Tarjeta2>
                    </div>
                </section>
            </main>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.InstalacióndeVinilCircular} alt="Instalacion de Vinil" title="Instalacion de Vinil y Material para Decoracion" loading="lazy"/>
                    </picture>
                </div>
                <div className="conInfo">
                    <Form/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
import { useState } from "react";
import { Head } from "@inertiajs/react";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import Form from "@/Layouts/Form";
import { Banner } from "@/Imags/Banners";
import Tarjeta2 from "@/Components/Tarjeta2";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import { Servicios } from "@/Imags/Servises";
import ServisesFlot from "@/Components/ServisesFlot";
import { Pops } from "@/Imags/Pops";

export default function CreatividadDisenoGrafico() {
    
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
        <Head title="Magic Pop B2B |CreatividadyDiseñoGráfico"/>
        <Nav></Nav>
        <main>
            <div>
                <picture>
                    <img src={Banner.CreatividadDiseno} alt="Creatividad y diseno grafico" title="Banner Creatividad y diseno grafico" loading="lazy"/>
                </picture>
            </div>
            <section className="colorGr">
                <h1 className="divCenter h1">Creatividad y Diseño Grafico</h1>
                <h2 className="divCenter texcenter h3">
                    PROMUEVE TUS NEGOCIOS COMERCIALES CON ESTRATEGIAS PUBLICITARIAS DE CALIDAD EN EL DISEÑO GRÁFICO QUE ATRAIGAN CLIENTES
                </h2>
            </section>
            <section>
                {/* Renderizar modal solo si está activo */}
                {activeModal === 'CreacionCont' && (
                    <ServisesFlot
                        Id={'CreacionCont'}
                        Titulo={'Creación de Contenido'}
                        Img={[
                            Servicios.CreacionDeContenido,
                            Pops.Pop1ContenidosDigitales,
                            Pops.Pop1ContenidoDigital,
                            Pops.Pop1CreaciónContenidosDigitales,
                            Pops.Pop1PublicidadContenido
                        ]}
                        ButonUrl={"galeriaCreacionContenido"}
                        ButonTit={"Galeria"}
                        isOpen={activeModal === 'CreacionCont'}
                        closeModal={closeModal}
                    />
                )}
                {activeModal === 'DisenoLog' && (
                    <ServisesFlot
                        Id={'DisenoLog'}
                        Titulo={'Diseño de Logos'}
                        Img={[
                            Servicios.CreacionDeLogos,
                            Pops.Pop2CreadorLogos,
                            Pops.Pop2DiseñoLogotipos,
                            Pops.Pop2logotipos,
                            Pops.Pop2MDTECH
                        ]}
                        ButonUrl={"galeriaDisenoLogos"}
                        ButonTit={"Galeria"}
                        isOpen={activeModal === 'DisenoLog'}
                        closeModal={closeModal}
                    />
                )}
                {activeModal === 'CreacionRend' && (
                    <ServisesFlot
                        Id={'CreacionRend'}
                        Titulo={'Creación de Renders'}
                        Img={[
                            Servicios.CreacionDeRenders,
                            Pops.Pop3MuckupCuadrosCanvas,
                            Pops.Pop3MuckupTupperware,
                            Pops.Pop3RenderFashionCristal,
                            Pops.Pop3RenderPeceraArcos
                        ]}
                        ButonUrl={"galeriaCreacionRenders"}
                        ButonTit={"Galeria"}
                        isOpen={activeModal === 'CreacionRend'}
                        closeModal={closeModal}
                    />
                )}
                {activeModal === 'Fotos' && (
                    <ServisesFlot
                        Id={'Fotos'}
                        Titulo={'Montaje y Edición de Fotos'}
                        Img={[
                            Servicios.MontajeEdicionFotos,
                            Pops.Pop4MontajeEdicionFotografia,
                            Pops.Pop4MontajeEdicionFo,
                            Pops.Pop4Edicion,
                            Pops.Pop4Montaje
                        ]}
                        ButonUrl={"galeriaMontajeEdicionFotos"}
                        ButonTit={"Galeria"}
                        isOpen={activeModal === 'Fotos'}
                        closeModal={closeModal}
                    />
                )}
            </section>
            <section>
                <div className="cartsHome">
                    <Tarjeta2 
                        Img={Servicios.CreacionDeContenido} 
                        Alt={'CreacionDeContenido'}
                        Clases={'cartwo'}
                        openModal={() => openModal('CreacionCont')}>
                            Creación de Contenido
                    </Tarjeta2>
                    <Tarjeta2 
                        Img={Servicios.CreacionDeLogos} 
                        Alt={'DisenoDeLogos'}
                        Clases={'cartwo'}
                        openModal={() => openModal('DisenoLog')}>
                            Diseño de Logos
                    </Tarjeta2>
                    <Tarjeta2 
                        Img={Servicios.CreacionDeRenders} 
                        Alt={'CreacionDeRenders'}
                        Clases={'cartwo'}
                        openModal={() => openModal('CreacionRend')}>
                            Creación de Renders
                    </Tarjeta2>
                    <Tarjeta2 
                        Img={Servicios.MontajeEdicionFotos} 
                        Alt={'MontajeEdicionFotos'}
                        Clases={'cartwo'}
                        openModal={() => openModal('Fotos')}>
                            Montaje y Edición de Fotos
                    </Tarjeta2>
                </div>
            </section>
        </main>
        <div className="form-div-duple">
            <div className="conImg">
                <picture>
                    <img src={UsoGeneral.Creatividadydiseñografico} alt="Creatividad y Diseno Grafico" title="Creatividad y Diseno Grafico" loading="lazy"/>
                </picture>
            </div>
            <div className="conInfo">
                <Form/>
            </div>
        </div>
        <Footer />
        </>
    );
}
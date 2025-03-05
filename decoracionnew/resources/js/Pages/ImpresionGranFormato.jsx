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

export default function ImpresionGeanFormato(params) {

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
            <Head title="Impresión Digital y GranFormato | Magic Pop B2B"/>
            <Nav/>
            <main>
                <div>
                    <picture>
                        <img src={Banner.ImpresiónPapelFotográficoCdmx} alt="Impresion Digital y Gran Formato" title="Banner Impresion Digital y Gran Formato" loading="lazy"/>
                    </picture>
                </div>
                <section className="colorGr">
                    <h1 className="divCenter h1">Impresion Digital y Gran Formato</h1>
                    <h2 className="divCenter texcenter h3">
                        FOTOS DE ALTA CALIDAD <br /> FOTOS ALTA RESOLUCION HASTA CON 1600 DPI DE DEFINICIÓN
                    </h2>
                </section>
                <section>
                    {/* Renderizar modal solo si está activo */}
                    {activeModal === 'VinilAdh' && (  
                        <ServisesFlot
                            Id={'VinilAdh'}
                            Titulo={'vinil de impresión'}
                            Img={[
                                Servicios.VinilAdhesivo,
                                Pops.Pop1ImpresionVinilAdherible,
                                Pops.Pop1VinilAdherible,
                                Pops.Pop1VinilesAdheribles,
                                Pops.Pop1VinilesAutoadheribles
                            ]}
                            ButonUrl={'galeriaVinilAdhesivo'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'VinilAdh'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'PapelFotog' && (
                        <ServisesFlot
                            Id={'PapelFotog'}
                            Titulo={'Papel Fotográfico'}
                            Img={[
                                Servicios.PapelFotográfico,
                                Pops.Pop2ImpresiónPapelFotografico,
                                Pops.Pop2ImpresiónPapelFotograficoColocacion,
                                Pops.Pop2ImpresionFotograficaListo,
                                Pops.Pop2VinilMicroperforado
                            ]}
                            ButonUrl={'galeriaPapelFotografico'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'PapelFotog'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'TelaPlaca' && (
                        <ServisesFlot
                            Id={'TelaPlaca'}
                            Titulo={'Tela Placard'}
                            Img={[
                                Servicios.TelaPlacard,
                                Pops.Pop3PlacardTela,
                                Pops.Pop3TelaImpresionDigital,
                                Pops.Pop3ImpresionDigitalTela
                            ]}
                            ButonUrl={'galeriaTelaPlacard'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'TelaPlaca'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Canvas' && (
                        <ServisesFlot
                            Id={'Canvas'}
                            Titulo={'Tela Canvas'}
                            Img={[
                                Servicios.TelaCanvas,
                                Pops.Pop4CuadrosCanvas,
                                Pops.Pop4ImpresiónCanvas,
                                Pops.Pop4ImpresiónLienzo,
                                Pops.Pop4PinturasLienzo
                            ]}
                            ButonUrl={'galeriaTelaCanvas'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Canvas'}
                            closeModal={closeModal}
                        />
                    )}
                </section>
                <section>
                    <div className="cartsHome">
                        <Tarjeta2 
                            Img={Servicios.VinilAdhesivo} 
                            Alt={'VinilAdhesivo'}
                            Clases={'cartwo'}
                            openModal={() => openModal('VinilAdh')}>
                                Vinil Adhesivo
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.PapelFotográfico} 
                            Alt={'PapelFotografico'}
                            Clases={'cartwo'}
                            openModal={() => openModal('PapelFotog')}>
                                Papel Fotográfico
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.TelaPlacard} 
                            Alt={'TelaPlacard'}
                            Clases={'cartwo'}
                            openModal={() => openModal('TelaPlaca')}>
                                Tela Placard
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.TelaCanvas} 
                            Alt={'TelaCanvas'}
                            Clases={'cartwo'}
                            openModal={() => openModal('Canvas')}>
                                Tela Canvas
                        </Tarjeta2>
                    </div>
                </section>
            </main>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.ImpresionDigitalGranformato} alt="Creatividad y Diseno Grafico" title="Creatividad y Diseno Grafico" loading="lazy"/>
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
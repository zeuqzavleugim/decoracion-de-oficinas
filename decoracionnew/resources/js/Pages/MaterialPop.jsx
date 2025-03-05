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

export default function MaterialPop(params) {

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
            <Head title="Soluciones Publicitarias Creativas"/>
            <Nav/>
            <main>
                <div>
                    <picture>
                        <img src={Banner.MaterialPop} alt="Recorte de Vinil para Empresas" title="Recorte de Vinil para Empresas" loading="lazy"/>
                    </picture>
                </div>
                <section className="colorGr">
                    <h1 className="divCenter texcenter h1">
                        Material Pop, Posters, Electrostaticos
                    </h1>
                    <h3 className="divCenter texcenter h4">
                        Influye en la desición de compra al decorar la vista de tus productos comerciales
                    </h3>
                </section>
                <section></section>
                <section>
                    {activeModal === 'Banner' && (  
                        <ServisesFlot
                            Id={'Banner'}
                            Titulo={'Banner'}
                            Img={[
                                Servicios.Banners
                            ]}
                            // ButonUrl={'galeriaVinilAdhesivo'}
                            // ButonTit={'Galeria'}
                            isOpen={activeModal === 'Banner'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Electrostatico' && (  
                        <ServisesFlot
                            Id={'Electrostatico'}
                            Titulo={'Electrostatico'}
                            Img={[
                                Servicios.ViniloElectrostático,
                                Pops.Pop2Electrostatico,
                                Pops.Pop2PapelElectrostático
                            ]}
                            ButonUrl={'galeriaElectro'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Electrostatico'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Posters' && (  
                        <ServisesFlot
                            Id={'Posters'}
                            Titulo={'Posters'}
                            Img={[
                                Servicios.Posters,
                                Pops.Pop3PostersPublicitarios
                            ]}
                            ButonUrl={'galeriaPoster'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Posters'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'TentCard' && (  
                        <ServisesFlot
                            Id={'TentCard'}
                            Titulo={'TentCard'}
                            Img={[
                                Servicios.TentCard,
                                Pops.Pop4CenefasAdhesivas,
                                Pops.Pop4CenefasDecorativas
                            ]}
                            ButonUrl={'galeriaTentCard'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'TentCard'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Cenefas' && (  
                        <ServisesFlot
                            Id={'Cenefas'}
                            Titulo={'Cenefas'}
                            Img={[
                                Servicios.Cenefa
                            ]}
                            // ButonUrl={'galeriaVinilAdhesivo'}
                            // ButonTit={'Galeria'}
                            isOpen={activeModal === 'Cenefas'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Display' && (  
                        <ServisesFlot
                            Id={'Display'}
                            Titulo={'Display'}
                            Img={[
                                Servicios.Display
                            ]}
                            // ButonUrl={'galeriaVinilAdhesivo'}
                            // ButonTit={'Galeria'}
                            isOpen={activeModal === 'Display'}
                            closeModal={closeModal}
                        />
                    )}
                </section>
                <section>
                    <div className="cartsHome">
                        <Tarjeta2 
                            Img={Servicios.Banners}
                            Alt={'Banner'}
                            Clases={'cartUno'}
                            openModal={() => openModal('Banner')}>
                                Banner
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.ViniloElectrostático}
                            Alt={'Electrostatico'}
                            Clases={'cartUno'}
                            openModal={() => openModal('Electrostatico')}>
                                Electrostáticos
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.Posters}
                            Alt={'Posters'}
                            Clases={'cartUno'}
                            openModal={() => openModal('Posters')}>
                                Posters
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.TentCard}
                            Alt={'TentCard'}
                            Clases={'cartUno'}
                            openModal={() => openModal('TentCard')}>
                                TentCard
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.Cenefa}
                            Alt={'Cenefas'}
                            Clases={'cartUno'}
                            openModal={() => openModal('Cenefas')}>
                                Cenefas
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.Display}
                            Alt={'Display'}
                            Clases={'cartUno'}
                            openModal={() => openModal('Display')}>
                                Display
                        </Tarjeta2>
                    </div>
                </section>
            </main>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.CenefasDecorativas} alt="Material Pop" title="Material Pop" loading="lazy"/>
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
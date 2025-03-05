import { Head } from "@inertiajs/react";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import { GaleriaTelaPlacard } from "@/Imags/GaleriaTelaPlacard";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import Form from "@/Layouts/Form";

export default function GaleTelaPlacard(params) {
    return(
        <>
            <Head title="Tela Placard | Impresión de Alta Calidad"/>
            <Nav/>
            <div className="colorGr">
                <h1 className="divCenter h1">Tela Placard</h1>
                <h2 className="divCenter h4">
                    Nuestra galeria de los proyectos
                </h2>
            </div>
            <div className="galeria">
                {GaleriaTelaPlacard.map((item, index) => (
                    <div key={index} className="galeria-item">
                        <img src={item.img} alt={item.alt} className="galeria-imagen" title={item.titulo} loading="lazy"/>
                        <h3 className="galeria-titulo h3"><strong>{item.titulo}</strong></h3>
                    </div>
                ))}
            </div>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.ImpresionDigitalGranformato} alt="Impresion Digital en Gran Formato" title="Impresion Digital en Gran Formato" loading="lazy"/>
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
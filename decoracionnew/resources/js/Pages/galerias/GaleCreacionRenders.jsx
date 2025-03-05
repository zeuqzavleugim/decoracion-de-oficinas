import { Head } from "@inertiajs/react";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import { GaleriaCreacionRenders } from "@/Imags/GaleriaCreacionRenders";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import Form from "@/Layouts/Form";

export default function GaleCreacionRenders(params) {
    return(
        <>
            <Head title="Creación de Renders | Alta Calidad"/>
            <Nav/>
            <div className="colorGr">
                <h1 className="divCenter h1">Creación de Renders</h1>
                <h2 className="divCenter h4">
                    Nuestra galeria de los proyectos
                </h2>
            </div>
            <div className="galeria">
                {GaleriaCreacionRenders.map((item, index) => (
                    <div key={index} className="galeria-item">
                        <img src={item.img} alt={item.alt} className="galeria-imagen" title={item.titulo} loading="lazy"/>
                        <h3 className="galeria-titulo h3"><strong>{item.titulo}</strong></h3>
                    </div>
                ))}
            </div>
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
            <Footer/>
        </>
    );   
}
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import Nav from "@/Layouts/Nav";
import Buton0 from "@/Components/Buton0";
import VideoDecoracionNegocios from '@assets/img/general/video-decoracion-negocios.mp4';
import TarjetaBlog from "@/Components/TarjetaBlog";
import { ImagBlogs } from "@/Imags/ImagBlogs";

export default function Blogs(params) {
    
    return(
        <>
        <Head title="Blog | Tendencias y Soluciones en Diseño Publicitario"/>
        <Nav/>
        <main>
            <div className="videoContact">
                <video src={VideoDecoracionNegocios}  autoPlay muted loop className="divCenter" loading="lazy"></video>
            </div>
            <div className="colorGr">
                <h1 className="divCenter h1">MAGIC POP, NUESTROS BLOGS</h1>
                <h2 className="divCenter h4">
                    Decoración de Negocios, Oficinas, Restaurantes, Hoteles Y más
                </h2>
            </div>
            <div className="cartsHome">
                <TarjetaBlog
                    Img={ImagBlogs.LaImportanciadeunLogotipo}
                    Title={'La Importancia de un Logotipo para las Empresas: El Primer Paso hacia una Marca Fuerte'}
                    URL={'LogotipoParaEmpresas'}>
                        Un logotipo no es solo una imagen. Es la primera impresión que 
                        recibe el cliente, la identidad visual de una empresa y una 
                        representación de los valores y visión de la marca.
                    </TarjetaBlog>
                <TarjetaBlog
                    Img={ImagBlogs.QueMaterialPOP}
                    Title={'¿Qué es Material POP y Cómo Puede Potenciar tus Ventas?'}
                    URL={'QueEsMaterialPop'}>
                        En un mercado cada vez más competitivo, captar la atención 
                        del cliente es fundamental. Las empresas que buscan destacar 
                        y fortalecer su marca deben aprovechar todos los puntos de 
                        contacto posibles.
                </TarjetaBlog>
                <TarjetaBlog
                    Img={ImagBlogs.VinilAltaResolucionBrandingCorporativo}
                    Title={'El Poder del Vinil en Alta Resolución para el Branding Corporativo'}
                    URL={'PoderVinilAltaResolucion'}>
                        En el mundo corporativo, donde la competencia es feroz y las primeras 
                        impresiones cuentan, la construcción de una marca sólida y reconocible 
                        es crucial para el éxito.
                </TarjetaBlog>
                <TarjetaBlog
                    Img={ImagBlogs.ExperienciaClienteCadenas}
                    Title={'Cómo el Vinil en Alta Resolución Puede Transformar la Experiencia del Cliente en Cadenas de Restaurantes'}
                    URL={'TransformarExperiencia'}>
                        En la industria de restaurantes, la experiencia del cliente va más allá de 
                        la comida. El ambiente y la decoración de un restaurante juegan un papel 
                        crucial en cómo los comensales perciben la marca y en la satisfacción general 
                        de su visita.
                </TarjetaBlog>
                <TarjetaBlog 
                    Img={ImagBlogs.ImagenCorporativaOficinas}
                    Title={'Uso del Vinil en Alta Resolución para Oficinas y Espacios Corporativos'}
                    URL={'ImagenCorporativa'}>
                        La imagen corporativa es un aspecto crucial para las empresas que buscan 
                        destacar en un entorno competitivo. Hoy en día, no basta con tener una 
                        identidad visual sólida en medios digitales; los espacios físicos de 
                        trabajo también deben reflejar los valores y la personalidad de la marca.
                </TarjetaBlog>
                <TarjetaBlog 
                    Img={ImagBlogs.DecoraciónconVinilTargeta} 
                    Title={'Estrategias de Branding con Impresión de Vinil en Alta Resolución para Cadenas de Hoteles y Restaurantes'}
                    URL={'EstrategiasBranding'}>
                        En un mercado altamente competitivo, el branding es una pieza clave 
                        para destacar. Las cadenas de hoteles y restaurantes necesitan 
                        transmitir su identidad de marca de manera impactante y memorable.
                </TarjetaBlog>
            </div>
            <div className="colorGr divCenter">
                <h3 className="h3">No olvides</h3>
            </div>
            <div className="colorGr divCenter">
                <Buton0 URL={'servicioContacto'}>Contactanos</Buton0>
            </div>
        </main>
        <Footer/>
        </>
    );
}
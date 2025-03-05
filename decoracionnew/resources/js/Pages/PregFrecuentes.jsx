import { Head } from "@inertiajs/react";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import VideoDecoracionNegocios from '@assets/img/general/video-decoracion-negocios.mp4';
import Buton0 from "@/Components/Buton0";
import { Colaboradores } from "@/Imags/Colaboradores";

export default function PregFrecuentes(params) {
    
    return(
        <>
        <Head title="Preguntas Frecuentes sobre Decoración de Oficinas y Negocios B2B |"/>
        <Nav/>
        <main className="">
            <div className="videoContact">
                <video src={VideoDecoracionNegocios}  autoPlay muted loop className="divCenter" loading="lazy"></video>
            </div>
            <h1 className="divCenter h1">
                Preguntas Frecuentes sobre Decoración de Oficinas y Negocios B2B
            </h1>
            <h2 className="none">reckitt</h2>
            <details>
                <summary>
                    <h2>¿Qué es la creación de contenido?</h2>
                </summary>
                <p>
                    La creación de contenido se refiere al desarrollo de elementos visuales 
                    o escritos, como imágenes, textos y videos, que representen a tu marca 
                    y comuniquen el mensaje adecuado a tu audiencia. <br />
                    <Buton0 URL={'galeriaCreacionContenido'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa la creación de contenido?</h2>
                </summary>
                <p>
                    Se utiliza para nutrir tus canales de comunicación, ya sea en redes 
                    sociales, sitios web o material impreso, logrando captar la atención 
                    de tu público objetivo y fortaleciendo tu imagen de marca. <br />
                    <Buton0 URL={'galeriaCreacionContenido'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el diseño de logos?</h2>
                </summary>
                <p>
                    El diseño de logos es el proceso de crear una representación gráfica 
                    única que identifica y distingue a tu empresa de la competencia. <br />
                    <Buton0 URL={'galeriaDisenoLogos'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el diseño de logos?</h2>
                </summary>
                <p>
                    Se aplica en todos los puntos de contacto con tus clientes: en tu página web, 
                    redes sociales, material impreso, productos y en cualquier lugar donde desees 
                    que tu marca sea reconocida. <br />
                    <Buton0 URL={'galeriaDisenoLogos'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es la creación de renders?</h2>
                </summary>
                <p>
                    La creación de renders es el uso de software especializado para generar 
                    imágenes tridimensionales que representen productos o espacios antes de 
                    ser construidos. <br />
                    <Buton0 URL={'galeriaCreacionRenders'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa la creación de renders?</h2>
                </summary>
                <p>
                    Los renders se emplean para presentar proyectos a clientes, permitiéndoles 
                    visualizar el resultado final de una instalación o diseño antes de que se 
                    realice. <br />
                    <Buton0 URL={'galeriaCreacionRenders'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el montaje y la edición de fotos?</h2>
                </summary>
                <p>
                    El montaje y edición de fotos es el proceso de ajustar, mejorar y combinar 
                    imágenes para crear representaciones visuales atractivas y profesionales. <br />
                    <Buton0 URL={'galeriaMontajeEdicionFotos'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el montaje y la edición de fotos?</h2>
                </summary>
                <p>
                    Se utiliza para generar imágenes de alta calidad que representen fielmente 
                    los productos o servicios de tu empresa, ideales para catálogos, sitios web 
                    y materiales publicitarios. <br />
                    <Buton0 URL={'galeriaMontajeEdicionFotos'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el vinil adhesivo?</h2>
                </summary>
                <p>
                    El vinil adhesivo es un material autoadhesivo que se utiliza para decorar 
                    superficies planas como paredes, ventanas, vehículos y más. <br />
                    <Buton0 URL={'galeriaVinilAdhesivo'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el vinil adhesivo?</h2>
                </summary>
                <p>
                    Se aplica directamente sobre superficies limpias y lisas, ideal para 
                    promociones, rotulación, señalética o personalización de espacios 
                    comerciales. <br />
                    <Buton0 URL={'galeriaVinilAdhesivo'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el papel fotográfico?</h2>
                </summary>
                <p>
                    El papel fotográfico es un material especial utilizado para imprimir 
                    imágenes de alta calidad con detalles nítidos y colores vibrantes. <br />
                    <Buton0 URL={'galeriaPapelFotografico'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el papel fotográfico?</h2>
                </summary>
                <p>
                    Se usa principalmente para imprimir fotografías de alta resolución 
                    para decoración, exhibición o publicidad, proporcionando una excelente 
                    reproducción de color. <br />
                    <Buton0 URL={'galeriaPapelFotografico'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es la tela placard?</h2>
                </summary>
                <p>
                    La tela placard es un tejido suave y flexible que se utiliza para la 
                    impresión de gráficos y fotografías de gran formato en interiores. <br />
                    <Buton0 URL={'galeriaTelaPlacard'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa la tela placard?</h2>
                </summary>
                <p>
                    Se emplea en la decoración de interiores, especialmente en oficinas 
                    y negocios, para crear murales y fondos impresos de alta calidad. <br />
                    <Buton0 URL={'galeriaTelaPlacard'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es la tela canvas?</h2>
                </summary>
                <p>
                    La tela canvas es un material similar al lienzo que se usa para 
                    imprimir imágenes artísticas de alta resolución con una textura 
                    única. <br />
                    <Buton0 URL={'galeriaTelaCanvas'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa la tela canvas?</h2>
                </summary>
                <p>
                    Se utiliza para imprimir obras de arte, fotografías y gráficos 
                    decorativos, proporcionando una apariencia elegante y profesional, 
                    ideal para oficinas y espacios comerciales. <br />
                    <Buton0 URL={'galeriaTelaCanvas'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el papel tapiz?</h2>
                </summary>
                <p>
                    El papel tapiz es un material decorativo que se adhiere a las paredes 
                    para crear ambientes únicos con texturas, patrones y gráficos 
                    personalizados. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el papel tapiz?</h2>
                </summary>
                <p>
                    Se instala en superficies lisas y se puede utilizar para renovar la 
                    apariencia de oficinas, tiendas y espacios corporativos, creando 
                    ambientes personalizados. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué son los floor graphics?</h2>
                </summary>
                <p>
                    Los floor graphics son gráficos impresos sobre materiales adhesivos 
                    resistentes que se colocan en el suelo para señalización o decoración. <br />
                    <Buton0 URL={'galeriaFloor'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usan los floor graphics?</h2>
                </summary>
                <p>
                    Se instalan en el suelo para guiar a los clientes, promocionar productos 
                    o agregar un toque decorativo en tiendas, oficinas y espacios comerciales. <br />
                    <Buton0 URL={'galeriaFloor'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué son los tapiales?</h2>
                </summary>
                <p>
                    Los tapiales son barreras temporales utilizadas en sitios de construcción 
                    o remodelación para ocultar áreas no terminadas y ofrecer espacio para 
                    publicidad o información. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usan los tapiales?</h2>
                </summary>
                <p>
                    Se colocan alrededor de obras en construcción y se pueden decorar 
                    con gráficos publicitarios o informativos, ofreciendo una oportunidad 
                    de marketing adicional. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué son los logos volumétricos?</h2>
                </summary>
                <p>
                    Los logos volumétricos son representaciones tridimensionales de una 
                    marca o logotipo que se instalan en paredes o fachadas para crear 
                    un impacto visual. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usan los logos volumétricos?</h2>
                </summary>
                <p>
                    Se colocan en áreas visibles, como la entrada de una oficina o negocio, 
                    para resaltar la identidad de la marca y atraer la atención de los 
                    visitantes. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué son los anuncios exteriores?</h2>
                </summary>
                <p>
                    Los anuncios exteriores son letreros o carteles publicitarios colocados 
                    en exteriores para captar la atención de transeúntes y vehículos. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usan los anuncios exteriores?</h2>
                </summary>
                <p>
                    Se instalan en fachadas, techos o paredes exteriores, ideal para atraer 
                    clientes a tu negocio con promociones o mensajes publicitarios visibles 
                    desde lejos. <br />
                    <Buton0 URL={'servicio3'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el recorte de vinil?</h2>
                </summary>
                <p>
                    El recorte de vinil es el proceso de cortar vinil adhesivo para crear 
                    gráficos personalizados como letras, logos o diseños. <br />
                    <Buton0 URL={'galeriaRotulacionVinil'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el recorte de vinil?</h2>
                </summary>
                <p>
                    Se aplica en superficies como paredes, vehículos o ventanas para 
                    rotulación, señalética o decoración personalizada de alta precisión. <br />
                    <Buton0 URL={'galeriaRotulacionVinil'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el vinil textil?</h2>
                </summary>
                <p>
                    El vinil textil es un material adhesivo que se utiliza para personalizar 
                    prendas de vestir mediante la aplicación de gráficos y logotipos. <br />
                    <Buton0 URL={'galeriaRecorteVinilTextirl'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el vinil textil?</h2>
                </summary>
                <p>
                    Se aplica sobre prendas mediante calor, creando diseños personalizados en 
                    camisetas, uniformes y otros textiles de manera rápida y duradera. <br />
                    <Buton0 URL={'galeriaRecorteVinilTextirl'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es la señalética de exteriores?</h2>
                </summary>
                <p>
                    La señalética de exteriores son letreros que indican direcciones, 
                    advertencias o información en espacios exteriores, como estacionamientos 
                    y entradas de edificios. <br />
                    <Buton0 URL={'galeriaSenaleticaExterior'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa la señalética de exteriores?</h2>
                </summary>
                <p>
                    Se instala en áreas de alta visibilidad para guiar a los visitantes, 
                    mejorar la seguridad o informar sobre áreas específicas de tu negocio. <br />
                    <Buton0 URL={'galeriaSenaleticaExterior'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es la señalética de interiores?</h2>
                </summary>
                <p>
                    La señalética de interiores son letreros que brindan información o 
                    dirección dentro de oficinas, tiendas y edificios comerciales. <br />
                    <Buton0 URL={'galeriaSenaleticaInterior'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa la señalética de interiores?</h2>
                </summary>
                <p>
                    Se coloca en puntos estratégicos, como pasillos o áreas de recepción, 
                    para dirigir a los visitantes o empleados dentro de los espacios comerciales. <br />
                    <Buton0 URL={'galeriaSenaleticaInterior'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el microperforado?</h2>
                </summary>
                <p>
                    El vinil microperforado es un material adhesivo con pequeñas perforaciones 
                    que permite la visibilidad desde un lado y bloquea la visión desde el otro. <br />
                    <Buton0 URL={'galeriaMicroperforado'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el microperforado?</h2>
                </summary>
                <p>
                    Se aplica en ventanas o vidrios de vehículos, oficinas o tiendas, 
                    permitiendo que las personas vean desde el interior mientras muestra 
                    un gráfico desde el exterior. <br />
                    <Buton0 URL={'galeriaMicroperforado'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el vinil electroestático?</h2>
                </summary>
                <p>
                    El vinil electroestático es un material que se adhiere a superficies 
                    lisas sin necesidad de adhesivos, utilizando la estática para 
                    permanecer en su lugar. <br />
                    <Buton0 URL={'galeriaElestrostatico'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el vinil electroestático?</h2>
                </summary>
                <p>
                    Se coloca temporalmente en superficies como ventanas para promociones 
                    o anuncios que requieren cambios frecuentes sin dañar la superficie. <br />
                    <Buton0 URL={'galeriaElestrostatico'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el vinil polarizado?</h2>
                </summary>
                <p>
                    El vinil polarizado es una película que se adhiere a ventanas y 
                    cristales para reducir el paso de luz solar, ofreciendo privacidad 
                    y protección. <br />
                    <Buton0 URL={'galeriaPolarizado'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el vinil polarizado?</h2>
                </summary>
                <p>
                    Se instala en ventanas de oficinas o vehículos para bloquear el 
                    resplandor del sol, mejorar la eficiencia energética y proporcionar 
                    privacidad. <br />
                    <Buton0 URL={'galeriaPolarizado'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Qué es el material POP?</h2>
                </summary>
                <p>
                    El material POP (Punto de Venta) incluye banners, posters, displays 
                    y otros elementos publicitarios diseñados para promocionar productos 
                    y captar la atención del cliente en tiendas y eventos. <br />
                    <Buton0 URL={'servicio6'}>Descubre</Buton0>
                </p>
            </details>
            <details>
                <summary>
                    <h2>¿Cómo se usa el material POP?</h2>
                </summary>
                <p>
                    Se coloca en áreas estratégicas dentro de puntos de venta o exhibiciones 
                    para aumentar la visibilidad de productos y atraer a los compradores 
                    potenciales. <br />
                    <Buton0 URL={'servicio6'}>Descubre</Buton0>
                </p>
            </details>
            <div className="colorGr divCenter">
                <h3 className="h3">No lo olvides</h3>
            </div>
            <div className="colorGr divCenter">
                <Buton0 URL={'servicioContacto'}>Contactanos</Buton0>
            </div>
            <div className="content1">
                <img src={Colaboradores.Vinculate} alt="vinculate" title="Empresa Vinculate"/>
                <img src={Colaboradores.CmvNgo} alt="CMV NGO" title="Empresa CMV NGO"/>
                <img src={Colaboradores.CreditoReal} alt="Credito Real" title="Empresa Credito Real"/>
                <img src={Colaboradores.ElBuenBife} alt="El Buen Bife" title="Empresa El Buen Bife"/>
                <img src={Colaboradores.Essd} alt="ESSD" title="Empresa ESSD"/>
                <img src={Colaboradores.FasionCrystals} alt="Fasion Crystals" title="Empresa Fasion Crystals"/>
                <img src={Colaboradores.GrupoTrebol} alt="Grupo Trebol" title="Empresa Grupo Trebol"/>
                <img src={Colaboradores.Herbalife} alt="Herbalife" title="Empresa Herbalife"/>
                <img src={Colaboradores.Hoteles} alt="Hoteles" title="Empresa Hoteles"/>
                <img src={Colaboradores.Ipade} alt="Ipade" title="Empresa Ipade"/>
                <img src={Colaboradores.LaChoperia} alt="La Choperia" title="Empresa La Choperia"/>
                <img src={Colaboradores.Md} alt="MD" title="Empresa MD"/>
                <img src={Colaboradores.Nutrisa} alt="Nutrisa" title="Empresa Nutrisa"/>
                <img src={Colaboradores.Olife} alt="Olife" title="Empresa Olife"/>
                <img src={Colaboradores.Pegalon} alt="Pegalon" title="Empresa Pegalon"/>
                <img src={Colaboradores.Reckitt} alt="Reckitt" title="Empresa Reckitt"/>
                <img src={Colaboradores.Stihl} alt="STIHL" title="Empresa STIHL"/>
                <img src={Colaboradores.Telcel} alt="Telcel" title="Empresa Telcel"/>
            </div>
        </main>
        <Footer/>
        </>
    );
}
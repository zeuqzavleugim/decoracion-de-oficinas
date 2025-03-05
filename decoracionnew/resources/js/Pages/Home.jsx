import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import Nav from "@/Layouts/Nav";
import Tarjeta1 from "@/Components/Tarjeta1";
import Form from "@/Layouts/Form";
import { Servicios } from "@/Imags/Servises";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import { Colaboradores } from "@/Imags/colaboradores";
import VideoDecoracionNegocios from '@assets/img/general/video-decoracion-negocios.mp4';

export default function Home() {
    
    return(
        <>
        <Head title="Decoracion de oficinas y negocios B2B"/>
        <Nav/>
        <main>
            <div className="videoHome">
                <video src={VideoDecoracionNegocios}  autoPlay muted loop className="divCenter"></video>
            </div>
            <div className="colorGr">
                <h1 className="divCenter h1">Decoración para Negocios</h1>
                <h2 className="divCenter h2">En Magic pop tenemos para tu negocio</h2>
                <h2 className="divCenter h4">
                    Decoración de Negocios, Oficinas, Restaurantes y Hoteles
                </h2>
            </div>
            <div>
                <h3 className="divCenter h4">Servicios</h3>
                <div className="cartsHome">
                    <Tarjeta1 
                        Ruta={route('servicio1')} 
                        Img={Servicios.ServDeAltaCalidadDisenoGrafico} 
                        Id={'servicioUno'}>
                            Creatividad y Diseño Grafico
                    </Tarjeta1>
                    <Tarjeta1 
                        Ruta={route('servicio2')} 
                        Img={Servicios.ImpresionAltaResolucionSustratosEspeciales} 
                        Id={'servicio2'} >
                            Impresión de Fotografia Profecional en Alta Resolución
                    </Tarjeta1>
                    <Tarjeta1 
                        Ruta={route('servicio3')} 
                        Img={Servicios.ServicioAltaCallidadMontajeImplementacionCMV} 
                        Id={'servisio3'} >
                            Instalación de Vinil y Materiales para Decoración
                    </Tarjeta1>
                </div>
            </div>
            <div>
                <h3 className="divCenter h4">Múltiples Aplicaciones</h3>
                <div className="cartsHome">
                    <Tarjeta1 
                        Ruta={route('servicio4')} 
                        Img={Servicios.CortadoraVinilCDMX} 
                        Id={'servicio4'}>
                            Recorte de Vinil
                    </Tarjeta1>
                    <Tarjeta1 
                        Ruta={route('servicio5')} 
                        Img={Servicios.VinilDecorativoColumnas} 
                        Id={'servicio5'} >
                            Decoración con Vinil
                    </Tarjeta1>
                    <Tarjeta1 
                        Ruta={route("servicio6")} 
                        Img={Servicios.MultiplesAplicacionesBaneersCenefas} 
                        Id={'servicio6'} >
                            Material Pop
                    </Tarjeta1>
                </div>
            </div>
            <div className="colorGr">
                <h3 className="divCenter h4">Realizamos todo el proceso</h3>
                <h4 className="divCenter h5">Asesoramiento, Impresión e Instalación</h4>
                <div className="flex">
                    <div className="conInfo">
                        <h5 className="h4">SOMOS UNA AGENCIA ESPECIALIZADA EN ESTRATEGIAS DE COMUNICACIÓN VISUAL</h5>
                        <ul>
                            <li className="PointBlue">Despachos de arquitectos e inmobiliarias.</li>
                            <li className="PointBlue">Compañías nacionales y trasnacionales.</li>
                            <li className="PointBlue">Fotógrafos profesionales y diseñadores.</li>
                            <li className="PointBlue">Instituciones educativas.</li>
                            <li className="PointBlue">Plazas, negocios y locales comerciales.</li>
                            <li className="PointBlue">Contamos con equipos de corte e impresión de última generación.</li>
                        </ul>
                    </div>
                    <div className="conImg">
                        <picture>
                            <img src={UsoGeneral.InstalacióndeVinilCircular} alt="instalacion" title="instalacion" loading="lazy"/>
                        </picture>
                    </div>
                </div>
            </div>
            <div className="content1">
                <img src={Colaboradores.Vinculate} alt="vinculate" title="Empresa Vinculate" loading="lazy"/>
                <img src={Colaboradores.CmvNgo} alt="CMV NGO" title="Empresa CMV NGO" loading="lazy"/>
                <img src={Colaboradores.CreditoReal} alt="Credito Real" title="Empresa Credito Real" loading="lazy"/>
                <img src={Colaboradores.ElBuenBife} alt="El Buen Bife" title="Empresa El Buen Bife" loading="lazy"/>
                <img src={Colaboradores.Essd} alt="ESSD" title="Empresa ESSD" loading="lazy"/>
                <img src={Colaboradores.FasionCrystals} alt="Fasion Crystals" title="Empresa Fasion Crystals" loading="lazy"/>
                <img src={Colaboradores.GrupoTrebol} alt="Grupo Trebol" title="Empresa Grupo Trebol" loading="lazy"/>
                <img src={Colaboradores.Herbalife} alt="Herbalife" title="Empresa Herbalife" loading="lazy"/>
                <img src={Colaboradores.Hoteles} alt="Hoteles" title="Empresa Hoteles" loading="lazy"/>
                <img src={Colaboradores.Ipade} alt="Ipade" title="Empresa Ipade" loading="lazy"/>
                <img src={Colaboradores.LaChoperia} alt="La Choperia" title="Empresa La Choperia" loading="lazy"/>
                <img src={Colaboradores.Md} alt="MD" title="Empresa MD" loading="lazy"/>
                <img src={Colaboradores.Nutrisa} alt="Nutrisa" title="Empresa Nutrisa" loading="lazy"/>
                <img src={Colaboradores.Olife} alt="Olife" title="Empresa Olife" loading="lazy"/>
                <img src={Colaboradores.Pegalon} alt="Pegalon" title="Empresa Pegalon" loading="lazy"/>
                <img src={Colaboradores.Reckitt} alt="Reckitt" title="Empresa Reckitt" loading="lazy"/>
                <img src={Colaboradores.Stihl} alt="STIHL" title="Empresa STIHL" loading="lazy"/>
                <img src={Colaboradores.Telcel} alt="Telcel" title="Empresa Telcel" loading="lazy"/>
            </div>
            <div className="fondo1">
                <Form></Form>
            </div>
        </main>
        <Footer></Footer>
        </> 
    );
}
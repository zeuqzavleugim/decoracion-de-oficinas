import WhatsButon from "@/Components/WhatsButon";
import { RedesSoci } from "@/Imags/RedesSoci";

export default function Footer(params) {
    return(
        <>
        <WhatsButon></WhatsButon>
        <footer>
            <div className="divCenterFooter">
                <div className="grid">
                    <h4 className="fonth4">Categorías</h4>
                    <div className="divCenter">
                        <div className="tamDiv1">
                            <ul>
                                <li>
                                    <a href={route('servicio1')}>Creatividad & Diseño Gráfico</a>
                                </li>
                                <li>
                                    <a href={route('servicio2')}>Impresión de Fotografia Profecional en Alta Resolución</a>
                                </li>
                                <li>
                                    <a href={route('servicio3')}>Instalación de Vinil y Materiales para Decoración</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tamDiv1">
                            <ul>
                                <li>
                                    <a href={route('servicio4')}>Recorte de Vinil</a>
                                </li>
                                <li>
                                    <a href={route('servicio5')}>Decoración con Vinil</a>
                                </li>
                                <li>
                                    <a href={route('servicio6')}>Material Pop, Posters, Electrostaticos, Banners y Tentcard</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <a href=""><h4 className="fonth4">Nosotros</h4></a>
                    <div className="divCenter">
                        <div>
                            <ul>
                                <li>
                                    <a href={route('servicioContacto')}>Contacto</a>
                                </li>
                                <li>
                                    <a href={route('servicioBlogs')}>Blogs</a>
                                </li>
                                <li>
                                    <a href={route('politicas')}>Política de Privacidad</a>
                                </li>
                                <li>
                                    <a href={route('terminos')}>Términos y Condiciones</a>
                                </li>
                                <li>
                                    <a href={route('PregFrecuentes')}>Preguntas Frecuentes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="redesFooter">
                            <a href="https://www.facebook.com/MagicPopOficial"><picture><img src={RedesSoci.Facebook} alt="Facebook Redes" title="Facebook Redes" loading="lazy"/></picture></a>
                            <a href="https://www.instagram.com/magicpopmxvinil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><picture><img src={RedesSoci.Instagram} alt="Instagram Redes" title="Instagram Redes" loading="lazy"/></picture></a>
                            <a href="https://www.tiktok.com/@magicpopviniles?_t=8r2T2yKiCMX&_r=1"><picture><img src={RedesSoci.TikTok} alt="TikTok Redes" title="TikTok Redes" loading="lazy"/></picture></a>
                            <a href="https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Decoracion,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?" target="_blanck"><picture><img src={RedesSoci.WhatsB} alt="Whats Redes" title="Whats Redes" loading="lazy"/></picture></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divCenter">
                <small>©2024 <a href={route("home")} >Magic Pop</a></small>
            </div>
        </footer>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMCWZZDW"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        </>
    );
}
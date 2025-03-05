import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { R as RedesSoci, I as Icons } from "./UsoGeneral-Ddt5WNia.js";
import { G as GaleContenidosDigitales, a as GaleContenidoDigital, b as GaleCreaci_nContenidosDigitales, c as GalePublicidadContenido } from "./Publicidad-de-contenido-cOkoE5gI.js";
import { C as CreadorLogos, D as Dise_oLogotipos, l as logotipos, M as MDTECH } from "./MD-TECH-Imagen-de-pop-decoracion-de-negocios-CDoboPqA.js";
import { M as MuckupCuadrosCanvas, a as MuckupTupperware, R as RenderFashionCristal, b as RenderPeceraArcos } from "./Render-pecera-los-arcos2-BbrAP_nr.js";
import { M as MontajeEdicionFotografia, a as MontajeEdicionFo, E as Edicion, b as Montaje } from "./Montaje-y-edicion-de-fotografia-4-B9hiZRaK.js";
import { I as ImpresionVinilAdherible, V as VinilesAdheribles, a as VinilesAutoadheribles, b as ViniloAdhesivo, c as VinilosDecorativos$1, d as VinilosParaPared, e as VinilAdhesivoo } from "./Vinil-adhesivo-CvkzWk9s.js";
import { V as VinilAdherible } from "./Vinil-adherible-DZ7BYrKJ.js";
import { I as Impresi_nPapelFotografico, a as Impresi_nPapelFotograficoColocacion, b as ImpresionFotograficaListo } from "./Impresion-fotografica-CZjg6UP3.js";
import { V as VinilMicroperforado } from "./vinil-microperforado1-B7UrUcQY.js";
import { I as ImpresionDigitalTela, P as PlacardTela, T as TelaImpresionDigital } from "./Tela-para-impresion-digital-DdYmiw6z.js";
import { I as Impresi_nCanvas, a as Impresi_nLienzo, C as CuadrosCanvas, P as PinturasLienzo } from "./Pinturas-en-lienzo-pHd8PHkU.js";
import { R as RecorteVinil, C as CorteVinil, V as VinilRecorte } from "./Vinil-de-recorte-DU0LWZcb.js";
import { C as CorteVinilTextil, a as CorteTextilVinil, b as CorteViniloTextil } from "./Corte-vinilotextil-D13ceVz2.js";
import { I as ImpresionStickers, a as ImpresionEtiquetasAdhesivas, b as ImpresionEtiquetas } from "./Impresion-de-etiquetas-Bgk3Tl_s.js";
import { R as RotularCoche, a as RotulosParaCarros } from "./Rotulos-para-carros-Cl3mHd5K.js";
import { S as SalidaEmergenciaSenal, a as SenaleticaSeguridad, b as SenalizacionEmergencia } from "./Senalizacion-de-emergencia-BY6C8bNp.js";
import { S as SenaleticaSalidaEmergencia, a as SenalamientosNegocios, b as SenaleticaRutaEvacuacion, c as SenaleticaOficina } from "./Senaletica-oficina-ChKJ4Dvq.js";
import { M as MicroperforadoVinil, V as VinilMicroperforadoo } from "./Vinil-microperforado-D8XQ1XNl.js";
const CreatividadDiseno = "/build/assets/creaci%C3%B3n-de-logos-cdmx-CVTspWEx.webp";
const ImpresiónPapelFotográficoCdmx = "/build/assets/impresi%C3%B3n-en-papel-fotogr%C3%A1fico-cdmx-lmvvqa_L.webp";
const InstalaciónViniloMaterial = "/build/assets/instalaci%C3%B3n-de-vinilo-cdmx-DMLOpAJ7.webp";
const RecorteVinilRotulacion = "/build/assets/Recorte-de-vinil-y-rotulacion-BNWzhYUR.webp";
const VinilosDecorativos = "/build/assets/vinilos-decorativos-para-pared-cdmx-Dx9yAR6O.webp";
const Banner = {
  CreatividadDiseno,
  ImpresiónPapelFotográficoCdmx,
  InstalaciónViniloMaterial,
  RecorteVinilRotulacion,
  VinilosDecorativos
};
function Tarjeta2({ Img, children, Clases, Id, Alt, openModal }) {
  const imgRef = useRef(null);
  const h3Ref = useRef(null);
  function Zoom() {
    if (imgRef.current && h3Ref.current) {
      imgRef.current.style.transform = "scale(1.4)";
      h3Ref.current.style.top = "120%";
    }
  }
  function Normal() {
    if (imgRef.current && h3Ref.current) {
      imgRef.current.style.transform = "scale(1)";
      h3Ref.current.style.top = "75%";
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("button", { type: "button", className: Clases, onClick: openModal, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: Img,
        alt: Alt,
        ref: imgRef,
        title: Alt,
        onMouseMoveCapture: Zoom,
        onMouseOutCapture: Normal
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "h3", ref: h3Ref, children: /* @__PURE__ */ jsx("strong", { children }) })
  ] }) });
}
function Buton1({ clases, ...props }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("button", { type: "button", className: "Buton1 " + clases, ...props, children: "X" }) });
}
function Buton0({ clases, URL, children, ...props }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "Buton0 " + clases,
      onClick: () => window.location.href = route(URL),
      ...props,
      children
    }
  ) });
}
function ServisesFlot({ Id, Titulo, Img, isOpen, closeModal, ButonUrl, ButonTit }) {
  const containerRef = useRef(null);
  const rectRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (rectRef.current && !rectRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: `servisio-flot-container ${isOpen ? "show" : ""}`, id: Id, ref: containerRef, children: /* @__PURE__ */ jsxs("div", { className: "servisio-flot", id: `info-${Id}`, ref: rectRef, children: [
    /* @__PURE__ */ jsx(Buton1, { onClick: closeModal, clases: "position-close" }),
    /* @__PURE__ */ jsxs("div", { className: "servisio-flot-carocel", children: [
      /* @__PURE__ */ jsx("h2", { className: "h2", children: Titulo }),
      /* @__PURE__ */ jsxs("div", { id: `carouselImgs${Id}`, className: "carousel slide", children: [
        /* @__PURE__ */ jsx("div", { className: "carousel-inner", children: Img.map((imagen, index) => /* @__PURE__ */ jsx("div", { className: `carousel-item ${index === 0 ? "active" : ""}`, children: /* @__PURE__ */ jsx("img", { src: imagen, alt: `img${index + 1}-${Id}`, title: `img${index + 1}-${Id}` }) }, index)) }),
        /* @__PURE__ */ jsxs("button", { className: "carousel-control-prev", type: "button", "data-bs-target": `#carouselImgs${Id}`, "data-bs-slide": "prev", children: [
          /* @__PURE__ */ jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Previous" })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "carousel-control-next", type: "button", "data-bs-target": `#carouselImgs${Id}`, "data-bs-slide": "next", children: [
          /* @__PURE__ */ jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Next" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "servisio-flot-butons", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsxs("li", { className: " redesServises", children: [
      /* @__PURE__ */ jsx(Buton0, { URL: ButonUrl, children: ButonTit }),
      /* @__PURE__ */ jsx("a", { className: "nav-link", href: "https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Decoracion,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?", target: "_blanck", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.WhatsB, alt: "Whats Redes", title: "Whats Redes" }) }) }),
      /* @__PURE__ */ jsx("a", { href: "tel:5526524180", className: "nav-link", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Icons.Telefono, alt: "telefono", title: "telefono" }) }) }),
      /* @__PURE__ */ jsx("a", { className: "nav-link", href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Icons.Correo, alt: "coreo", title: "coreo" }) }) })
    ] }) }) })
  ] }) }) });
}
const Pop4MontajeCarteles = "/build/assets/Montaje-Carteles-D5pz3URE.webp";
const Pops = {
  Pop1ContenidosDigitales: GaleContenidosDigitales,
  Pop1ContenidoDigital: GaleContenidoDigital,
  Pop1CreaciónContenidosDigitales: GaleCreaci_nContenidosDigitales,
  Pop1PublicidadContenido: GalePublicidadContenido,
  Pop2CreadorLogos: CreadorLogos,
  Pop2DiseñoLogotipos: Dise_oLogotipos,
  Pop2logotipos: logotipos,
  Pop2MDTECH: MDTECH,
  Pop3MuckupCuadrosCanvas: MuckupCuadrosCanvas,
  Pop3MuckupTupperware: MuckupTupperware,
  Pop3RenderFashionCristal: RenderFashionCristal,
  Pop3RenderPeceraArcos: RenderPeceraArcos,
  Pop4MontajeEdicionFotografia: MontajeEdicionFotografia,
  Pop4MontajeEdicionFo: MontajeEdicionFo,
  Pop4Edicion: Edicion,
  Pop4Montaje: Montaje,
  Pop1ImpresionVinilAdherible: ImpresionVinilAdherible,
  Pop1VinilesAdheribles: VinilesAdheribles,
  Pop1VinilesAutoadheribles: VinilesAutoadheribles,
  Pop1VinilAdherible: VinilAdherible,
  Pop2ImpresiónPapelFotografico: Impresi_nPapelFotografico,
  Pop2ImpresiónPapelFotograficoColocacion: Impresi_nPapelFotograficoColocacion,
  Pop2ImpresionFotograficaListo: ImpresionFotograficaListo,
  Pop2VinilMicroperforado: VinilMicroperforado,
  Pop3ImpresionDigitalTela: ImpresionDigitalTela,
  Pop3PlacardTela: PlacardTela,
  Pop3TelaImpresionDigital: TelaImpresionDigital,
  Pop4ImpresiónCanvas: Impresi_nCanvas,
  Pop4ImpresiónLienzo: Impresi_nLienzo,
  Pop4CuadrosCanvas: CuadrosCanvas,
  Pop4PinturasLienzo: PinturasLienzo,
  Pop4MontajeCarteles,
  Pop1RecorteVinil: RecorteVinil,
  Pop1CorteVinil: CorteVinil,
  Pop1VinilRecorte: VinilRecorte,
  Pop2CorteVinilTextil: CorteVinilTextil,
  Pop2CorteTextilVinil: CorteTextilVinil,
  Pop2CorteViniloTextil: CorteViniloTextil,
  Pop3ImpresionStickers: ImpresionStickers,
  Pop3ImpresionEtiquetasAdhesivas: ImpresionEtiquetasAdhesivas,
  Pop3ImpresionEtiquetas: ImpresionEtiquetas,
  Pop4RotularCoche: RotularCoche,
  Pop4RotulosParaCarros: RotulosParaCarros,
  Pop5SalidaEmergenciaSenal: SalidaEmergenciaSenal,
  Pop5SenaleticaSeguridad: SenaleticaSeguridad,
  Pop5SenalizacionEmergencia: SenalizacionEmergencia,
  Pop6SenaleticaSalidaEmergencia: SenaleticaSalidaEmergencia,
  Pop6SenalamientosNegocios: SenalamientosNegocios,
  Pop6SenaleticaRutaEvacuacion: SenaleticaRutaEvacuacion,
  Pop6SenaleticaOficina: SenaleticaOficina,
  Pop1ViniloAdhesivo: ViniloAdhesivo,
  Pop1VinilosDecorativos: VinilosDecorativos$1,
  Pop1VinilosParaPared: VinilosParaPared,
  Pop1VinilAdhesivo: VinilAdhesivoo,
  Pop2MicroperforadoVinil: MicroperforadoVinil,
  Pop2VinilMicroperforadoo: VinilMicroperforadoo
};
export {
  Banner as B,
  Pops as P,
  ServisesFlot as S,
  Tarjeta2 as T
};

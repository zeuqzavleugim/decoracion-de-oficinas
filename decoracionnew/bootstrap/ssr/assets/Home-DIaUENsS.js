import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { S as Servicios } from "./Servises-CHsXVNlY.js";
import "react";
import "axios";
import "./creación-de-renders-CQyhLBVy.js";
import "./Montaje-y-edicion-de-fotos-DOQcWlUU.js";
import "./vinil-fotografico-B1p6gkiJ.js";
import "./vinil-fotográfico-BT3fIy3f.js";
import "./tela-placard-BOZ5g-SP.js";
import "./tela-canvas-1SniH_hb.js";
import "./Recorte-de-vinil-textil-DhU0P2Uu.js";
import "./Imprimir-etiquetas-C5PJrSG5.js";
import "./Rotulacion-de-vehículos-zhhmqGNJ.js";
import "./Senaletica-exteriores-BeNWSErm.js";
import "./Senaletica-interiores-knXxYuah.js";
import "./microperforado-CtsUVRV1.js";
function Tarjeta1({ Img, children, Id, Alt, Ruta }) {
  Alt = children;
  let vista = document.getElementById(Id);
  let h3 = document.getElementById(Alt);
  function Zoom() {
    vista.style.transform = "scale(1.4)";
    h3.style.top = "120%";
  }
  function Normal() {
    vista.style.transform = "scale(1)";
    h3.style.top = "75%";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "cartUno", children: /* @__PURE__ */ jsxs("a", { href: Ruta, children: [
    /* @__PURE__ */ jsx("img", { src: Img, alt: Alt, id: Id, title: Alt, onMouseMoveCapture: Zoom, onMouseOutCapture: Normal }),
    /* @__PURE__ */ jsx("h3", { className: "h3", id: Alt, children: /* @__PURE__ */ jsx("strong", { children }) })
  ] }) }) });
}
const Vinculate = "/build/assets/VINCULATE-Dvi0ALpw.png";
const Telcel = "/build/assets/TELCEL-B0DUxjIA.png";
const Stihl = "/build/assets/STIHL-Cy131QC7.png";
const Reckitt = "/build/assets/RECKITT-D0u3rYcx.png";
const Pegalon = "/build/assets/PEGALON-C53Mc6DX.png";
const Olife = "/build/assets/Olife-CoEaDp2c.png";
const Nutrisa = "/build/assets/NUTRISA-6VgyxsbA.png";
const Md = "/build/assets/MD-SOLUCIONES-i5He3h1s.png";
const LaChoperia = "/build/assets/LA-CHOPERIA-xGJZtX3_.png";
const Ipade = "/build/assets/IPADE-DC3imeZd.png";
const Hoteles = "/build/assets/HOTELES-IBIS-CsxPrHSo.png";
const Herbalife = "/build/assets/HERBALIFE-i0itXbec.png";
const GrupoTrebol = "/build/assets/GRUPO-TREBOL-DkNFpVj-.png";
const FasionCrystals = "/build/assets/FASION-CRYSTALS-ShrQGE45.png";
const Essd = "/build/assets/ESSD-3h9gPKFV.png";
const ElBuenBife = "/build/assets/EL-BUEN-BIFE-F0b3EI3I.png";
const CreditoReal = "/build/assets/CREDITO-REAL-F2vxBCY3.png";
const CmvNgo = "/build/assets/CMV-NGO-DLHIsHuF.png";
const Colaboradores = {
  Vinculate,
  Telcel,
  Stihl,
  Reckitt,
  Pegalon,
  Olife,
  Nutrisa,
  Md,
  LaChoperia,
  Ipade,
  Hoteles,
  Herbalife,
  GrupoTrebol,
  FasionCrystals,
  Essd,
  ElBuenBife,
  CreditoReal,
  CmvNgo
};
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Decoracion de Negocios B2B" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
        /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Decoración para Negocios" }),
        /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Decoración de Negocios, Oficinas, Restaurantes y Hoteles" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Servicios" }),
        /* @__PURE__ */ jsxs("div", { className: "cartsHome", children: [
          /* @__PURE__ */ jsx(
            Tarjeta1,
            {
              Ruta: route("servicio1"),
              Img: Servicios.ServDeAltaCalidadDisenoGrafico,
              Id: "servicioUno",
              children: "Creatividad y Diseño Grafico"
            }
          ),
          /* @__PURE__ */ jsx(
            Tarjeta1,
            {
              Ruta: route("servicio2"),
              Img: Servicios.ImpresionAltaResolucionSustratosEspeciales,
              Id: "servicio2",
              children: "Impresión de Fotografia Profecional en Alta Resolución"
            }
          ),
          /* @__PURE__ */ jsx(
            Tarjeta1,
            {
              Ruta: route("servicio3"),
              Img: Servicios.ServicioAltaCallidadMontajeImplementacionCMV,
              Id: "servisio3",
              children: "Instalación de Vinil y Materiales para Decoración"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Múltiples Aplicaciones" }),
        /* @__PURE__ */ jsxs("div", { className: "cartsHome", children: [
          /* @__PURE__ */ jsx(
            Tarjeta1,
            {
              Ruta: route("servicio4"),
              Img: Servicios.CortadoraVinilCDMX,
              Id: "servicio4",
              children: "Recorte de Vinil"
            }
          ),
          /* @__PURE__ */ jsx(
            Tarjeta1,
            {
              Ruta: route("servicio5"),
              Img: Servicios.VinilDecorativoColumnas,
              Id: "aplicacion2",
              children: "Decoración con Vinil"
            }
          ),
          /* @__PURE__ */ jsx(
            Tarjeta1,
            {
              Ruta: route("home"),
              Img: Servicios.MultiplesAplicacionesBaneersCenefas,
              Id: "aplicacion3",
              children: "Material Pop"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
        /* @__PURE__ */ jsx("h3", { className: "divCenter h4", children: "Realizamos todo el proceso" }),
        /* @__PURE__ */ jsx("h4", { className: "divCenter h5", children: "Asesoramiento, Impresión e Instalación" }),
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxs("div", { className: "conInfo", children: [
            /* @__PURE__ */ jsx("h5", { className: "h4", children: "SOMOS UNA AGENCIA ESPECIALIZADA EN ESTRATEGIAS DE COMUNICACIÓN VISUAL" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { className: "PointBlue", children: "Despachos de arquitectos e inmobiliarias." }),
              /* @__PURE__ */ jsx("li", { className: "PointBlue", children: "Compañías nacionales y trasnacionales." }),
              /* @__PURE__ */ jsx("li", { className: "PointBlue", children: "Fotógrafos profesionales y diseñadores." }),
              /* @__PURE__ */ jsx("li", { className: "PointBlue", children: "Instituciones educativas." }),
              /* @__PURE__ */ jsx("li", { className: "PointBlue", children: "Plazas, negocios y locales comerciales." }),
              /* @__PURE__ */ jsx("li", { className: "PointBlue", children: "Contamos con equipos de corte e impresión de última generación." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.InstalacióndeVinilCircular, alt: "instalacion", title: "instalacion" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content1", children: [
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Vinculate, alt: "vinculate", title: "Empresa Vinculate" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.CmvNgo, alt: "CMV NGO", title: "Empresa CMV NGO" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.CreditoReal, alt: "Credito Real", title: "Empresa Credito Real" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.ElBuenBife, alt: "El Buen Bife", title: "Empresa El Buen Bife" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Essd, alt: "ESSD", title: "Empresa ESSD" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.FasionCrystals, alt: "Fasion Crystals", title: "Empresa Fasion Crystals" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.GrupoTrebol, alt: "Grupo Trebol", title: "Empresa Grupo Trebol" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Herbalife, alt: "Herbalife", title: "Empresa Herbalife" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Hoteles, alt: "Hoteles", title: "Empresa Hoteles" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Ipade, alt: "Ipade", title: "Empresa Ipade" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.LaChoperia, alt: "La Choperia", title: "Empresa La Choperia" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Md, alt: "MD", title: "Empresa MD" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Nutrisa, alt: "Nutrisa", title: "Empresa Nutrisa" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Olife, alt: "Olife", title: "Empresa Olife" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Pegalon, alt: "Pegalon", title: "Empresa Pegalon" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Reckitt, alt: "Reckitt", title: "Empresa Reckitt" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Stihl, alt: "STIHL", title: "Empresa STIHL" }),
        /* @__PURE__ */ jsx("img", { src: Colaboradores.Telcel, alt: "Telcel", title: "Empresa Telcel" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "fondo1", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};

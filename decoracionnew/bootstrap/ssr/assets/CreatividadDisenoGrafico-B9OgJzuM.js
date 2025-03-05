import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { B as Banner, S as ServisesFlot, P as Pops, T as Tarjeta2 } from "./Pops-BCzdL_16.js";
import { S as Servicios } from "./Servises-CHsXVNlY.js";
import "axios";
import "./Publicidad-de-contenido-cOkoE5gI.js";
import "./MD-TECH-Imagen-de-pop-decoracion-de-negocios-CDoboPqA.js";
import "./Render-pecera-los-arcos2-BbrAP_nr.js";
import "./Montaje-y-edicion-de-fotografia-4-B9hiZRaK.js";
import "./Vinil-adhesivo-CvkzWk9s.js";
import "./Vinil-adherible-DZ7BYrKJ.js";
import "./Impresion-fotografica-CZjg6UP3.js";
import "./vinil-microperforado1-B7UrUcQY.js";
import "./Tela-para-impresion-digital-DdYmiw6z.js";
import "./Pinturas-en-lienzo-pHd8PHkU.js";
import "./Vinil-de-recorte-DU0LWZcb.js";
import "./Corte-vinilotextil-D13ceVz2.js";
import "./Impresion-de-etiquetas-Bgk3Tl_s.js";
import "./Rotulos-para-carros-Cl3mHd5K.js";
import "./Senalizacion-de-emergencia-BY6C8bNp.js";
import "./Senaletica-oficina-ChKJ4Dvq.js";
import "./Vinil-microperforado-D8XQ1XNl.js";
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
function CreatividadDisenoGrafico() {
  const [activeModal, setActiveModal] = useState(null);
  function openModal(id) {
    setActiveModal(id);
  }
  function closeModal() {
    setActiveModal(null);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Magic Pop B2B |CreatividadyDiseñoGráfico" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Banner.CreatividadDiseno, alt: "Creatividad y diseno grafico", title: "Banner Creatividad y diseno grafico", loading: "lazy" }) }),
        /* @__PURE__ */ jsx("h1", { className: "none", children: "Creatividad y Diseño Grafico" })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "colorGr", children: /* @__PURE__ */ jsx("h2", { className: "divCenter texcenter h3", children: "PROMUEVE TUS NEGOCIOS COMERCIALES CON ESTRATEGIAS PUBLICITARIAS DE CALIDAD EN EL DISEÑO GRÁFICO QUE ATRAIGAN CLIENTES" }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        activeModal === "CreacionCont" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "CreacionCont",
            Titulo: "Creación de Contenido",
            Img: [
              Servicios.CreacionDeContenido,
              Pops.Pop1ContenidosDigitales,
              Pops.Pop1ContenidoDigital,
              Pops.Pop1CreaciónContenidosDigitales,
              Pops.Pop1PublicidadContenido
            ],
            ButonUrl: "galeriaCreacionContenido",
            ButonTit: "Galeria",
            isOpen: activeModal === "CreacionCont",
            closeModal
          }
        ),
        activeModal === "DisenoLog" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "DisenoLog",
            Titulo: "Diseño de Logos",
            Img: [
              Servicios.CreacionDeLogos,
              Pops.Pop2CreadorLogos,
              Pops.Pop2DiseñoLogotipos,
              Pops.Pop2logotipos,
              Pops.Pop2MDTECH
            ],
            ButonUrl: "galeriaDisenoLogos",
            ButonTit: "Galeria",
            isOpen: activeModal === "DisenoLog",
            closeModal
          }
        ),
        activeModal === "CreacionRend" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "CreacionRend",
            Titulo: "Creación de Renders",
            Img: [
              Servicios.CreacionDeRenders,
              Pops.Pop3MuckupCuadrosCanvas,
              Pops.Pop3MuckupTupperware,
              Pops.Pop3RenderFashionCristal,
              Pops.Pop3RenderPeceraArcos
            ],
            ButonUrl: "galeriaCreacionRenders",
            ButonTit: "Galeria",
            isOpen: activeModal === "CreacionRend",
            closeModal
          }
        ),
        activeModal === "Fotos" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "Fotos",
            Titulo: "Montaje y Edición de Fotos",
            Img: [
              Servicios.MontajeEdicionFotos,
              Pops.Pop4MontajeEdicionFotografia,
              Pops.Pop4MontajeEdicionFo,
              Pops.Pop4Edicion,
              Pops.Pop4Montaje
            ],
            ButonUrl: "galeriaMontajeEdicionFotos",
            ButonTit: "Galeria",
            isOpen: activeModal === "Fotos",
            closeModal
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "cartsHome", children: [
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.CreacionDeContenido,
            Alt: "CreacionDeContenido",
            Clases: "cartwo",
            openModal: () => openModal("CreacionCont"),
            children: "Creación de Contenido"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.CreacionDeLogos,
            Alt: "DisenoDeLogos",
            Clases: "cartwo",
            openModal: () => openModal("DisenoLog"),
            children: "Diseño de Logos"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.CreacionDeRenders,
            Alt: "CreacionDeRenders",
            Clases: "cartwo",
            openModal: () => openModal("CreacionRend"),
            children: "Creación de Renders"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.MontajeEdicionFotos,
            Alt: "MontajeEdicionFotos",
            Clases: "cartwo",
            openModal: () => openModal("Fotos"),
            children: "Montaje y Edición de Fotos"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.Creatividadydiseñografico, alt: "Creatividad y Diseno Grafico", title: "Creatividad y Diseno Grafico", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  CreatividadDisenoGrafico as default
};

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
function InstalacionVinilMaterial(params) {
  const [activeModal, setActiveModal] = useState(null);
  function openModal(id) {
    setActiveModal(id);
  }
  function closeModal() {
    setActiveModal(null);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Instalación, Vinil y Materiales Decoración" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Banner.InstalaciónViniloMaterial, alt: "Instalacion de Vinil y Materiales para Decoracion", title: "Instalacion de Vinil y Materiales para Decoracion", loading: "lazy" }) }),
        /* @__PURE__ */ jsx("h1", { className: "none", children: "Instalacion de Vinil y Materiales para Decoracion" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "colorGr", children: [
        /* @__PURE__ */ jsx("h2", { className: "divCenter texcenter h3", children: "CALIDAD PROFESIONAL EN LA INSTALACIÓN DE VINIL Y MATERIAL PARA DECORACIÓN" }),
        /* @__PURE__ */ jsx("h3", { className: "divCenter texcenter h4", children: "Instalamos en:" })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        activeModal === "InstalaVinilAdh" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "InstalaVinilAdh",
            Titulo: "Vinil Adhesivo",
            Img: [
              Servicios.InstalaciónVinil,
              Servicios.VinilAdhesivo,
              Pops.Pop1ImpresionVinilAdherible,
              Pops.Pop1VinilAdherible,
              Pops.Pop1VinilesAdheribles
            ],
            ButonUrl: "galeriaVinilAdhesivo",
            ButonTit: "Galeria",
            isOpen: activeModal === "InstalaVinilAdh",
            closeModal
          }
        ),
        activeModal === "PapelTap" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "PapelTap",
            Titulo: "Papel Tapiz",
            Img: [
              Servicios.PapeTapiz
            ],
            isOpen: activeModal === "PapelTap",
            closeModal
          }
        ),
        activeModal === "FloorGraf" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "FloorGraf",
            Titulo: "FoolGraphics",
            Img: [
              Servicios.Floorgraphics
            ],
            isOpen: activeModal === "FloorGraf",
            closeModal
          }
        ),
        activeModal === "Tapiales" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "Tapiales",
            Titulo: "Tapiales",
            Img: [
              Servicios.Tapiales
            ],
            isOpen: activeModal === "Tapiales",
            closeModal
          }
        ),
        activeModal === "LogosVolum" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "LogosVolum",
            Titulo: "Logos Volumetricos",
            Img: [
              Servicios.LogosVolumétricos
            ],
            isOpen: activeModal === "LogosVolum",
            closeModal
          }
        ),
        activeModal === "AnunciosVol" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "AnunciosVol",
            Titulo: "Anuncios Volumetricos",
            Img: [
              Servicios.MontajeCajaLuzExteriores,
              Pops.Pop4MontajeCarteles
            ],
            isOpen: activeModal === "AnunciosVol",
            closeModal
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "cartsHome", children: [
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.InstalaciónVinil,
            Alt: "IstalacionVinilAdhesivo",
            Clases: "carthre",
            openModal: () => openModal("InstalaVinilAdh"),
            children: "Vinil Adhesivo"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.PapeTapiz,
            Alt: "PapelTapiz",
            Clases: "carthre",
            openModal: () => openModal("PapelTap"),
            children: "Papel Tapiz"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.Floorgraphics,
            Alt: "FloorGrafphic",
            Clases: "carthre",
            openModal: () => openModal("FloorGraf"),
            children: "Floor Graphics"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.Tapiales,
            Alt: "Tapiales",
            Clases: "carthre",
            openModal: () => openModal("Tapiales"),
            children: "Tapiales"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.LogosVolumétricos,
            Alt: "LogosVolumetricos",
            Clases: "carthre",
            openModal: () => openModal("LogosVolum"),
            children: "Logos Volumetricos"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.MontajeCajaLuzExteriores,
            Alt: "AnunciosVolumetricos",
            Clases: "carthre",
            openModal: () => openModal("AnunciosVol"),
            children: "Anuncios Exteriores"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.InstalacióndeVinilCircular, alt: "Instalacion de Vinil", title: "Instalacion de Vinil y Material para Decoracion", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  InstalacionVinilMaterial as default
};

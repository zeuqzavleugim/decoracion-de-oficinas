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
function ImpresionGeanFormato(params) {
  const [activeModal, setActiveModal] = useState(null);
  function openModal(id) {
    setActiveModal(id);
  }
  function closeModal() {
    setActiveModal(null);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Magic Pop B2B |ImpresiónDigitalyGranFormato" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Banner.ImpresiónPapelFotográficoCdmx, alt: "Impresion Digital y Gran Formato", title: "Banner Impresion Digital y Gran Formato", loading: "lazy" }) }),
        /* @__PURE__ */ jsx("h1", { className: "none", children: "Impresion Digital y Gran Formato" })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "colorGr", children: /* @__PURE__ */ jsx("h2", { className: "divCenter texcenter h3", children: "CALIDAD FOTOGRÁFICA DE IMPRESIÓN EN ALTA RESOLUCIÓN HASTA CON 1600 DPI DE DEFINICIÓN" }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        activeModal === "VinilAdh" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "VinilAdh",
            Titulo: "Vinil Adhesivo",
            Img: [
              Servicios.VinilAdhesivo,
              Pops.Pop1ImpresionVinilAdherible,
              Pops.Pop1VinilAdherible,
              Pops.Pop1VinilesAdheribles,
              Pops.Pop1VinilesAutoadheribles
            ],
            ButonUrl: "galeriaVinilAdhesivo",
            ButonTit: "Galeria",
            isOpen: activeModal === "VinilAdh",
            closeModal
          }
        ),
        activeModal === "PapelFotog" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "PapelFotog",
            Titulo: "Papel Fotográfico",
            Img: [
              Servicios.PapelFotográfico,
              Pops.Pop2ImpresiónPapelFotografico,
              Pops.Pop2ImpresiónPapelFotograficoColocacion,
              Pops.Pop2ImpresionFotograficaListo,
              Pops.Pop2VinilMicroperforado
            ],
            ButonUrl: "galeriaPapelFotografico",
            ButonTit: "Galeria",
            isOpen: activeModal === "PapelFotog",
            closeModal
          }
        ),
        activeModal === "TelaPlaca" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "TelaPlaca",
            Titulo: "Tela Placard",
            Img: [
              Servicios.TelaPlacard,
              Pops.Pop3PlacardTela,
              Pops.Pop3TelaImpresionDigital,
              Pops.Pop3ImpresionDigitalTela
            ],
            ButonUrl: "galeriaTelaPlacard",
            ButonTit: "Galeria",
            isOpen: activeModal === "TelaPlaca",
            closeModal
          }
        ),
        activeModal === "Canvas" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "Canvas",
            Titulo: "Tela Canvas",
            Img: [
              Servicios.TelaCanvas,
              Pops.Pop4CuadrosCanvas,
              Pops.Pop4ImpresiónCanvas,
              Pops.Pop4ImpresiónLienzo,
              Pops.Pop4PinturasLienzo
            ],
            ButonUrl: "galeriaTelaCanvas",
            ButonTit: "Galeria",
            isOpen: activeModal === "Canvas",
            closeModal
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "cartsHome", children: [
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.VinilAdhesivo,
            Alt: "VinilAdhesivo",
            Clases: "cartwo",
            openModal: () => openModal("VinilAdh"),
            children: "Vinil Adhesivo"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.PapelFotográfico,
            Alt: "PapelFotografico",
            Clases: "cartwo",
            openModal: () => openModal("PapelFotog"),
            children: "Papel Fotográfico"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.TelaPlacard,
            Alt: "TelaPlacard",
            Clases: "cartwo",
            openModal: () => openModal("TelaPlaca"),
            children: "Tela Placard"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.TelaCanvas,
            Alt: "TelaCanvas",
            Clases: "cartwo",
            openModal: () => openModal("Canvas"),
            children: "Tela Canvas"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.ImpresionDigitalGranformato, alt: "Creatividad y Diseno Grafico", title: "Creatividad y Diseno Grafico", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ImpresionGeanFormato as default
};

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
function DecoracionVinil(params) {
  const [activeModal, setActiveModal] = useState(null);
  function openModal(id) {
    setActiveModal(id);
  }
  function closeModal() {
    setActiveModal(null);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Soluciones Personalizadas para Espacios" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Banner.VinilosDecorativos, alt: "Recorte de Vinil para Empresas", title: "Recorte de Vinil para Empresas", loading: "lazy" }) }),
        /* @__PURE__ */ jsx("h1", { className: "none", children: "Decoración con Vinil" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "colorGr", children: [
        /* @__PURE__ */ jsx("h2", { className: "divCenter texcenter h3", children: "DECORA TU NEGOCIO CON NUESTRAS DIFERENTES APLICACIONES DE VINIL" }),
        /* @__PURE__ */ jsx("h3", { className: "divCenter texcenter h4", children: "Decora con:" })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        activeModal === "VinilAdh" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "VinilAdh",
            Titulo: "Vinil Adhesivo",
            Img: [
              Servicios.VinilFotografico,
              Pops.Pop1ViniloAdhesivo,
              Pops.Pop1VinilosDecorativos,
              Pops.Pop1VinilosParaPared,
              Pops.Pop1VinilAdhesivo
            ],
            ButonUrl: "galeriaVinilAdhesivo",
            ButonTit: "Galeria",
            isOpen: activeModal === "VinilAdh",
            closeModal
          }
        ),
        activeModal === "Microperf" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "Microperf",
            Titulo: "Decoracion con Microperforado",
            Img: [
              Servicios.Microperforado,
              Pops.Pop2MicroperforadoVinil,
              Pops.Pop2VinilMicroperforadoo,
              Pops.Pop2VinilMicroperforado
            ],
            ButonUrl: "galeriaMicroperforado",
            ButonTit: "Galeria",
            isOpen: activeModal === "Microperf",
            closeModal
          }
        ),
        activeModal === "WallFabric" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "WallFabric",
            Titulo: "Wallfabric, Wallpaper, Papel Tapiz",
            Img: [
              Servicios.VinilosparaForrarMuebles1,
              Pops.Pop3ImpresionStickers,
              Pops.Pop3ImpresionEtiquetasAdhesivas,
              Pops.Pop3ImpresionEtiquetas
            ],
            ButonUrl: "galeriaImpresionEtiquetas",
            ButonTit: "Galeria",
            isOpen: activeModal === "WallFabric",
            closeModal
          }
        ),
        activeModal === "RotulacionVeh" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "RotulacionVeh",
            Titulo: "Rotulación de Vehículos",
            Img: [
              Servicios.RotulacionVehículos,
              Pops.Pop4RotularCoche,
              Pops.Pop4RotulosParaCarros
            ],
            ButonUrl: "galeriaRotulacionVehiculos",
            ButonTit: "Galeria",
            isOpen: activeModal === "RotulacionVeh",
            closeModal
          }
        ),
        activeModal === "SenaleticaExte" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "SenaleticaExte",
            Titulo: "Señaletica de Exteriores",
            Img: [
              Servicios.SenaleticaExteriores,
              Pops.Pop5SalidaEmergenciaSenal,
              Pops.Pop5SenaleticaSeguridad,
              Pops.Pop5SenalizacionEmergencia
            ],
            ButonUrl: "galeriaSenaleticaExterior",
            ButonTit: "Galeria",
            isOpen: activeModal === "SenaleticaExte",
            closeModal
          }
        ),
        activeModal === "SenaleticaInte" && /* @__PURE__ */ jsx(
          ServisesFlot,
          {
            Id: "SenaleticaInte",
            Titulo: "Señaletica de Exteriores",
            Img: [
              Servicios.SenaleticaInteriores,
              Pops.Pop6SenaleticaSalidaEmergencia,
              Pops.Pop6SenalamientosNegocios,
              Pops.Pop6SenaleticaRutaEvacuacion,
              Pops.Pop6SenaleticaOficina
            ],
            ButonUrl: "galeriaSenaleticaInterior",
            ButonTit: "Galeria",
            isOpen: activeModal === "SenaleticaInte",
            closeModal
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "cartsHome", children: [
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.VinilFotografico,
            Alt: "RotulacionRecorteVinil",
            Clases: "cartwo",
            openModal: () => openModal("VinilAdh"),
            children: "Vinil Adhesivo"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.Microperforado,
            Alt: "Microperforado",
            Clases: "cartwo",
            openModal: () => openModal("Microperf"),
            children: "Microperforado"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.VinilosparaForrarMuebles1,
            Alt: "WallFabric",
            Clases: "cartwo",
            openModal: () => openModal("WallFabric"),
            children: "Wall Fabric"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.RotulacionVehículos,
            Alt: "RotulacionVehículos",
            Clases: "cartwo",
            openModal: () => openModal("RotulacionVeh"),
            children: "Translúcido"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaExteriores,
            Alt: "SenaleticaExteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaExte"),
            children: "Esmerilado"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaInteriores,
            Alt: "SenaleticaInteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaInte"),
            children: "Vinil Electroestático"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaInteriores,
            Alt: "SenaleticaInteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaInte"),
            children: "Pizarrones Personalizados"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaInteriores,
            Alt: "SenaleticaInteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaInte"),
            children: "Vinil Floor Graphic"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaInteriores,
            Alt: "SenaleticaInteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaInte"),
            children: "Acabados Arquitectónicos"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaInteriores,
            Alt: "SenaleticaInteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaInte"),
            children: "Vinil Polarizado"
          }
        ),
        /* @__PURE__ */ jsx(
          Tarjeta2,
          {
            Img: Servicios.SenaleticaInteriores,
            Alt: "SenaleticaInteriores",
            Clases: "cartwo",
            openModal: () => openModal("SenaleticaInte"),
            children: "Vinil Metalizado"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.DecoraciónconVinil, alt: "Recorte de Vinil", title: "Recorte de Vinil", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  DecoracionVinil as default
};

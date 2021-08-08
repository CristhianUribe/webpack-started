import "../css/componentes.css";

// import WebPackLogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre) => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement("h1");
    h1.innerText = nombre;

    document.body.append(h1);

    // const imgs = document.createElement("img");
    // imgs.src = WebPackLogo;
    // document.body.append(imgs);
};
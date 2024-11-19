window.onload = () => {

    // Crear tarjetas
    crearTarjetas(filosofos)


    // Crear handlers para los botones de control
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click',crearNuevaTarjeta);


    //* Handlers de Ordenacion:    
    const buttons = document.getElementsByClassName("sort-btn");
    buttons[0].addEventListener("click", ordenarNombreAZ);

}

function crearTarjetas(filosofos) {

    filosofos.forEach((filosofo) => {



        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');


        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);


        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);

        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);

        //! Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);


        //* Añadimos info del país a filaInfo
        let divPais = document.createElement("div");       
        divPais.classList.add("info-pais");

        let banderaImg = document.createElement("img");
        banderaImg.setAttribute("src", filosofo.pais.bandera);
        banderaImg.setAttribute("alt", `Bandera de ${filosofo.pais.nombre}`); 

        let banderaSpan = document.createElement("span");
        banderaSpan.classList.add("pais");
        banderaSpan.textContent = filosofo.pais.nombre;

        divPais.append(banderaImg, banderaSpan);
        filaInfo.append(divPais);

        //* Añadimos info de la corriente a filaInfo
        let divCorriente = document.createElement("div");
        divCorriente.classList.add("info-corriente");
        
        let corrienteSpan = document.createElement("span");
        corrienteSpan.textContent = "Corriente: ";

        let corrienteFilosofo = document.createElement("span");
        corrienteFilosofo.textContent = filosofo.corriente;
        
        divCorriente.append(corrienteSpan, corrienteFilosofo);
        filaInfo.append(divCorriente);
        

        //* Añadimos info del arma a filaInfo
        let divArma = document.createElement("div");
        divArma.classList.add("info-arma"); 
        
        let armaSpan = document.createElement("span");
        armaSpan.textContent = "Arma: ";

        let armaFilosofo = document.createElement("span");
        armaFilosofo.textContent = filosofo.arma;

        divArma.append(armaSpan, armaFilosofo);
        filaInfo.append(divArma);


        //* Añadimos caja de habilidades
        let habilidadesDiv = document.createElement('div');
        habilidadesDiv.classList.add('skills');


        // info.append(habilidades);


        //* Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {

            //* Añadimos una caja de habilidad
            let habilidadDiv = document.createElement("div");            
            habilidadDiv.classList.add("skill");


            //* 1.Icono de habilidad
            let habilidadIcon = document.createElement("img");
            habilidadIcon.setAttribute("src", "https://via.placeholder.com/16");
            habilidadDiv.setAttribute("alt", `Icono de ${infoHabilidad.habilidad}`);

            
            //* 2.Etiqueta de habilidad
            let habilidadSpan = document.createElement("span");
            habilidadSpan.textContent = infoHabilidad.habilidad;
            
            //* 3.Barra de habilidad
            let skillBarDiv = document.createElement("div");
            skillBarDiv.classList.add("skill-bar");

            let skillBar = document.createElement("div");
            skillBar.classList.add("level");
            skillBar.setAttribute("style", `width: ${infoHabilidad.nivel / 4 * 100 }%;`) 

            skillBarDiv.append(skillBar);

            //* Poner todo dentro:
            habilidadDiv.append(habilidadIcon, habilidadSpan, skillBarDiv);
            habilidadesDiv.append(habilidadDiv); 
        }

        info.append(habilidadesDiv)
        let botonEliminar = document.createElement("div"); 

        botonEliminar.innerHTML=  "&#x2716";
        botonEliminar.classList.add("botonEliminar");

        botonEliminar.addEventListener("click", eliminarTarjeta);

        tarjeta.append(botonEliminar);


        //* Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);

    })

}

function eliminarTarjeta(e) {
    e.target.parentElement.remove();
}



function ordenarNombreAZ() {

    let tarjetas = Array.from(document.querySelectorAll('.card'));

    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    for (let tarjeta of tarjetas) {
        tarjeta.remove();
    }


    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    
    for (let tarjeta of tarjetasOrdenadas) {
        contenedor.append(tarjeta);
    }
}


function ordenarNombreZA() {


}


function crearNuevaTarjeta(event) {

    event.preventDefault();

    const habilidades = document.querySelectorAll(".create-card-form .skills");

    let nuevoFilosofo = {
        "nombre": document.querySelector('.create-card-form .nombre').value,
        "imagen": document.querySelector('.create-card-form .foto').value,
        "pais": {
            "nombre": document.querySelector('.create-card-form .pais').value,
            "bandera": document.querySelector(".create-card-form .bandera").value,
        },
        "arma": document.getElementById("weapon").value,
        "habilidades": [
            {
                "habilidad":"Sabiduría",
                "nivel": habilidades[0].value
            },
            {
                "habilidad":"Oratoria",
                "nivel": habilidades[1].value
            },
            {
                "habilidad":"Lógica",
                "nivel": habilidades[2].value
            },
            {
                "habilidad":"Innovación",
                "nivel": habilidades[3].value
            }
        ]
    };

    // Completar la función



    crearTarjetas([nuevoFilosofo]);

}

function parsearTarjetas(tarjetas){

    let filosofosParseados = [];

    for (let tarjeta of tarjetas){

        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        // Completar funció
        
        let habilidades = tarjeta.querySelectorAll('.skill');

        for (let habilidad of habilidades){
            let habilidadParaGuardar = {};
            // Completar funció
        }
        filosofosParseados.push(filosofo);
    }

    return filosofosParseados;
}

function guardarTarjetas(){

    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas',JSON.stringify(parsearTarjetas(tarjetas)));

}


function cargarTarjetas() {
}

const filosofos = [

    {

        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]

    },
    {

        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {

        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]

    },
    {

        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [
            {
                habilidad: "Sabiduría",
                nivel: 3
            },
            {
                habilidad: "Oratoria",
                nivel: 3
            },
            {
                habilidad: "Lógica",
                nivel: 3
            },
            {
                habilidad: "Innovación",
                nivel: 3
            }
        ]

    },
    {

        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [
            {
                habilidad: "Sabiduría",
                nivel: 3
            },
            {
                habilidad: "Oratoria",
                nivel: 2
            },
            {
                habilidad: "Lógica",
                nivel: 2
            },
            {
                habilidad: "Innovación",
                nivel: 3
            }
        ]
    },
    {

        nombre: "Berni",
        imagen: "./filosofos/berni.jpeg",
        pais: {
            nombre: "Alemania (nazi)",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Adiccion a las apuestas 🤑",
        arma: "Pokemon card",
        habilidades: [
            {
                habilidad: "Sabiduría",
                nivel: 1
            },
            {
                habilidad: "Oratoria",
                nivel: 4
            },
            {
                habilidad: "Lógica",
                nivel: 3
            },
            {
                habilidad: "Innovación",
                nivel: 4
            }
        ]
    },
    {

        nombre: "Albharo",
        imagen: "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-1/448278806_435270612719791_2551668111131197289_n.jpg?stp=cp0_dst-jpg_e15_q65_s120x120&_nc_cat=101&ccb=1-7&_nc_sid=6738e8&_nc_ohc=Y0ugi8b2a3kQ7kNvgF3h2x7&_nc_zt=24&_nc_ht=scontent-mad1-1.xx&_nc_gid=AfyV8DGzagJHbwY_90-VBvW&oh=00_AYDsDcaqxiLb_nZ0gkfSKm1nrEaAdRPlVSlu8SrQHjlc2g&oe=67428241",
        pais: {
            nombre: "Noruega",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "El lethal mi adiccion 🤑",
        arma: "Pala",
        habilidades: [
            {
                habilidad: "Sabiduría",
                nivel: 4
            },
            {
                habilidad: "Oratoria",
                nivel: 3
            },
            {
                habilidad: "Lógica",
                nivel: 3
            },
            {
                habilidad: "Innovación",
                nivel: 3
            }
        ]
    }
]

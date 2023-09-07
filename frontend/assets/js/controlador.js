var usuarios = [];
var msjFoto = "";
var idUsuario = '';


const mostrarContenedorMensajeria = async () => {
        let usuario = await validarUsuario('user','password');
        console.log(usuario);
        renderizarMensajeria(usuario);
        document.getElementById('login').style.display = "none";
        document.getElementById('contenedor-mensajeria').style.display = "block";
        document.getElementById('contenedor-chat').style.display = "none";
        document.getElementById('contenedor-chat').style.display = "none";
        document.getElementById('llamadas').style.display = "none";
}



const validarUsuario = async (id1, id2) => {
    let user = document.getElementById(id1).value;
    let password = document.getElementById(id2).value;

    let json = {
        "nombre": `${user}`,
        "contrasena": `${password}`
    }

    console.log("Json", json);
    let usuarioPrueba = await login(json);
    console.log(usuarioPrueba);
    return usuarioPrueba;
}


const cargarUsuarios = async () =>  {
    let respuesta = await fetch("http://localhost:3000/usuarios",
        {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        }
    );
    usuarios = await respuesta.json();
    console.log(usuarios);
}
cargarUsuarios();

const cargarMensajesConversacion = async (id) =>  {
    let respuesta = await fetch(`http://localhost:3000/conversaciones/${id}/mensajes`,
        {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        }
    );
    let mensajesConver = await respuesta.json();
    console.log(mensajesConver);
    return mensajesConver;
}


const cargarMensajesGrupo = async (id) =>  {
    let respuesta = await fetch(`http://localhost:3000/grupos/${id}/mensajes`,
        {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        }
    );
    let mensajesGrupo = await respuesta.json();
    console.log(mensajesGrupo);
    return mensajesGrupo;
}

const login = async (json) => {
    
    let respuesta = await fetch("http://localhost:3000/usuarios/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
    );
    let usuario = await respuesta.json();
    console.log(usuario);
    return usuario;
}

const cargarUsuario = async (id) =>  {
    let respuesta = await fetch(`http://localhost:3000/usuarios/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        }
    );
    let usuarioSelect = await respuesta.json();
    console.log('usuarioSelect',usuarioSelect);
    return usuarioSelect;
}

const cargarMiembrosGrupo = async (id) =>  {
    let respuesta = await fetch(`http://localhost:3000/grupos/${id}/miembros`,
        {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json",
            },
        }
    );
    let miembrosGrupo = await respuesta.json();
    console.log('miembrosGrupo',miembrosGrupo);
    return miembrosGrupo;

}

// Parametro usuario principal
const renderizarMensajeria = (usuario) => {
    idUsuario = usuario._id;
    console.log('idUSUARIO',idUsuario);
    document.getElementById('cambiar').innerHTML = '';
    let htmlMensajes = '';
    let circulo = '';
    let letra = '';
    let conver = 0;
    let grupo = 0;
    let foto = '';
    let imgHtml = crearLetra(usuario);

    usuario.conversaciones.forEach(conversacion => {
        let nombre = conversacion.nombreDestinatario;

        usuarios.forEach(usr => {
            if(nombre == usr.nombre){
                if(usr.status == 'ausente'){
                    circulo = `<div id="circulito" style="background-color: #ffff00;"></div>`
                }
                if(usr.status == 'ocupado'){
                        circulo = `<div id="circulito" style="background-color: #ff0000;"></div>`
                }
                if(usr.status == 'disponible'){
                            circulo = `<div id="circulito" style="background-color: #008f39;"></div>`
                }

                msjFoto = usr.imagen;
                console.log(msjFoto);
            }
            if(conversacion.tipo == "grupal"){
                circulo = `<div id="circulito" ></div>`
            }

        })
        if (!msjFoto) {
            foto = imgHtml;
        }else{
            foto = `<img id="mensajeria-imgUsuarios" src=${msjFoto} alt="">`
        }
        htmlMensajes +=
        `

        <div onclick="mostrarContenedorChat('${idUsuario}', '${conversacion._idDestinatario}','${conversacion._idConversacion}', '${conversacion._idGrupo}',${conversacion.idGrupo}) " id="cont-mensajes">
        <div id="msj3">${foto}</div>
                        <div id="mensajeria">
                            <div id="mensajeria-nombres"><h4>${conversacion.nombreDestinatario}</h4></div>
                            <div id="mensajeria-texto"><p>${conversacion.ultimoMensaje}</p></div>
                            ${circulo}
                            </div>
                        <div id="hora">
                            <div>${conversacion.horaUltimoMensaje}</div>
                        </div>
        </div>
        `
        msjFoto="";

    })

        document.getElementById('cambiar').innerHTML =
        `
        <div id="nav-usuario">
                    <div id="usuario"><img id="img-navSuperior" src=${usuario.imagen} alt=""></div>
                    <div id="nombre"><h4>${usuario.nombre}</h4></div>
                    <div id="users"><i class=" fa-solid fa-circle-user" style="color: #ffffff;"></i></div>
                </div>

                <div >
                    <input id="search1" type="text" placeholder="Search">
                </div>

                <div id="mensajes">
                        ${htmlMensajes}
                    </div>
        `
        
    
}

const crearLetra = (usuario) => {
    let imagenHtml = '';

    usuario.conversaciones.forEach(conversacion => {
        let nombre = conversacion.nombreDestinatario;
        let letra = "";
            usuarios.forEach(usr => {
                msjFoto = usr.imagen;
                if(nombre == usr.nombre){
                    if(msjFoto == ""){
                        letra = nombre.charAt(0);
                        console.log(letra);
                            imagenHtml = `<p id="mensajeria-imgUsuarios">${letra}</p>`;
                            // document.getElementById('msj3').innerHTML = `<p id="mensajeria-imgUsuarios">${letra}</p>`;
                            document.getElementById('mensajeria-imgUsuarios').style.paddingTop = '20px';
                        }
                    if(msjFoto == null ){
                        letra = nombre.charAt(0);
                        console.log(letra);
                            imagenHtml = `<p id="mensajeria-imgUsuarios">${letra}</p>`;
                            // document.getElementById('msj3').innerHTML = `<p id="mensajeria-imgUsuarios">${letra}</p>`;
                            document.getElementById('mensajeria-imgUsuarios').style.paddingTop = '20px';
                        }
                }
            });
            if(conversacion.tipo == "grupal"){
                letra = nombre.charAt(0);
                console.log(letra);
                    imagenHtml = `<p id="mensajeria-imgUsuarios">${letra}</p>`;
                    // document.getElementById('msj3').innerHTML = `<p id="mensajeria-imgUsuarios">${letra}</p>`;
                    document.getElementById('mensajeria-imgUsuarios').style.paddingTop = '20px';
            }
        });
    return imagenHtml;
}

const mostrarlogin = () => {
    document.getElementById('login').style.display = "block";
    document.getElementById('contenedor-mensajeria').style.display = "none";
    document.getElementById('contenedor-chat').style.display = "none";
    document.getElementById('llamadas').style.display = "none";

}

const regresarMensajeria = () => {
    document.getElementById('login').style.display = "none";
        document.getElementById('contenedor-mensajeria').style.display = "block";
        document.getElementById('contenedor-chat').style.display = "none";
        document.getElementById('msj').style.color= '#5b5fc1';
    document.getElementById('llamadas').style.display = "none";

}



const mostrarContenedorChat = async (idUsuario, idDest, idConver, idGrupo, idGrupoNum) => {
    console.log('IDGr',idGrupo);
    console.log('IDCv',idConver);
    console.log('IDDEST', idDest);
    console.log(idUsuario);

    if(idGrupoNum == null){
        renderizarChatConver(idUsuario, idDest, idConver);
    }else{
        renderizarChatGrupo(idUsuario, idConver, idGrupo);
    }
    
    document.getElementById('login').style.display = "none";
    document.getElementById('contenedor-mensajeria').style.display = "none";
    document.getElementById('contenedor-chat').style.display = "block";
}


const renderizarChatConver = async (idUsr, idDest, idConver) => {
    let letra = '';
    let destinatario = await cargarUsuario(idDest);
    let conver = await cargarMensajesConversacion(idConver);
    console.log(conver);
    console.log(destinatario);
    console.log(idUsr);
    document.getElementById('cambiar2').innerHTML = "";
    let htmlMensajes = '';
    let mensajeReceptor = '';


    conver.mensajes.forEach(mensaje => {
        if(mensaje._idEmisor == idUsr){
            htmlMensajes +=
        `
                    <div id="msj-enviado">
                            <div><p>${mensaje.mensaje}</p></div>
                    </div>
        `
        }else{
            htmlMensajes +=
            `
                        <div id="msj-recibido">
                            <div id="usuario"><img id="img-navSuperior" src=${destinatario.imagen} alt=""></div>
                            <div id="recibidos">
                            <div><p>${mensaje.mensaje}</p></div>
                            </div>
                        </div>
            `
        }


    })

    document.getElementById('cambiar2').innerHTML =
    `
                <div id="chat-nav">
                    <div id="nav">
                        <div onclick="regresarMensajeria()" id="chat-flecha"><i class="icon fa-solid fa-chevron-left"></i></div>
                        <div id="usuario"><img id="img-navSuperior" src=${destinatario.imagen} alt=""></div>
                        <div id="nombre"><h4>${destinatario.nombre}</h4></div>
                    </div>
                </div>
                <div id="chat-mensajes">
                ${htmlMensajes}
                <div>
                <div id="chat-escribirMensaje">
                    <input id="msjConver" class="input-mensaje" type="text" placeholder="Type a message">
                    <div onclick="nuevoMensajeConver('${idUsr}','${idDest}',${destinatario.id}, '${idConver}')" id="avion"><i class="fa-solid fa-paper-plane" style="color: #5b5fc1; font-size: 30px;"></i></div>
                </div>
    `
}

const renderizarChatGrupo = async (idUsr, idConver, idGrupo) => {
        let grupo = await cargarMensajesGrupo(idGrupo);
        let miembrosGrupo = await cargarMiembrosGrupo(idGrupo);
        console.log(grupo);
        console.log(miembrosGrupo);
        document.getElementById('cambiar2').innerHTML = "";
        let htmlMensajes = '';
        let img = '';
        grupo.mensajes.forEach(mensaje => {
            miembrosGrupo.miembros.forEach(miembro=>{
                if(mensaje._idEmisor==miembro._id){
                    img = miembro.imagen;
                }
            })
                if(mensaje._idEmisor == idUsr){
                    htmlMensajes +=
                `
                            <div id="msj-enviado">
                                    <div><p>${mensaje.mensaje}</p></div>
                            </div>
                `
                }else{
                    htmlMensajes +=
                    `
                                <div id="msj-recibido">
                                    <div id="usuario"><img id="img-navSuperior" src="${img}" alt=""></div>
                                    <div id="recibidos">
                                        <div><p>${mensaje.mensaje}</p></div>
                                    </div>
                                </div>
        
                    `
                }
    });


    document.getElementById('cambiar2').innerHTML +=
    `
    <div id="cambiar2">
        <div id="chat-nav">
            <div id="nav">
                <div onclick="regresarMensajeria()" id="chat-flecha"><i class="icon fa-solid fa-chevron-left"></i></div>
                <div id="usuario"><img id="img-navSuperior" src="" alt=""></div>
                <div id="nombre"><h4></h4></div>
            </div>
        </div>
        <div id="chat-mensajes">
            <div id="prueba">
                ${htmlMensajes}
            </div>
        <div>
        <div id="chat-escribirMensaje">
            <div><input id="msjGrupo" class="input-mensaje" type="text" placeholder="Type a message"><div>
            <div onclick="nuevoMensajeGrupo('${idUsr}','${idGrupo}' )" id="avion"><i class="fa-solid fa-paper-plane" style="color: #5b5fc1; font-size: 30px;"></i></div>
        </div>
    </div>
    `
}

const mostrarLlamadas = () => {
    document.getElementById('login').style.display = "none";
    document.getElementById('contenedor-mensajeria').style.display = "none";
    document.getElementById('contenedor-chat').style.display = "none";
    document.getElementById('llamadas').style.display = "block";

    document.getElementById('calls').style.color= '#5b5fc1';
}

const guardarMensajeParticular = async (json,id) => {
    
    let respuesta = await fetch(`http://localhost:3000/conversaciones/${id}/agregar-mensajes`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
    );
    let mensajeParticular = await respuesta.json();
    console.log(mensajeParticular);
}

const nuevoMensajeConver = (idUsr,idDest, idDestN, idConver) => {
    let msj = document.getElementById('msjConver').value;
    console.log(msj);
    let json = {
        "_idEmisor": `${idUsr}`,
        "_idReceptor": `${idDest}`,
        "emisor": 1,
        "receptor": `${idDestN}`,
        "mensaje": `${msj}`,
        "hora": "10:11 PM"
    }
    console.log(json);
    console.log(idConver);
    guardarMensajeParticular(json,idConver);
}

const guardarMensajeGrupo = async (json, id) => {
    let respuesta = await fetch(`http://localhost:3000/grupos/${id}/agregar-mensaje`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
    );
    let mensajeGrupo = await respuesta.json();
    console.log(mensajeGrupo);
}




const nuevoMensajeGrupo = (idUsr, id) => {
    let msj = document.getElementById('msjGrupo').value;
    console.log(msj);

    let json = {
            "_idEmisor": idUsr,
            "emisor": '',
            "receptor": null,
            "mensaje": msj,
            "hora": "10:11 PM"
    }
    console.log(json);
    guardarMensajeGrupo(json, id);
}
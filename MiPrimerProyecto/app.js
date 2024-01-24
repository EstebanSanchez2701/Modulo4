const express = require("express");//require funciona para hacer referencia al express que importe
const bodyParser = require("body-parser");

const app = express();
const puerto = 3001;
//contacto: id, nombre, apellido, celular

app.use(bodyParser.json());

app.use("/contactos", (request, response, next) => {
    console.log("Ingresa ala Middleware");
    console.log("headers: ", request.headers);
    console.log("body: ", request.body);
    next();
});


app.get("/contactos", (request, response) => {
    const contactos = [
        { id: 1, nombre: "Esteban", apellido: "Sanchez", celular: "0984682398" },
        { id: 2, nombre: "Maria", apellido: "Ruiz", celular: "0987767098" },
        { id: 3, nombre: "Isabella", apellido: "Sanchez", celular: "0912348556" }
    ];
    response.send(contactos);

});

app.post("/contactos", (req, resp) => {
    req.body.id = 99;
    resp.send(req.body);
});

app.put("/contactos/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id " , id)
    resp.send(req.body);
})

app.delete("/contactos/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id: " , id)
    resp.send();
})

app.listen(puerto, () => { //levanta un servidor web en mi pc local recibe dos parametros 1 el puerto en que se levanta y 2 la funcion que se ejecuta
    console.log("El servidor se levanto en el puerto: " + puerto);
});
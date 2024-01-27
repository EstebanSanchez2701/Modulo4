const express = require("express");//require funciona para hacer referencia al express que importe
const bodyParser = require("body-parser");

const app = express();
const puerto = 3001;

app.use(bodyParser.json());

app.use("/laptops", (request, response, next) => {
    console.log("Ingresa ala Middleware");
    console.log("headers: ", request.headers);
    console.log("body: ", request.body);
    next();
});


app.get("/laptops", (request, response) => {
    const laptops = [
        { id: 1, marca: "Lenovo", procesador: "Intel Core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 2, marca: "HP", procesador: "Intel Core i7", memoria: "16 GB", disco: "1 TB" },
        { id: 3, marca: "Huawei", procesador: "Intel Core i3", memoria: "16 GB", disco: "1 TB" },
        { id: 4, marca: "Acer", procesador: "Intel Core i7", memoria: "16 GB", disco: "2 TB" },
        { id: 5, marca: "Mac", procesador: "Intel Core i9", memoria: "16 GB", disco: "2 TB" }
    ];
    response.send(laptops);

});

app.get("/laptops/:idParam", (request, response) => {
    const id = request.params.idParam;
    console.log("id ", id)

    const laptops = [
        { id: id, marca: "Lenovo", procesador: "Intel Core i5", memoria: "16 GB", disco: "1 TB" }
    ];

    response.send(laptops);
});

app.post("/laptops", (req, resp) => {
    req.body.id = 101;
    resp.send(req.body);
});

app.put("/laptops/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id ", id)
    resp.send(req.body);
})

app.delete("/laptops/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("Se elimino el id: ", id)
    resp.send({id:id});
})

app.listen(puerto, () => { //levanta un servidor web en mi pc local recibe dos parametros 1 el puerto en que se levanta y 2 la funcion que se ejecuta
    console.log("El servidor se levanto en el puerto: " + puerto);
});
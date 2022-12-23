
const fs = require('fs');
const path = require('path');

const controlador = {

    show: (req, res) => {
        const dataCanciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));
        res.json(dataCanciones);
    },

    create: (req, res) => {
       const dataCanciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));
       const nuevaCancion = {id:req.body.id, titulo: req.body.titulo, artista: req.body.artista, tono: req.body.tono};
       dataCanciones.push(nuevaCancion);
       fs.writeFileSync("./data/repertorio.json", JSON.stringify(dataCanciones, null, 2));
       res.send("Cancion agregada al repertorio");

    },

    modify: (req, res) => {
        const {id} = req.params;
        const cancion = req.body;
        const dataCanciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));
        const index = dataCanciones.findIndex(c => c.id == id);
        dataCanciones[index] = cancion;
        fs.writeFileSync("./data/repertorio.json", JSON.stringify(dataCanciones, null, 2));
        res.send("Repertorio modificado satisfactoriamente");
        
    },
    
    erase:(req, res) => {        

        const {id} = req.params;
        const dataCanciones = JSON.parse(fs.readFileSync("./data/repertorio.json"));
        const index = dataCanciones.findIndex(c => c.id == id);
        dataCanciones.splice(index, 1);
        fs.writeFileSync("./data/repertorio.json", JSON.stringify(dataCanciones, null, 2));
        res.send("Cancion eliminada del repertorio satisfactoriamente");
    }    

}

module.exports = controlador;
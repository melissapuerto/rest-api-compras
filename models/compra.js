const mongoose = require("mongoose");
const bodyParser = require("body-parser")


const compraSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    concepto: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("Compra", compraSchema);
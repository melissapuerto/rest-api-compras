const Compra = require("../models/compra");

function createCompra(req, res) {
    console.log(req.body);
    let compra = new Compra({
        id: req.body.id,
        empresa: req.body.empresa,
        monto: req.body.monto,
        concepto: req.body.concepto,
        departamento: req.body.departamento,
        fechaCreacion: req.body.fechaCreacion
    });

    compra.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error"+error,
                code: 0
            }
            );
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 20
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Sucess",
            data: result,
            code: 10
        });
    });

} //fin de función

function updateCompra(req, res) {
    const compra_id = req.params.id;
    const data = req.body;
    Compra.findByIdAndUpdate(compra_id, data, { new: true }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            }
            );
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Sucess",
            data: result,
            code: 10
        });
    });
}

function getAllCompras(req, res) {
    Compra.find().exec((error, compras) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error"+ error,
                code: 0
            }
            );

        }
        return res.status(200).json({
            error: false,
            message: "Sucess",
            data: compras,
            code: 10
        });
    })

}

function deleteCompra(req, res) {
    const compra_id = req.params.id;
    Compra.findOneAndDelete({ id: compra_id }, (error, result) => {
        //Tarea.findByIdAndDelete(tarea_id, data, { new: true }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            }
            );
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Sucess",
            data: result,
            code: 10
        });
    });
}

module.exports = {
    createCompra,
    updateCompra,
    getAllCompras,
    deleteCompra
};

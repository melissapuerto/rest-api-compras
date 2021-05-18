const express = require("express")
const router = express.Router();
const comprasController = require("../controllers/compras-controller");

/*router.get("/", (req, res) => {
    res.send("Hola mundo..probando GET..1..2...3");
});*/

router.get("/", comprasController.getAllCompras);
router.post("/", comprasController.createCompra);
router.put("/:id", comprasController.updateCompra);
router.delete("/:id", comprasController.deleteCompra);

module.exports = router;
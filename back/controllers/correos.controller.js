// importo la conexion a mysqlConfig
import mysqldb from "../data/mysqldb.js"

// Metodo GET para obtener todos los correos
export const getAllCorreos = async (req, res) => {

    // Obtener la lista de correos y devolver al usuario su correo
    const query = 'SELECT * FROM correos';
    const [result] = await mysqldb.query(query);

    res.status(200).json({
        msg: "Lista de correos",
        success:"ok",
        query: query,
        data: result
    })
}

// Metodo GET para obtener todos los correos con los usuarios
export const getAllCorreosWithUsers = async (req, res) => {

    // Obtener la lista de correos y devolver al usuario su correo
    const query = `SELECT correos.*, 
            remitente.nombre AS remitente_nombre, 
            remitente.email AS remitente_email, 
            remitente.image AS remitente_image,
            destinatario.nombre AS destinatario_nombre, 
            destinatario.email AS destinatario_email
        FROM correos 
        JOIN usuarios AS remitente ON remitente.id = correos.remitente_id
        JOIN usuarios AS destinatario ON destinatario.id = correos.destinatario_id`;
    const [result] = await mysqldb.query(query);

    res.status(200).json({
        msg: "Lista de correos",
        success:"ok",
        query: query,
        data: result
    })
}

// Metodo POST para crear un correo
export const createCorreo = async (req, res) => {
    const {remitente_id, destinatario_id, asunto, contenido} = req.body;
    console.log(req.body)
    if (!remitente_id || !destinatario_id || !asunto || !contenido) {
        return res.status(400).json({msg: "Faltan datos obligatorios"})
    }
    
    const query = `INSERT INTO correos (remitente_id, destinatario_id, asunto, contenido) 
        VALUES (?, ?, ?, ?)`;

    const [result] = await mysqldb.query(query, [remitente_id, destinatario_id, asunto, contenido]);

    res.status(201).json({ 
        msg: "Correo creado", 
        success: "ok",
        query: query,
        count: result.length,
        data: result 
    });
}

// Metodo DELETE para borrar un correo
export const deleteCorreo = async (req, res) => {
    const {id_correo} = req.body;
    console.log(req.body)

    const query = `DELETE FROM correos WHERE correos.id = ?`;
    const [result] = await mysqldb.query(query, [id_correo]);

    res.status(201).json({ 
        msg: "Correo creado", 
        success: "ok",
        query: query,
        count: result.length,
        data: result 
    });
}

// Metodo GET para obtener un solo correo
export const getSingleCorreo = async (req, res) => {
    const {id} = req.params;
    const query = `SELECT * FROM correos WHERE id = ?`;
    const [result] = await mysqldb.query(query, [id]);

    res.status(200).json({
        msg: "Correo encontrado",
        success:"ok",
        query: query,
        data: result[0]
    })
}
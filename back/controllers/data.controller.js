import { landingData } from '../data/mockdata.js'

// Base API response template
const baseResponseApi = {
    data: [],
    msg: "Data fetched successfully",
    status: "success"
};

// Destructure data from landingData
const { hero, sections, applications, clients } = landingData;

// GET all data from the landing page
export const getLandingData = (req, res) => {
    try {
        // Clone the base response object to avoid state persistence
        const responseApi = { ...baseResponseApi };

        // Determine status code: 200 if data exists, 204 if no content
        const statusCode = landingData ? 200 : 204;

        // Update the response message and data
        responseApi.msg = "Datos obtenidos con éxito";
        responseApi.data = landingData; // Return specific parts of landingData

        // Send the response with the appropriate status code
        res.status(statusCode).json(responseApi);
    } catch (error) {
        console.error("Error:", error);

        // Handle any errors and respond with a 500 status code
        const errorResponse = { ...baseResponseApi, status: "error", msg: "Tuvimos un error al obtener la BD" };
        res.status(500).json(errorResponse);
    }
};
const axios = require('axios');

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email o password mancanti o non valide" });
    }

    try {
        const { data } = await axios.post('https://reqres.in/api/login', { email, password });
        
        if (data.token) {
            return res.json({ token: data.token });
        } else {
            return res.status(500).json({ error: "Errore interno del server" });
        }
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({ ...error.response.data });
        } else {
            return res.status(500).json({ error: "Errore durante la richiesta" });
        }
    }
};
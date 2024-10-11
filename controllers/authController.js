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

exports.userMe = async (req, res) => {
    const { token  } = req.body;    

    if (token === "QpwL5tke4Pnpja7X4") {
        res.status(200).json({
            id: 'QpwL5tke4Pnpja7X4',
            email: 'test@beije.it',
            name: 'Angelo',
            lastName: 'Test'
        })
    } else {
        res.status(400).json({
            message: "Utente non esistente"
        })
    }

}
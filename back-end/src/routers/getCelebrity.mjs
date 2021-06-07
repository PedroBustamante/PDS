import { Router } from 'express';

export const getCelebrityRouter = new Router();

getCelebrityRouter.get('/', async (req, res) => {
    const {
        query: { id },
    } = req;

    //todo: connect to database e buscar pelo identificador;
    const result = {
        name: 'Tiemi',
        category: 'e-sports',
        price: 10,
        description:
            'Tiemi é jogadora de Valorant, campeã mundial de cochilo competitivo e está na nossa plataforma para mandar aquele abraço pro seu amigo incel!',
    };

    res.json(result);
});

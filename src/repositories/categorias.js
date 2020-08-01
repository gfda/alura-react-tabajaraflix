import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServ) => {
      if (respostaDoServ.ok) {
        const resposta = await respostaDoServ.json();
        return resposta;
      }
      throw new Error('Dados inacessíveis');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServ) => {
      if (respostaDoServ.ok) {
        const resposta = await respostaDoServ.json();
        return resposta;
      }
      throw new Error('Dados inacessíveis');
    });
}

export default {
  getAllWithVideos,
  getAll,
};

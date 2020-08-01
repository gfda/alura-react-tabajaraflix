import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  fetch(`${URL_VIDEOS}?_embed=videos`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServ) => {
      if (respostaDoServ.ok) {
        const resposta = await respostaDoServ.json();
        return resposta;
      }
      throw new Error('Dados inacessíveis');
    });
}

export default {
  create,
};

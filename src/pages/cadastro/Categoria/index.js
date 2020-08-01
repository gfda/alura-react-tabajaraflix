import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { funcaoHandler, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'https://localhost:8080/categorias'
      : 'https://tabajaraflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServ) => {
        const resposta = await respostaDoServ.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={funcaoHandler}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={funcaoHandler}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={funcaoHandler}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

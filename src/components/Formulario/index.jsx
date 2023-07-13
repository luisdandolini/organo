import './styles.css';
import { CampoTexto } from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import PropTypes from 'prop-types';

Formulario.propTypes = {
  aoColaboradorCadastrado: PropTypes.func.isRequired,
};

export default function Formulario({ aoColaboradorCadastrado }) {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
  
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (e) => {
    e.preventDefault()
    aoColaboradorCadastrado ({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="https://..." 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao type="submit">
          Criar Card
        </Botao>
      </form>
    </section>
  )
}
import { useState } from 'react'
import { Banner } from './components/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('deletando colaborador')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        return {...time, corSecundaria: cor};
      }
      return time;
    }))
  }

  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {
        times.map((time, index) => {
          const colaboradoresDoTime = colaboradores.filter(colaborador => colaborador.time === time.nome);
          if (colaboradoresDoTime.length > 0) {
            return (
              <Time 
                mudarCor={mudarCorDoTime}
                key={index} 
                nome={time.nome} 
                colaboradores={colaboradoresDoTime}
                aoDeletar={deletarColaborador}
                corPrimaria={time.corPrimaria} 
                corSecundaria={time.corSecundaria} 
              />
            );
          }
          return null;
        })
      }
      <Rodape />
    </>
  )
}

export default App

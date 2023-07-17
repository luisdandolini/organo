import './styles.css';
import PropTypes from 'prop-types';
import Colaborador from '../Colaborador/index'

Time.propTypes = {
  nome: PropTypes.string.isRequired,
  corPrimaria: PropTypes.string.isRequired,
  corSecundaria: PropTypes.string.isRequired,
  colaboradores: PropTypes.array
};

export default function Time({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar, mudarCor }) {
  return(
    <section className='time' style={{backgroundColor: corSecundaria}}>
      <input 
        type="color" 
        className='input-cor'
        value={corSecundaria} 
        onChange={e => mudarCor(e.target.value, nome)}
      />
      <h3 style={{borderBottom: `4px solid ${corPrimaria}`}}>{nome}</h3>
      <div className='colaboradores'>
        {
          colaboradores.map(colaborador => {
            return(
              <Colaborador 
                key={colaborador} 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem} 
                aoDeletar={() => {aoDeletar}}
              />
            )
          })
        }
      </div>
    </section>
  )
}
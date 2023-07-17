import './styles.css';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai'

Colaborador.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};

export default function Colaborador({ nome, cargo, imagem, aoDeletar }) {
  return(
    <div className='colaborador'>
      <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
      <div className='cabecalho'>
        <img src={imagem} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}
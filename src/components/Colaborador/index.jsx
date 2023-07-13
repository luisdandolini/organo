import './styles.css';
import PropTypes from 'prop-types';

Colaborador.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};

export default function Colaborador({ nome, cargo, imagem }) {
  return(
    <div className='colaborador'>
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
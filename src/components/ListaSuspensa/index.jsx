import './styles.css';
import PropTypes from 'prop-types';

ListaSuspensa.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.array.isRequired,
  obrigatorio: PropTypes.bool.isRequired,
  aoAlterado: PropTypes.func.isRequired, 
  valor: PropTypes.string.isRequired, 
};

export default function ListaSuspensa({ label, itens, obrigatorio, aoAlterado, valor }) {
  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value)
  }

  return(
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select required={obrigatorio} value={valor} onChange={aoDigitar}>
        {itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  )
}
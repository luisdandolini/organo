import PropTypes from 'prop-types';
import './styles.css'

CampoTexto.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  obrigatorio: PropTypes.bool,
  aoAlterado: PropTypes.func.isRequired, 
  valor: PropTypes.string.isRequired, 
};

export function CampoTexto({ label, placeholder, obrigatorio, aoAlterado, valor }) {
  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value)
  }

  return(
    <div className="campo-texto">
      <label>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder} 
        required={obrigatorio} 
        onChange={aoDigitar}
        value={valor}
      />
    </div> 
  )
}


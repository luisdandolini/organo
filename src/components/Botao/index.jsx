import PropTypes from 'prop-types';
import './styles.css'

Botao.propTypes = {
  children: PropTypes.string.isRequired,
};

export default function Botao({ children }) {
  return(
    <button className='botao'>
      {children}
    </button>
  )
}
import PropTypes from 'prop-types'

const Button = ({outside, inside, text, onClick}) => {
    return (
        <button onClick={onClick}
         style={{backgroundColor:outside, color: inside}}
         className='btn'>{text} </button>
    )
}

Button.defaultProps = {
    outside:'green',
    inside:'black'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

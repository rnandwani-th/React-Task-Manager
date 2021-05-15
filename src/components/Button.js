import PropTypes from 'prop-types';


const Button = ({color, text}) => {
    return (
        <button style = {{ backgroundColor: color }} className = 'btn'> 
            {text} 
        </button>
    )
}

Button.defaultProps = { 
    color: 'aquamarine',
}

Button.propTypes = {
    test: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

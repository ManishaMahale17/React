import PropTypes from 'prop-types'
import React from 'react'

const Button = ({bgColour,text,onClickk}) => {
    
    return (
        <button style = {{backgroundColor : bgColour }} onClick = {onClickk} className = "btn">{text}</button>
    )
}
Button.defaultProps = {
    bgColour:"red"
}
Button.propTypes = {
    text : PropTypes.string,
    bgColour : PropTypes.string,
    onClickk : PropTypes.func,
}

export default Button
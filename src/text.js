import React from 'react';
import './style.css';

function text({font, Left, Top, Width, Height, FontSize}) {
    const style = {
        left: Left,
        top: Top,
        width: Width,
        height: Height,
        fontSize: FontSize
    }

    return (
        <div id='text' style={style}>{font}</div>
    )
}

text.defaultProps = {
    font: "none",
    Left: "50%",
    Top: "50%",
    Width: "500px",
    Height: "500px",
    FontSize: "20px"
}

export default text
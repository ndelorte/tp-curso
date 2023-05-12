import React from 'react';

const NovedadItem = (props) => {
    const {titulo, subtitulo, imagen, cuerpo} = props;

    return (
        <div className='a'>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html: cuerpo}}></div>
            <hr/>
        </div>
    );
}

export default NovedadItem;
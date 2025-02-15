const CardImage = ({src , alt}) => {
    const cardImageStyle = {
        minWidth: '100px',
        width: '100px'
    }

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '5px',
    }

    return (
        <div style= {cardImageStyle} >
            <img style = { imageStyle } src={src} alt={alt} />
        </div>
    )
    
}

export default CardImage;
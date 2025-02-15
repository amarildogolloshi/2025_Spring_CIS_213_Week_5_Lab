
const Header = () => {

    const headerStyle =  {
        display: 'flex',
        backgroundColor: '#f55a5a',
        color: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
    
    const headerH1Style = {
        fontSize: '1rem'
    }   
    
    const headerImgStyle = {
        width: '1rem',
        height: '1rem',
        padding: '0 0.3rem'
    }
    

    return (
        <div style={headerStyle}>
            <img style={headerImgStyle} src="./src/assets/globe_epo0hx.png" alt="Globe"></img>
            <h1 style={headerH1Style}>Travel Journal</h1>
        </div>
    )
}

export default Header 
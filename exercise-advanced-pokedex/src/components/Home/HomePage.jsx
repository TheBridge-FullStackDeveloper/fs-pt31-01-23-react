import Styled from './styles';

const HomePage = () => {

    const imagen = ["https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png"]

    return(
        <>
            <Styled.ContainerHome>
                <img src={imagen} className='mainPicture'/>
                <h2 className='welcome'>Bienvenidos al Pokedex</h2>
            </Styled.ContainerHome>
        </>
    )
}


export default HomePage
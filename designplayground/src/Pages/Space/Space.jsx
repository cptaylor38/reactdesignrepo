import React, {useEffect, useState} from 'react';
import { Container } from 'reactstrap';
import './Space.scss';
import video from '../../Assets/Images/spacevid.mp4';

const Space = () => {
    const [roverImages, setRoverImages] = useState([]);
    
    const getPhotos = async () => {
        try {
            const response = await fetch('https://frozen-citadel-68486.herokuapp.com/api/nasa/curiousity');
            const data = await response.json();
            console.log(data.photos);
            setRoverImages(data.photos);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => getPhotos(), [])

    return(
        <div className='spaceBody'>
            <nav className='navbar'>
                <p>Logo</p>
                <div>
                    <p>Link</p>
                    <p>Link</p>
                    <p>Link</p>
                </div>
            </nav>
            <Container className='spaceMain'>
                <main>
                    Stellar
                </main>
                <video loop autoPlay muted>
                    <source src={video} type='video/mp4'/>
                </video>
            </Container>
            <Container className='spaceSub'>
                <h1>Some info text</h1>
                <section>
                    <article className='rover__img__container'>{ roverImages ? 
                    roverImages.map(image => <div className='rover__img__wrapper'><img className='rover__img' key={image.id} src={image.img_src} alt={`rover image from: ${image.earth_date}`}/></div>) : null  
                    }</article> 
                </section>
            </Container>
        </div>
    )
}

export default Space;
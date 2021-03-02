import React from 'react';
import { Container } from 'reactstrap';
import './Space.scss';
import video from '../../Assets/Images/spacevid.mp4';

const Space = () => {
    return(
        <div className='spaceBody'>
            <nav className='navbar'>
                <p>Logo</p>
                <p>Link</p>
                <p>Link</p>
                <p>Link</p>
            </nav>
            <Container className='spaceMain'>
                <main>
                    Space
                </main>
                <video loop autoPlay muted>
                    <source src={video} type='video/mp4'/>
                </video>
            </Container>
        </div>
    )
}

export default Space;
import React from 'react';
import { Container } from 'reactstrap';
import './Space.scss';
import video from '../../Assets/Images/spacevid.mp4';

const Space = () => {
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
                    <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur molestiae tempore necessitatibus nisi sed eius, error officia ipsam exercitationem saepe velit, autem, nobis quia sunt odio repellendus. Blanditiis, architecto!</article>
                    <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci in temporibus eos tenetur numquam cum est, non fuga, qui architecto voluptas. Corporis magnam dignissimos soluta esse assumenda veritatis consectetur.</article>
                    <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur molestiae tempore necessitatibus nisi sed eius, error officia ipsam exercitationem saepe velit, autem, nobis quia sunt odio repellendus. Blanditiis, architecto!</article>
                    <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci in temporibus eos tenetur numquam cum est, non fuga, qui architecto voluptas. Corporis magnam dignissimos soluta esse assumenda veritatis consectetur.</article> 
                </section>
            </Container>
        </div>
    )
}

export default Space;
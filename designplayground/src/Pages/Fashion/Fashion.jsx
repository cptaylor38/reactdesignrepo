import React, {useEffect, useState} from 'react';
import './Fashion.scss';
import mModel from '../../Assets/Images/malemodel2nobg.png';
import fModel from '../../Assets/Images/modelnobg.png'
import {Navbar, NavbarBrand, NavbarText, Container} from 'reactstrap';
const Fashion = () => {
    useEffect(()=> {
        setTimeout(()=> {
            //hero image slide - thinking slide from left animation
        }, 2000)
    }, [])
    return (
        <div className='page__container__fashion'>
            <Navbar className='fashion__nav'>
                <NavbarBrand className='fashion__nav__brand'>Fashionstore</NavbarBrand>
                <NavbarText>
                    <button className='fashion__nav__btn'>Sign In</button>
                </NavbarText>
            </Navbar>
            <Container className='container__fashion__landing'>
                <section className='fashion__landing__hero__S'>
                    <h1>Fashion for EVERY occasion.</h1>
                </section>
                <section className='fashion__landing__btns__S'>
                    <button className='fl__btn-f'>F</button>
                    <button className='fl__btn-m'>M</button>
                </section>
                <section className='fashion__landing__imgs__S'>
                    <img src={fModel} className='fl__img' />
                    <img src={mModel} className='fl__img' style={{height: '60vh', alignSelf: 'flex-end'}} />
                </section>
            </Container>
        </div>
    )
}

export default Fashion;
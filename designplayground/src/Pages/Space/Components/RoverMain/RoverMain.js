import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './RoverMain.scss';

const RoverMain = (props) => {
  const [roverImages, setRoverImages] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch(
        `https://frozen-citadel-68486.herokuapp.com/api/nasa/${props.match.params.name.toLowerCase()}`
      );
      const data = await response.json();
      setRoverImages(data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getPhotos(), [props.match.params.name]);

  return (
    <Container className='spaceSub'>
      <h1>{props.match.params.name}</h1>
      <section>
        <article className='rover__img__container'>
          {roverImages
            ? roverImages.map((image) => (
                <div
                  className='rover__img__wrapper'
                  key={`wrapper-${image.id}`}
                >
                  <img
                    className='rover__img'
                    key={image.id}
                    src={image.img_src}
                    alt={`rover at: ${image.earth_date}`}
                  />
                </div>
              ))
            : null}
        </article>
      </section>
    </Container>
  );
};

export default RoverMain;

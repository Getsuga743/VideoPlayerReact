import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../../actions/index';
import '../../assets/styles/Carrousel.scss';
import playIcon from '../../assets/static/play-icon.png';
import deleteIcon from '../../assets/static/remove-icon.webp';
import addIcon from '../../assets/static/plus-icon.png';

const CarrouselItem = ({ children, item, isMyList = false, ...props }) => {
  const { id, cover, title, year, contentRating, duration } = item;
  const handleSetFavorites = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };
  const handleDeleteFavorites = () => {
    props.deleteFavorite(id);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__background' src={cover} alt={title} />
      <div className='carousel-item__details'>

        <div className='carousel-item__details--wrapper'>
          <Link to={`/player/${id}`}>
            <img src={playIcon} alt='play' />
          </Link>
          {(isMyList) ? <img src={deleteIcon} alt='add to favorites' onClick={handleDeleteFavorites} /> : <img src={addIcon} alt='add to favorites' onClick={handleSetFavorites} />}
        </div>
        <p className='carousel-item--details'>{title}</p>
        <p className='carousel-item--subtitle'>
          {`${year} ${contentRating} ${duration} Mins.`}
        </p>
      </div>
    </div>

  );
};
CarrouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite, deleteFavorite,
};
export default connect(null, mapDispatchToProps)(CarrouselItem);

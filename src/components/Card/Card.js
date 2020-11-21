import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ movie }) => {
	return (
		<div className="card-wrapper my-card col-xs-2">
			<img src={movie.img.src} className="card-image" alt={movie.img.alt} />
			<div className="overlay">
				<div>
					<h2>{`#${movie.ranking}`}</h2>
					<h1>{`${movie.title} (${movie.year})`}</h1>
				</div>
				<p>{`Distributor: ${movie.distributor}`}</p>
				<p>{`Amount: ${movie.amount}`}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
		distributor: PropTypes.string,
		year: PropTypes.number,
		amount: PropTypes.string,
		img: PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string,
		}),
		ranking: PropTypes.number,
	}).isRequired,
};

export default Card;

import React, { Component } from 'react';

import Card from '../components/Card/Card';
import './List.css';

class List extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			loading: true,
		};
	}

	async componentDidMount() {
		const movies = await fetch('../../assets/data.json');
		const moviesJSON = await movies.json();

		if (moviesJSON) {
			this.setState({
				data: moviesJSON,
				loading: false,
			});
		}
	}

	render() {
		const { data, loading } = this.state;

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="movie-container">
				{data.map((movie) => (
					<Card movie={movie} key={movie.id} />
				))}
			</div>
		);
	}
}

export default List;

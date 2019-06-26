import React from 'react';
import CurrentMarkets from './CurrentMarkets';
import EditMarket from './EditMarket';
import AddMarket from './AddMarket';
import featureList from '../utils/featureList';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import paginateHelper from '../utils/paginateHelper';

class Markets extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allMarkets: [],
			displayedMarkets: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:9000/markets').then((res) => res.json()).then((allMarkets) => {
			let displayedMarkets = paginateHelper(0, allMarkets);
			this.setState({ allMarkets, displayedMarkets });
		});
	}

	handlePageClick = ({ selected }) => {
		const allMarkets = this.state.allMarkets;
		let displayedMarkets = paginateHelper(selected, allMarkets);
		this.setState({ displayedMarkets });
	};

	render() {
		return (
			<div className={'build-contain-inner-data'}>
				<Link to={'/build/markets/add'}>
					<button>Add New Market</button>
				</Link>
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={Math.ceil(this.state.allMarkets.length / 10)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<CurrentMarkets markets={this.state.displayedMarkets} />
			</div>
		);
	}
}

export default Markets;

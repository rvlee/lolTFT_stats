/* @flow */

import React, {Fragment} from 'react';

//css
require('../css/homepage.css');

type Props = {
	list: Array<string>,
	addList: ({ item: string }) => void
};

type State = {
	val: string
}

class Index extends React.Component<Props, State> {
	state: State = {
		val: '',
	}

	onAddItem = () => {
		this.props.addList(this.state.val);
	}

	onInputChange = (event) => {
		this.setState({val: event.target.value});
	}
	render() {
		const { val } = this.state;
		const { list } = this.props;

		return (
			<Fragment>
				<div className="main">Index</div>
				<input value={val} onChange={this.onInputChange}/>
				<button onClick={this.onAddItem}>Add Item</button>
				<ul>
				{
					list.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
				</ul>
			</Fragment>
		)
	}
}

module.exports = Index

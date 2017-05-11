var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css');

class DataApp extends React.Component{
	render(){
		var rows = this.props.rowdata.map(function(row, index){
			return (
				<tr key={index}>
					<td>{row.when}</td>
					<td>{row.who}</td>
					<td>{row.description}</td>
				</tr>
			);
		});
		var headers = this.props.headers.map(function(header, index){
			return (<th key={index}>{header}</th>);
		})

		return (
			<div>
				<h2>{this.props.title}</h2>
				<table>
					<thead>
						<tr>
							{headers}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		)
	}
};

var data = [
	{
		"when": "2 minutes ago",
		"who": "Jill Dupre",
		"description": "Created new account"
	},
	{
		"when": "1 hour ago",
		"who": "Lose White",
		"description": "Added fist chapter"
	},
	{
		"when": "2 hours ago",
		"who": "Jordan Whash",
		"description": "Created new account"
	}
];
var headings = ['When', 'Who', 'Description'];
var title = "Recent Changes"
ReactDOM.render(<DataApp title={title} rowdata={data} headers={headings}/>, document.getElementById('app'));
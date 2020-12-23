import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";

export default class App extends Component {
	constructor(){
		super()//super is used so that we can acces this
		this.state = {
			robots: [],
			searchfield: ""
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
			return response.json()
		}).then(users =>{
			this.setState({robots : users})
		})
		
	}

	onSearchChange = (event) =>{// use arrow function as when this is runned in searchbox, it will think this of the input tag in searchbox so arrow function is must
		this.setState({searchfield: event.target.value}) // set state is used to seat the state to anything like here we are setting the searchfield's value to the event's value so that when it gets the searchfield value it is the event value not "" 
	}

	render() {
		const { robots , searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes( searchfield.toLowerCase().trim())
		})
		return !robots.length?
		<h1 className = "tc">LOADING............</h1>:
		(
				<div className = 'tc the_page'>
					<h1>RoboFriends</h1>
					<div className = ' searchbox'>
						<SearchBox className = "searchbox" searchChange={this.onSearchChange} />
					</div>
					<Scroll>
						<ErrorBoundary>
							<CardList robots = {filteredRobots} />
						</ErrorBoundary>
						
					</Scroll>
				</div>
		);
	}
}

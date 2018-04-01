import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component{
    constructor(){
        super()
        this.state={
            created: [],
            // createdDaily: 0,
            // createdWeekly: 0,
            // createdMonthly: 0,
            daily: '',
            weekly: '',
            monthly: ''
        }
        this.createDaily = this.createDaily.bind(this);
    }

    // componentDidMount(val){
    //     val();
    // }

    createDaily(todo){
        axios.post('/api/createDaily', {todo})
        .then(res => this.setState({created: res.data}))
        .catch(err => console.log(err));
    }

    createWeekly(todo){
        axios.post('/api/createWeekly', {todo})
        .then(res => this.setState({created: res.data}))
        .catch(err => console.log(err));
    }

    createMonthly(todo){
        axios.post('/api/createMonthly', {todo})
        .then(res => this.setState({created: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const { created,createdDaily,createdWeekly,createdMonthly,daily,weekly,monthly } = this.state;

        return(
            <div>
                <h1>Create</h1>
                <h3>Daily Task:</h3>
                <input onChange={e => this.setState({daily: e.target.value})} />
                <button onClick={e => this.createDaily(daily)}>Add Task</button>
                <h3>Weekly Task:</h3>
                <input onChange={e => this.setState({weekly: e.target.value})} />
                <button onClick={e => this.createWeekly(weekly)}>Add Task</button>
                <h3>Monthly Task:</h3>
                <input onChange={e => this.setState({monthly: e.target.value})} />
                <button onClick={e => this.createMonthly(monthly)}>Add Task</button>

            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import './CSS/todo.css';

export default class Weekly extends Component{
    constructor(){
        super()
        this.state={
            weekly: []
        }
        this.getWeekly = this.getWeekly.bind(this);
    }

    componentDidMount(){
        this.getWeekly();
    }

    getWeekly(){
        axios.get('/api/todoWeekly')
        .then(res => this.setState({weekly: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const { weekly } = this.state;

        let weeklyList = weekly.map((cur,ind) => {
            if(!cur.weekly){
                return null
            }
            else{
                return <li key={ind} className='list-item'>{cur.weekly}</li>
            }
        })

        return(
            <div className='main-div'>
                <div className='container'>
                    <h2 className='header'>Weekly</h2>

                    <ul className='list'>{weeklyList}</ul>
                </div> 
            </div>
        )
    }
}
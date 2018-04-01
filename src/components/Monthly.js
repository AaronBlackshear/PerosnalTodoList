import React, { Component } from 'react';
import axios from 'axios';
import './CSS/todo.css';

export default class Monthly extends Component{
    constructor(){
        super()
        this.state={
            monthly: []
        }
        this.getMonthly = this.getMonthly.bind(this);
    }

    componentDidMount(){
        this.getMonthly();
    }

    getMonthly(){
        axios.get('/api/todoMonthly')
        .then(res => this.setState({monthly: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const { monthly } = this.state;

        let monthlyList = monthly.map((cur,ind) => {
            if(!cur.monthly){
                return null
            }
            else{
                return <li key={ind} className='list-item'>{cur.monthly}</li>
            }
        })

        return(
            <div className='main-div'>
                <div className='container'>
                    <h2 className='header'>Monthly</h2>

                    <ul className='list'>{monthlyList}</ul>
                </div>
            </div>
        )
    }
}
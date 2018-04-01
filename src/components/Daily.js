import React, { Component } from 'react';
import axios from 'axios';
import './CSS/todo.css';

export default class Daily extends Component{
    constructor(){
        super()
        this.state={
            daily: []
        }
        this.getDailyList = this.getDailyList.bind(this);
    }

    componentDidMount(){
        this.getDailyList()
    }

    getDailyList(){
        axios.get('/api/todoDaily')
        .then(res => this.setState({daily: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const { daily } = this.state;

        let dailyList = daily.map((cur,ind) => {
            if(!cur.daily){
                return null
            }
            else{
                return <li key={ind} className='list-item'>{cur.daily}</li>
            }
        })
        
        return(
            <div className='main-div'>
                <div className='container'>
                    <h2 className='header'>Daily</h2>

                    <ul className='list'>
                        {dailyList}
                    </ul>
                </div>
            </div>
        )
    }
}
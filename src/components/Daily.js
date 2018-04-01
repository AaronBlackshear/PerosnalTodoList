import React, { Component } from 'react';
import axios from 'axios';
import './CSS/todo.css';

export default class Daily extends Component{
    constructor(){
        super()
        this.state={
            daily: [],
            flag: false,
            currentId: 0,
            newTodo: ''
        }
        this.getDailyList = this.getDailyList.bind(this);
        this.changeDailyList = this.changeDailyList.bind(this);
        this.editDailyTodo = this.editDailyTodo.bind(this);
        this.editDB = this.editDB.bind(this);

    }

    componentDidMount(){
        this.getDailyList()
    }

    getDailyList(){
        axios.get('/api/todoDaily')
        .then(res => this.setState({daily: res.data}))
        .catch(err => console.log(err));
    }

    changeDailyList(id){
        this.setState({flag: !this.state.flag, currentId: id})
    }

    editDailyTodo(val){
        this.setState({newTodo: val})
    }

    editDB(id,newTodo){
        axios.put(`/api/changeDaily/${id}`, {newTodo})
        .then(res => this.setState({daily: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const { daily,flag,currentId,newTodo } = this.state;

        let listId = daily.map((cur,ind) => {
            if(flag){
                if(currentId === ind){
                    return (<div key={ind}><input onChange={e => this.editDailyTodo(e.target.value)} />
                    <button onClick={() => this.editDB(ind + 1,this.state.newTodo)}>Confirm</button></div>);
                }
                else{
                    return null;
                }
            }
            else{
                return null
            }
        })

        let dailyList = daily.map((cur,ind) => {
            if(!cur.daily){
                return null
            }
            else{
                return <li key={ind} id={ind} className='list-item' onClick={() => this.changeDailyList(ind)}>{cur.daily}</li>
            }
        })

        console.log(newTodo)

        // let listId = daily.map((cur,ind) => {
        //     if(flag){
        //         if(currentId === ind){
        //             return <input />;
        //         }
        //         else{
        //             return null;
        //         }
        //     }
        //     else{
        //         return null
        //     }
        // })
        
        return(
            <div className='main-div'>
                <div className='container'>
                    <h2 className='header'>Daily</h2>
                    <ul className='list'>
                        {listId}
                        {dailyList}
                    </ul>
                </div>
            </div>
        )
    }
}
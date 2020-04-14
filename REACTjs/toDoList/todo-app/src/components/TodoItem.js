import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle =()=>{
        // if (this.props.todo.completed){
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }

        return{
            bacground: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
 
//Custom method (create as needed) hence no access to this(Undifined., thus binding (or some other ArtForm*) is required.   ===== 
//Thus, in render:  <input type="checkbox" onChange={this.markComplete.bind(this)} /> {' '}   ESLEuCANuse: an Arrow Function.
   

    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {' '}
                    {title }
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}



//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodos: PropTypes.func.isRequired
}
 
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
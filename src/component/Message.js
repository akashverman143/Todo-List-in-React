import React from "react";
import '../App.css';

class Message extends React.Component {


render() {
        const {details, index} = this.props;

        return (
            <li className="todoList">
                <input type="checkbox" checked={details.checked ? true : false } onChange = {() => {this.props.handleChange(details) }}/>
                <span className={details.checked ? 'toggleCheck': ''}>{details.text}</span>
                <input type="button" id="delete"  value="delete"  onClick={() => {this.props.handleDelete(index)}}/>
            </li>
        )
    }
}

export default Message;
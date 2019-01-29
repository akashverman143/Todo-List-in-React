import React from "react";

class InputField extends React.Component {
    createTodo(event) {
        event.preventDefault();
        // console.log('make todo');
        const todo = {
            text: this.text.value,
            'checked':false
        }
        this.props.addTodo(todo);
        this.form.reset();
    }
    render() {
        return (
            <form ref={(input)=>this.form = input} onSubmit = {(e) =>this.createTodo(e)} >
                <input type="text"  ref= {(input)=> this.text= input } placeholder="write here something .."/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default InputField;

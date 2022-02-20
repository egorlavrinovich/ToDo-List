import react, { Component } from "react";
import { render } from "react-dom";
import './search-panel.css'

export default class SearchPanel extends Component{
    state ={
        term:''
    }
    onChange = (vivod) =>{
        const term = vivod.target.value
        this.setState({term})
        this.props.Update(term)
    }
    render(){
        return (
            <input
                className="form-control search-input"
                type ="text"
                placeholder="Поиск по записям"
                onChange={this.onChange}
                />
        )
    }
}



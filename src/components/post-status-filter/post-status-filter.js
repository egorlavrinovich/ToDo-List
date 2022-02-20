import react, { Component } from "react";

export default class PostStatusFilter extends Component{
    
    render(){
        // this.buttons = [
        //     {name:'All', label:'Все'},
        //     {name:'like', label:'Понравилось'}
        // ]
        const {liky,all} = this.props
        return (
            <div className="btn-group">
                <button 
                onClick={all}
                type="button" 
                className="btn btn-info">Все</button>
                <button 
                onClick={liky}
                type="button" 
                className="btn btn-outline-secondary">Понравилось</button>
            </div>
        )
    }
}


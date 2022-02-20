import react,{Component} from "react";
import './post-add-form.css'


export default class PostAddForm extends Component{
    state = {
        Value:''
    }
    
    onValueChange = (vivod) =>{
        this.setState(()=>{
           return{Value:vivod.target.value}
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAdd(this.state.Value)
        this.setState({ // После отправки текста, обнуляем наш стейт (обнуляем инпут)
            Value:''
        })
    }
    render (){
            return (
                <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="О чём вы думаете сейчас"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        value={this.state.Value} // Котнтролируем наш компонент
                    />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
                </form>
            )
        
    }
}




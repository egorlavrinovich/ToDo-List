import react,{Component} from "react";
import './app-header.css'

export default class AppHeader extends Component{
    
    render (){
        const {liked,allPosts} = this.props
        return (
                <div className="app-header d-flex">
                    <h1>Egor LAvrinovich</h1>
                    <h2>{allPosts} записей из них понравилось {liked}</h2>
                </div>
               )
    }
}



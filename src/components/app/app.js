import react, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css'


export default class App extends Component{
    state={
        data : [
        {label: 'Going to learn', important:true, like:false, id : 1 },
        {label: 'That is good', important:false, like:false, id : 2 },
        {label: 'I need a break', important:false, like:false, id : 3 },
    ],
    term:'',
    filter:false
    }

   
    onDelete=(id)=>{
        this.setState((state)=>{
            let Id = state.data.findIndex((item)=>item.id===id)
            const newarr = [...state.data.slice(0,Id),...state.data.slice(Id+1)]
            return{data:newarr}
        })
    }


    onAdd = (body) =>{
        let current = this.state.data.length
        const example = [{label: body,important:false, like:false, id : ++current}]
        this.setState((state)=>{
            const newarr = [...state.data,...example]
            return{data:newarr}
        })
    }

    onToggleInportant = (id) => {
       this.setState((state)=>{
          const index = state.data.findIndex((elem)=>elem.id===id)
          let obj = {...state.data[index]}
          obj.important=!obj.important
          const newarr = [...state.data.slice(0,index),obj,...state.data.slice(index+1)]
          return({data:newarr})
       })
    }

    onToggleLikde = (id) => {
        this.setState((state)=>{
            const findElement = state.data.findIndex((item)=>item.id===id)
            // const newItem = {...state.data[findElement]}
            // newItem.like = !newItem.like
            const old = state.data[findElement] // Вариант Ивашки Петриченко 
            const newItem = {...old, like: !old.like}
            const newarr = [...state.data.slice(0,findElement),newItem,...state.data.slice(findElement+1)]
            return({data:newarr})
        })
    }

    liky = (posts,filter) =>{
        if(filter){
            return posts.filter(item=>item.like)
        }else{
            return posts
        }
    }

    Search = (item,term) =>{
        if(term.length===0){
            return item
        }

        return item.filter(items=>items.label.indexOf(term)> -1)
    }

    Update = (term) =>{
        this.setState({term:term}) 
    }

    Like = () => {
        this.setState((state)=>{
            return{filter:!state.filter}
        }) 
    }

    All = () =>{
        this.setState((state)=>{
            return{filter:false}
        }) 
    }
    

    render () {
        const liked = this.state.data.filter(item => item.like).length
        const {term,data,filter} = this.state
        const visiblePosts = this.liky(this.Search(data,term),filter)
        const allPosts= this.state.data.length
        return ( // Передаём пропс posts={data} в PostList
            <div className="app">
                <AppHeader liked = {liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel Update ={this.Update}/>
                    <PostStatusFilter liky={this.Like}
                    all={this.All}/>
                </div>
                <PostList posts={visiblePosts}
                onDelete={id=>this.onDelete(id)}
                onToggleInportant={this.onToggleInportant}
                onToggleLikde={this.onToggleLikde}/> 
                <PostAddForm onAdd = {body=>this.onAdd(body)}/>
            </div>
        )
    }
}





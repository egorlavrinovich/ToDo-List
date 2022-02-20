import react from "react";

import PostListItem from '../post-list-item'
import './post-list.css'


const PostList = ({posts,onDelete,onToggleInportant,onToggleLikde}) => { // получаем пропс с app

    const elements = posts.map((item)=>{ // key={item.id} используются для уникальности каждой строки 
                                         // Метод Map используется для обработки объектов в массиве, чтобы записать именно объекты в PostListItem и их св-ва
        const {id, ...itemProps} = item;//Раскладываем наш объект на id и всё остальное (...itemProps = item.label и item.important)
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}
                onDelete={()=>(onDelete(id))}
                onToggleInportant={()=>(onToggleInportant(id))}
                onToggleLikde={()=>(onToggleLikde(id))}
                />
            </li>
        )
        
        // return (  // В PostListItem передаём пропсы item.label и item.important
        //     <li key={item.id} className="list-group-item">  
        //         <PostListItem
        //         label={item.label}
        //         important={item.important}
        //          />
        //     </li>
        // )
    })
    
    return ( // Возвращаем преобразованные элементы ф-ции в PostList
        <ul className="app-list list-group">
           {elements}
        </ul>

    )
}

export default PostList
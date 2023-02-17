import React, {useState} from "react"
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.scss';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript React', body: 'Description'},
        {id: 3, title: 'JavaScript node.js', body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost} />
        {posts.length
            ? <PostList remove={removePost} posts={posts} title="Посты про JS" />
            : <h1 style={{textAlign: 'center'}}>Посты не обнаружены</h1>
        }

    </div>

  );
}

export default App;

import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import {useState, useEffect} from 'react';


const ArticlePage = () => {
    const [articleInfo, setArticleinfo] = useState({upvotes:0,comments:[]});

    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    
    useEffect(() =>{
        setArticleinfo({upvotes:3, comments:[]});
    },[]);
    
    if(!article){
        <NotFoundPage/>
    }

    return (
        <>
        <h1>{article.title}</h1>
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
}

export default ArticlePage;
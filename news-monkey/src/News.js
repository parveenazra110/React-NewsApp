import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [reload,setReload]=useState(true);
   
   const [totalResults,setTotalResults]=useState(0);

  
  
  useEffect(() => { 
    if(reload){
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=5`;
    const fetchData=async ()=>{
        let data=await fetch(url);
        props.setProgress(10);
        let parsedData=await data.json(); 
        props.setProgress(30);
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setLoading(false);
        setReload(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    fetchData();
    }
  }, [reload]);   

   const fetchMoreData =async () => {
        setPage(page+1);
        setReload(true);
        setLoading(false);
    };

  
  const previosBtnClick=()=>{
      console.log('previos click', page);
      setPage(page-1);
      console.log('previos click', page);
      setReload(true);
  } 

  const nextBtnClick=()=>{
      console.log('next click', page)
       setPage(page+1);
       console.log('next click', page)
       setReload(true);
  }

  return (
    <div>
      
        <h2 className="text-center my-4">News Monkey - Top Headlines</h2>
        {loading && <Spinner></Spinner>}
        <InfiniteScroll
      dataLength={totalResults}
      next={fetchMoreData}
      hasMore={totalResults> (articles!=null?articles.length:0)}
      loader={<Spinner />}
    >
         <div className="container">
        <div className="row"> 
            {articles!=null &&  articles.map((article) => (
            <div className="col-md-4">
              <NewsItem key={article.urlToImage} imageUrl={article.urlToImage} title={article.title} desc={article.description} newsLink={article.url} author={article.author} publishedAt={article.publishedAt}></NewsItem>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between"> 
            <button disabled={page==1} className="btn btn-sm btn-dark" onClick={previosBtnClick}>&larr; Previous</button>
            <button className="btn btn-dark" onClick={nextBtnClick}>Next &rarr;</button>
        </div>
        </div>
        </InfiniteScroll>
      
    </div>
  );
}

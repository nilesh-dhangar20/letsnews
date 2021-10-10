import React,{useEffect,useState} from 'react'
import NewsCard from './NewsCard';
const Sports = () => {
  
    const [title, settitle] = useState([]);
     const [load, setload] = useState(20);
     let total=20;
    const apiCall = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=2b6093b91d584c3a8bbc77e42ec46b4a&pageSize=${load}&category=sports`
          );
        const  data = await res.json();
            console.log(data.articles);
            settitle(data.articles) ;
            
           total=data.totalResults;
           console.log(total);
        }
        catch (err) {
            console.log(err);
        }
    }
useEffect(() => {
    apiCall();
}, [])
 
const setLoadSetting=()=>{
    setload(total);
    console.log(load);

  
   
}


    return (
        <>

           {title.map((val,index)=>{
               return(
                   <>
                   <NewsCard title={val.title} key={val.source.id} url={val.url} image={val.urlToImage}
                   discription={val.description} auther={val.author} publishAt={val.publishedAt} content={val.content}

                   />
                          
                   </>
               )
           })}
         
           {/* <div className=" button_div text-center mt-2 mb-3">
                   <button className="btn" onClick={setLoadSetting}>LoadMore</button>
               </div> */}
          
        </>
    )
}

export default Sports
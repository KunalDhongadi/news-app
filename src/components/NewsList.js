import React, { useContext, useEffect, useRef, useState } from "react";
import NewsItem from "./NewsItem";
import { MyContext } from "../myContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import SkeletonNewsItem from "./SkeletonNewsItem";

const NewsList = ({categoryProp, regions}) => {
  


  const parsedData = {

    "totalArticles": 75593,
    "articles": [
    {
    "title": "‘Coromandel entered loop line after green signal’: Railway Board explains sequence of events leading to Odisha train tragedy",
    "description": "Two key officials of the Railway Board — Principal Executive Director of Signalling Sandeep Mathur and Member of Operation and Business Development Jaya Varma Sinha — explained how the accident might have occurred while addressing the media on Sunday.",
    "content": "The Railway Board, while detailing the sequence of events leading to the train tragedy in Odisha’s Balasore district, said that the Coromandel Express was “not over-speeding” and received the green signal to enter a loop line on which a goods train w... [5040 chars]",
    "url": "https://indianexpress.com/article/india/odisha-train-accident-coromandel-entered-loop-line-after-green-signal-railway-board-explains-8645302/",
    "image": "https://images.indianexpress.com/2023/06/cover-odisha-tragedy.jpg",
    "publishedAt": "2023-06-04T11:24:31Z",
    "source": {
    "name": "The Indian Express",
    "url": "https://indianexpress.com"
    }
    },
    {
    "title": "How genome sequences tracked down an ancient disease",
    "description": "Scientists have traced the prehistoric trail of many major human pathogens in recent years, providing an unparalleled view of the evolution and adaptation of human pathogens. This article takes a closer at the origins of the cause of the bubonic plague.",
    "content": "June 04, 2023 04:30 pm | Updated 04:38 pm IST\nThis article is part of a fortnightly column exploring contemporary concepts and issues in genetics.\nThe ‘black death’, or the Great Plague, of the 14th century was one of the deadliest epidemics in human... [6347 chars]",
    "url": "https://www.thehindu.com/sci-tech/science/deep-genome-sequencing-yersinia-pestis-plague-history/article66930505.ece",
    "image": "https://th-i.thgim.com/public/sci-tech/science/73oatl/article66930494.ece/alternates/LANDSCAPE_1200/The_Triumph_of_Death_by_Pieter_Bruegel_the_Elder.jpg",
    "publishedAt": "2023-06-04T11:00:00Z",
    "source": {
    "name": "The Hindu",
    "url": "https://www.thehindu.com"
    }
    },
    {
    "title": "Manipur violence: Amit Shah's ‘sincerest appeal’ as Centre forms 3-member panel",
    "description": "The Union home minister has formed a three-member panel to probe Manipur ethnic violence. | Latest News India",
    "content": "The Union home minister has formed a three-member committee to probe Manipur ethnic violence even as home minister Amit Shah on Sunday appealed to the people of the northeastern state to lift the blockades on the Imphal-Dimapur national highway. Unio... [2111 chars]",
    "url": "https://www.hindustantimes.com/india-news/manipur-violence-amit-shahs-centre-mha-forms-3-member-panel-probe-ethic-clashes-101685875264217.html",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/ANI-20230601181-0_1685875957542_1685875977892.jpg",
    "publishedAt": "2023-06-04T10:55:54Z",
    "source": {
    "name": "Hindustan Times",
    "url": "https://www.hindustantimes.com"
    }
    },
    {
    "title": "OFFICIAL: Karim Benzema leaves Real Madrid",
    "description": "The attacker will play his last match as a madridista today.",
    "content": "It’s official. Real Madrid have announced the departure of legendary attacker Karim Benzema via an announcement published on the official website. Real Madrid will hold a special tribute ceremony this Tuesday at noon (local time).\nReal Madrid Footbal... [3035 chars]",
    "url": "https://www.managingmadrid.com/2023/6/4/23748396/benzema-real-madrid-departure-2023",
    "image": "https://cdn.vox-cdn.com/thumbor/bCqDgSWEk9PziFYIpLSwUvYPUJI=/0x263:3675x2187/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24701495/1493540019.jpg",
    "publishedAt": "2023-06-04T10:03:03Z",
    "source": {
    "name": "Managing Madrid",
    "url": "https://www.managingmadrid.com"
    }
    },
    {
    "title": "Naseeruddin Shah says he uses Filmfare awards as door handles for washroom",
    "description": "Naseeruddin Shah admitted that he uses his Filmfare awards as door handles in the washroom of his farmhouse in a new interview. | Bollywood",
    "content": "Naseeruddin Shah is one of the most acclaimed actors of the industry, having won multiple awards for his performances over the years. In a new interview, the veteran actor revealed that he doesn't take these awards seriously and said that he uses his... [2340 chars]",
    "url": "https://www.hindustantimes.com/entertainment/bollywood/naseeruddin-shah-uses-filmfare-awards-as-door-handles-washroom-101685869959232.html",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/NaseeruddinShahpicture_1674561212095_1685870145726.jpeg",
    "publishedAt": "2023-06-04T09:42:18Z",
    "source": {
    "name": "Hindustan Times",
    "url": "https://www.hindustantimes.com"
    }
    },
    {
    "title": "You can benefit from ChatGPT to make money; here is how",
    "description": "Let us tell you that ChatGPT can be used for more than just generating content. People have found new ways to earn money from it. Know how you can benefit.",
    "content": "Wondering how to use the OpenAI's ChatGPT? Here's a quick guide if you are using this AI chatbot for the first time.\nYes indeed! You can use ChatGPT to make money! And you can unlock the many lucrative ways right from home. Chat GPT, the revolutionar... [2369 chars]",
    "url": "https://tech.hindustantimes.com/tech/news/you-can-benefit-from-chatgpt-to-make-money-here-is-how-71685870778870.html",
    "image": "https://images.hindustantimes.com/tech/img/2023/06/04/1600x900/ChatGPT_money_earning_method_1685871327476_1685871327730.jpg",
    "publishedAt": "2023-06-04T09:39:02Z",
    "source": {
    "name": "HT Tech",
    "url": "https://tech.hindustantimes.com"
    }
    },
    {
    "title": "'Signalling Issue' Behind Derailment Of Coromandel Express - Here'S What Railways, Cops Say",
    "description": "Odisha train accident: Treatment of over 1,175 injured people in the Odisha triple train accident is still ongoing as rescue operations draw to a close. As the death toll reaches 290 and the Railway Board narrows down on what happened, here's what officials have announced so far",
    "content": "Odisha train accident: Treatment of over 1,175 injured people in the Odisha triple train accident is still ongoing as rescue operations draw to a close. As the death toll reaches 290 and the Railway Board narrows down on what happened, here's what of... [484 chars]",
    "url": "https://www.cnbctv18.com/india/odisha-train-accident-signalling-issue-behind-derailment-coromandel-express-railways-cops-investigate-16844921.htm",
    "image": "https://images.cnbctv18.com/wp-content/uploads/2023/06/PTI06_03_2023_000341B-1019x573.jpg",
    "publishedAt": "2023-06-04T09:27:59Z",
    "source": {
    "name": "CNBCTV18",
    "url": "https://www.cnbctv18.com"
    }
    },
    {
    "title": "Pakistan Army, ISI trying to destroy my party, alleges Imran Khan",
    "description": "The political unrest has increased uncertainty in the nuclear-armed country of 220 million, which is also beset by financial turmoil. | World News",
    "content": "Pakistan's embattled former Prime Minister Imran Khan has accused the powerful military and its intelligence agency of openly trying to destroy his political party, saying he had \"no doubt\" he would be tried in a military court and thrown in jail. Pa... [4318 chars]",
    "url": "https://www.hindustantimes.com/world-news/former-pm-of-pakistan-imran-khan-openly-accuses-military-of-trying-to-destroy-his-party-101685869542258.html",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/PAKISTAN-POLITICS-KHAN-0_1685507756081_1685870059999.JPG",
    "publishedAt": "2023-06-04T09:16:32Z",
    "source": {
    "name": "Hindustan Times",
    "url": "https://www.hindustantimes.com"
    }
    },
    {
    "title": "Delhi girl's intestines were 'hanging out' after stabbing, finds autopsy: Report",
    "description": "Out of the 16 stab wounds in the victim's body, maximum wounds are present from the shoulder to the hip region, the sources said. | Latest News Delhi",
    "content": "The post-mortem report of the minor girl revealed that she was left with her internal organs hanging out of her stomach after being stabbed for 16 times by the accused Sahil at Shahbad Dairy area of Delhi on May 28. Delhi murder case: CCTV footage of... [2304 chars]",
    "url": "https://www.hindustantimes.com/cities/delhi-news/shahbad-dairy-murder-victim-post-mortem-report-sahil-delhi-minor-murder-101685869307120.html",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/06/04/1600x900/WhatsApp_Image_2023-05-29_at_32905_PM_1685354785698_1685869585455.jpeg",
    "publishedAt": "2023-06-04T09:15:43Z",
    "source": {
    "name": "Hindustan Times",
    "url": "https://www.hindustantimes.com"
    }
    },
    {
    "title": "Apple may provide hands-on demos of AR/VR headset at WWDC",
    "description": "San Francisco: Apple is reportedly planning to provide some developers and attendees with an opportunity to try out the new AR/VR headset (mixed reality)",
    "content": "San Francisco: Apple is reportedly planning to provide some developers and attendees with an opportunity to try out the new AR/VR headset (mixed reality) at its Worldwide Developers Conference (WWDC) 2023.\nThe company built a new “structure” at the “... [1187 chars]",
    "url": "https://www.siasat.com/apple-may-provide-hands-on-demos-of-ar-vr-headset-at-wwdc-2606498/",
    "image": "https://cdn.siasat.com/wp-content/uploads/2022/06/wwdc-2022.jpg",
    "publishedAt": "2023-06-04T08:59:00Z",
    "source": {
    "name": "The Siasat Daily",
    "url": "https://www.siasat.com"
    }
    }
  ]
    }

  const { category, setCategory, region, setRegion, language, setLanguage, bookmarks} = useContext(MyContext);

  const [newsList, setNewsList] = useState(parsedData.articles);

  let { keyword } = useParams();

  const errorMessageList = {
    200 : "No news available for the current settings. Please change to a different region/ language.",
    403 : "Apologies, The news is currently unavailable (Reached the daily API limit). Please try again later.",
    429 : "Apologies, Please try again or refresh the page."
  }
  const [errorMessage, setErrorMessage] = useState();



  const [searchParams, setSearchParams] = useSearchParams()
  const loadNews = async() => {
    if(categoryProp === "bookmarks"){
      return bookmarks;
    }else if(categoryProp === "search"){
      console.log("keyword--", searchParams.get("keyword"));
      const fetchNews = await fetch(
        `https://gnews.io/api/v4/search?q=${searchParams.get("keyword")}&country=${region}&lang=${language}&apikey=2fb85de1f3ad91456018a4bb003c4915`);
      const data = await fetchNews.json();

      return data.articles;

    }else{
      console.log("inside else loadnews")
      const fetchNews = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${categoryProp}&country=${region}&lang=${language}&apikey=2fb85de1f3ad91456018a4bb003c4915`);
      const data = await fetchNews.json();


      return data.articles;
    }
  }

  const scrollRef = useRef(null);
  const queryClient = useQueryClient();

  let query_key = [];
  if(region && language && categoryProp !== "search"){
    query_key = ["news", categoryProp, region, language];
  }else if(categoryProp === "bookmarks") {
    query_key = ["news", categoryProp];
  }else if(categoryProp === "search"){
    query_key = ["news", categoryProp, searchParams.get("keyword")]
  }

  const [readyToFetch, setReadytoFetch] = useState(false);
  console.log("ready to fetch is " , readyToFetch);
  
  useEffect(() => {
    if(region !== undefined && language !== undefined){
      setReadytoFetch(true);
      console.log("Turned true");
    }
  }, [region, language])

  const newsQuery = useQuery({
    queryKey : query_key, 
    queryFn : loadNews,
    staleTime: Infinity,
    keepPreviousData : true,
    cacheTime : Infinity,
    enabled: region !== undefined && language !== undefined,
    onError:(error) => {
      if (error.response && error.response.status === 403) {
        setErrorMessage(errorMessageList["403"]);
      } else if(error.response && error.response.status === 429){
        console.log("inside status");
        setErrorMessage(errorMessageList["429"]);
      } else{
        setErrorMessage(errorMessageList["429"]);
      }
    }
    })

    useEffect(() => {
      
      if(newsQuery.data && newsQuery.data.length < 1){
        setErrorMessage(errorMessageList["200"]);
      }
    }, [newsQuery.data])
    


    
    console.log("err", errorMessage)

  // useEffect(() => {
  //   const refetchNews = async () => {
  //     console.log("inside this refetchnews");
  //     await queryClient.prefetchQuery(query_key);
  //   };
  //   refetchNews();
  // }, [region, language])
    

  // const scrollPosition = useScrollPosition();

  // useEffect(() => {
  //   window.scrollTo(0,0);
  // }, [categoryProp]);

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/"){
      navigate('/general');
    }
  }, [navigate]);


  //update cache when bookmarks are updated 
  useEffect(() => {
    if(categoryProp !== "bookmarks"){
      queryClient.setQueryData(["news", "bookmarks"], bookmarks);
    }
  }, [bookmarks])



  useEffect(() => {
    if (scrollRef.current) {
      console.log("inside this-",queryClient.getQueryData(['scrollPosition', categoryProp]));
      scrollRef.current.scrollTop = queryClient.getQueryData(['scrollPosition', categoryProp]) || 0;
    }
  }, [categoryProp, queryClient]);


  useEffect(() => {
    if(scrollRef.current && categoryProp !== "search"){
      console.log("ok scrolling from useeffect-", scrollRef.current.scrollTop);
      // scrollRef.current.scrollTop = queryClient.getQueryData(['scrollPosition', categoryProp]) || 0;
      window.scrollTo(0, queryClient.getQueryData(['scrollPosition', categoryProp]));
    }
  }, [queryClient, categoryProp])


  useEffect(() => {
    const handleScroll = () => {
      queryClient.setQueryData(['scrollPosition', categoryProp], window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  if(newsQuery.isLoading) {
    return (
      <div>
        <SkeletonNewsItem/>
      </div>
    );
  }
      
  if(newsQuery.isError) {
    console.log("error", newsQuery.error);
    return(
      <p className="mt-8 text-center">{errorMessage}</p>
    )
  }

  let categoryTitle;
  if(categoryProp === "nation"){
    categoryTitle = Object.keys(regions).find((key) => regions[key] === region)
  }else if(categoryProp === "search"){
    categoryTitle = `Search results for - ${searchParams.get("keyword")}`
  }else{
    categoryTitle = categoryProp.charAt(0).toUpperCase() + categoryProp.slice(1);
  }

  return (
    <div id="news_list_component" ref={scrollRef}>
      <div className="py-3 mb-2 border-b border-stone-300">
        <h2 className="text-xl font-semibold text-stone-700">
          {categoryTitle}
        </h2>
      </div>
      <div className="">
        <div className="text-stone-700">
          {newsQuery.data.length > 0 ? (
            newsQuery.data.map((news) => {

              // Checking if any of the news is bookmarked
              let bookmarkObj = bookmarks;
              let isBookmarked = false;
              for(let n in bookmarkObj){
                if(bookmarkObj[n].url === news.url){
                  // console.log("yeee", news.url);
                  isBookmarked = true;
                }
              }

              return (
                <div key={news.url}>
                  <NewsItem
                    news={news} isBookmarkedProp={isBookmarked}
                  />
                </div>
              );
            })
          ) : (
            <p className="mt-8 text-center">
              {categoryTitle === "Bookmarks" ? "You have no saved bookmarks. Click on the bookmark icon to save the news."
              :
              errorMessage
              }
            </p>
          )}

          

          {/* if the loading state is true, render loading component else render ismore button if true */}
          {/* {this.state.loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary mt-4" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            this.state.isMore && (
              <div className="text-center">
                <button
                  onClick={() => this.loadMore(this.state.page + 1)}
                  type="button"
                  className="btn btn-outline-secondary m-3 mb-5"
                >
                  Load more
                </button>
              </div>
            )
          )} */}
        </div>
      </div>
    </div>
  );
}

export default NewsList


import React, { useContext, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { MyContext } from "../myContext";

const NewsItem = ({ news, isBookmarkedProp }) => {
  // console.log("bookmarks", localStorage.getItem("bookmarks"));
  // const bookmark = () => {
  //     let bookmarks = localStorage.getItem("bookmarks");
  //     if(bookmarks){
  //         const updatedBookmarks = [...bookmarks, news];
  //         localStorage.setItem("bookmarks", updatedBookmarks);
  //     }else{
  //         console.log("herer");
  //         localStorage.setItem("bookmarks", news);
  //     }
  // }

  const { bookmarks, setBookmarks } = useContext(MyContext);
  const [isBookmarked, setisBookmarked] = useState(isBookmarkedProp);

  const bookmark = () => {
    
    let bookmarksObj = bookmarks ? bookmarks : [];

    const toastClasses = "the-toast font-medium test-stone-700 bg-stone-100 border border-stone-300 rounded-none shadow-none text-center";

    if(!isBookmarked){
        const bookmarkExists = bookmarks.find((bookmark) => bookmark.url === news.url);

        if(!bookmarkExists){
          // bookmarksObj.push(news);
          bookmarksObj = [news,...bookmarksObj];
          setisBookmarked(true);
          // console.log("push" , bookmarksObj);
          toast("Added to bookmarks.", {className: toastClasses});
        }
    }else{
        setisBookmarked(false);
        bookmarksObj = bookmarksObj.filter(obj => obj.url !== news.url);
        // for(let i = 0; i < bookmarksObj.length; i++){
        //   if(bookmarksObj[i].url === news.url){
        //     bookmarksObj.splice(i,1);
        //     break;
        //   }
        // }
        console.log("filter" , bookmarksObj);
        toast("Removed from bookmarks.", {className: toastClasses});
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksObj));
    setBookmarks(bookmarksObj);
    console.log("changed", JSON.parse(localStorage.getItem("bookmarks")));

    console.log("bookmarks newsitem", bookmarks);
  };

  const formatTime = (timestamp) => {
    const currentDate = new Date();
    const date = new Date(timestamp);

    const timeDifference = currentDate.getTime() - date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return minutes + " minutes ago";
    } else if (hours < 2 ) {
      return hours + " hour ago";
    } else if (hours < 24) {
      return hours + " hours ago";
    } else if (days < 2){
      return days + " day ago";
    } else{
      return days + " days ago"
    }
  };

  console.log("This re-rendered- nwesitems");

  const tooltipRef = useRef(null);

  
  const show_Tooltip = () => {
    tooltipRef.current.style.display = 'block';
  };

  const hideTooltip = () => {
    tooltipRef.current.style.display = 'none';
  };

  // const tooltipContent = useMemo(() => {
  //   return(
  //     <div ref={tooltipRef} class={`absolute z-10 hidden inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm  tooltip dark:bg-gray-700`}>
  //     Tooltip on left
  //   </div>
  //   )
  // },[showTooltip]);
  return (
    <>
      <div className="relative border-b border-stone-300">
        {/* <div className="bg-contain bg-right bg-no-repeat" style={{ backgroundImage: `url(${imageUrl})`}}> */}
        {/* <img src={news.image} alt="" className="absolute z-0 h-1/2 right-20" /> */}
        <div className="flex flex-col sm:flex-row relative z-10 py-4">
          <div className="sm:hidden p-2 border border-stone-300 flex">
            <img src={news.image} className="h-60 object-cover w-full z-10" alt={news.title} />
          </div>
          <div className="grow">
            <div className="p-0 mt-2 sm:mt-0">
              <a
                target="_blank"
                rel="noreferrer"
                className="block italic hover:underline"
                href={news.source.url}
              >
                {news.source.name}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={news.url}
                className="text-2xl font-semibold hover:underline"
              >
                {news.title}
              </a>
              <p className="">{news.description}</p>
              <p className="py-1">{formatTime(news.publishedAt)}</p>
            </div>
          </div>
          <div className="hidden sm:flex sm:min-w-[260px] h-fit ms-4 p-2 border border-stone-300">
            <img src={news.image} className="h-36 w-full z-10" alt={news.title} />
          </div>
          <div className="sm:ml-6 z-10">
            <div
              data-tooltip-target="tooltip-left" data-tooltip-placement="left"
              onMouseOver={() => show_Tooltip()}
              onMouseOut={() => hideTooltip()}
              className="my-2 sm:my-0 flex justify-center items-center p-2 border border-stone-300 hover:bg-stone-200 cursor-pointer group"
              onClick={bookmark}
            >
              {isBookmarked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-bookmark-fill text-stone-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-bookmark text-stone-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
              )}
              <p className="sm:hidden ms-2">{isBookmarked ? "Remove from bookmarks" : "Add to bookmark"}</p>
            </div>
            <div className="hidden sm:block">
            <div ref={tooltipRef} class={`absolute right-[46px] top-4 z-10 hidden px-3 py-2 text-sm font-medium text-black bg-stone-200 border border-stone-300 shadow-sm  tooltip dark:bg-gray-700`}>
      {isBookmarked ? "Remove from bookmarks" : "Add to bookmark"}
    </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

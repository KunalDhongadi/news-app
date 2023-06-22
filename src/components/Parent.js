import React, { useEffect, useState } from 'react'
import { MyContext } from '../myContext';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Navbar from './Navbar';
import NewsList from './NewsList';
import { Slide, ToastContainer } from 'react-toastify';

const Parent = () => {
    const regions = {
        Australia: "au",
        Brazil: "br",
        Canada: "ca",
        China: "cn",
        Egypt: "eg",
        France: "fr",
        Germany: "de",
        Greece: "gr",
        "Hong Kong": "hk",
        India: "in",
        Ireland: "ie",
        Israel: "il",
        Italy: "it",
        Japan: "jp",
        Netherlands: "nl",
        Norway: "no",
        Pakistan: "pk",
        Peru: "pe",
        Philippines: "ph",
        Portugal: "pt",
        Romania: "ro",
        "Russian Federation": "ru",
        Singapore: "sg",
        Spain: "es",
        Sweden: "se",
        Switzerland: "ch",
        Taiwan: "tw",
        Ukraine: "ua",
        "United Kingdom": "gb",
        "United States": "us",
      };
    
      const languages = {
        Arabic: "ar",
        Chinese: "zh",
        Dutch: "nl",
        English: "en",
        French: "fr",
        German: "de",
        Greek: "el",
        Hebrew: "he",
        Hindi: "hi",
        Italian: "it",
        Japanese: "ja",
        Malayalam: "ml",
        Marathi: "mr",
        Norwegian: "no",
        Portuguese: "pt",
        Romanian: "ro",
        Russian: "ru",
        Spanish: "es",
        Swedish: "sv",
        Tamil: "ta",
        Telugu: "te",
        Ukrainian: "uk",
      };
    
      const categories = [
        "general",
        "world",
        "nation",
        "business",
        "technology",
        "entertainment",
        "sports",
        "science",
        "health",
      ];

      const [category, setCategory] = useState(categories[0]);
      const [region, setRegion] = useState();
      const [language, setLanguage] = useState();
      const [bookmarks, setBookmarks] = useState([]);



      useEffect(() => {
        let regionPreference = localStorage.getItem("region");
        let languagePreference = localStorage.getItem("language");
        if(regionPreference){
          setRegion(regionPreference);
        }else{
          setRegion(regions.India);
        }

        if(languagePreference){
          setLanguage(languagePreference);
        }else{
          setLanguage(languages.English);
        }

      }, [])

      //useEffect to get the bookmarks from the local storage
      useEffect(() => {
        let storedBookmarks = localStorage.getItem("bookmarks");
        if(storedBookmarks){
          setBookmarks(JSON.parse(storedBookmarks).reverse());
        }else{
          setBookmarks([]);
        }
      }, [])
    
      // console.log("bkmsks-app.js", bookmarks);
  return (
    <MyContext.Provider
      value={{
        category,
        setCategory,
        region,
        setRegion,
        language,
        setLanguage,
        bookmarks, 
        setBookmarks
      }}
    >
      <Router>
        <Navbar
          categories={categories}
          regions={regions}
          languages={languages}
        />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-4">
          <Routes>
            <Route
              exact
              path="/bookmarks"
              key="bookmarks"
              element={
                <NewsList
                  key="bookmarks"
                  categoryProp="bookmarks"
                  regions={regions}
                />
              }
            />
            {categories.map((categoryObj) => {
              return (
                <Route
                  exact
                  path={`/${categoryObj}`}
                  key={categoryObj}
                  element={
                    <NewsList
                      key={categoryObj}
                      categoryProp={categoryObj}
                      regions={regions}
                    />
                  }
                />
              );
            })}
            <Route
              path="/search"
              element={<NewsList key="search" categoryProp="search" regions={regions} />}
            />
            <Route
              path="/"
              element={<NewsList key="general" categoryProp="general" regions={regions} />}
            />
          </Routes>
        </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        transition={Slide}
        closeOnClick={false}
        rtl={false}
        closeButton={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      </Router>
    </MyContext.Provider>
  )
}

export default Parent;
import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import PropTypes from 'prop-types'

export default class NewsList extends Component {
  static defaultProps = {
    country: "in",
    category: "",
  };

  // static PropTypes = {
  //     country : PropTypes.string
  // }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      category: "",
      loading: false,
      isMore: false,
      page: 1,
      isError: false,
    };

    if (this.props.category === "") {
      document.title = "News | All Categories";
    } else {
      document.title =
        "News | " +
        this.props.category[0].toUpperCase() +
        this.props.category.slice(1, this.props.category.length);
    }
    // document.title = this.state.category;
    // document.title = this.props.category[0].toUpperCase() + this.props.category.slice(1,this.props.category.length);
    // this.loadMore = this.loadMore.bind(this);
  }

  async componentDidMount() {
    console.log("component loaded");
    console.log("category props is- " + this.props.category);

    if (this.props.category === "") {
      this.setState({
        category: "All Categories",
      });
    } else {
      this.setState({
        category:
          this.props.category[0].toUpperCase() +
          this.props.category.slice(1, this.props.category.length),
      });
    }

    // console.log(this.state.articles);
    this.loadMore(1);
    // console.log(this.state.articles);
    // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c763b177de9b4527858c4466019bd8a5";
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // let totalSize = parsedData.totalSize;
    // console.log(parsedData);
    // this.setState({
    //     articles: parsedData.articles,
    //     loading: false,
    //     isMore: this.state.articles.length < totalSize
    // })
  }
  samplefunc = () => {
    console.log("sample function is ");
  };

  loadMore = async (page) => {
    this.setState({
      loading: true,
    });

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c763b177de9b4527858c4466019bd8a5&page=${page}&category=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.status !== "error") {
      let totalSize = await parsedData.totalResults;
      console.log("parsedData-", parsedData);
      console.log("The length-", totalSize);
      console.log(this.state.articles.length < totalSize);
      let list = this.state.articles.concat(parsedData.articles);
      console.log("The list length-", list.length);
      this.setState({
        articles: list,
        loading: false,
        page: page,
        isMore: list.length < totalSize,
      });
    } else {
      this.setState({
        loading: false,
        isMore: false,
        isError: true,
      });
      console.log("the error message- " + parsedData.message);
    }
  };

  render() {
    return (
      <div>
        <div className="bg-primary bg-opacity-10 py-2 mb-2">
          <h2 className="fs-2 text-primary container">{this.state.category}</h2>
        </div>
        <div className="container">
          <div className="row">
            {!this.state.isError ? (
              this.state.articles.map((el) => {
                let publishedDate = new Date(el.publishedAt).getTime();
                let today = new Date().getTime();
                let diff = Math.abs(today - publishedDate);

                let hours = Math.floor(diff / 1000 / 60 / 60);

                return (
                  <div key={el.url}>
                    <NewsItem
                      source={el.source.name}
                      title={el.title}
                      desc={el.description}
                      imageUrl={el.urlToImage}
                      url={el.url}
                      time={hours}
                    />
                  </div>
                );
              })
            ) : (
              <p>
                No News available due to technical reasons. (What that basically means is I'm out of API credits
                probably)
              </p>
            )}

            {/* if the loading state is true, render loading component else render ismore button if true */}
            {this.state.loading ? (
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {source, title, desc, imageUrl, url, time} = this.props;
    console.log("The image url is " + imageUrl);
    return (
        <>
        <a target="_blank" href={url} className="card-div card my-3">
            <div className="row g-0">
                <div className="col-md-9">
                    <div className="card-body p-0">
                        <p className="fs-6 text-black-50 mb-2">{source != null && source}</p>
                        <h5 className="card-title fw-semibold fs-4">{title}</h5>
                        <p className="card-text mb-2">{desc}</p>
                        <p className="fw-light text-muted">{time}{time > 1 ? (<span> hours ago</span>) : (<span> hour ago</span>)}</p>
                    </div>
                </div>
                <div className="col-md-3 ps-4">
                    <img src={imageUrl} className="image" alt="..."/>
                </div>
            </div>
        </a>
        <hr/>
        </>
    )
  }
}

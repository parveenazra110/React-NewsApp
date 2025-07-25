import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem(props) {
  return (
    <>
      <div className="card text-left my-3" style={{height:'700px'}}>
        <img
          className="card-img-top"
          src={
            props.imageUrl != null
              ? props.imageUrl
              : "https://g.foolcdn.com/editorial/images/819013/analyst_sitting_on_work_desk_with_infant_and_checking_smartphone.jpg"
          }
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            <a href={props.newsLink} target="_blank" style={{ color: "black" }}>
              {props.title}
            </a>
          </h5>
          <p className="card-text">{props.desc}</p>
          <a
            href={props.newsLink}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted">Published At - {(new Date(props.publishedAt)).toDateString()} By - {props.author}</small>
        </div>
      </div>
    </>
  );
}

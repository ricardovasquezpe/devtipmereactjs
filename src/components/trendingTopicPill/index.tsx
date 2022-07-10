import { Component } from "react";
import "./index.scss";

export function TrendingTopicPill (props: any){
    return (
        <>
            <a href="/test" className={props.className}>
                <span className="badge badge-trending">test</span>
            </a>
        </>
    );
}
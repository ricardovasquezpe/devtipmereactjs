import { Component, useEffect, useState } from "react";
import LoadingModal from "../../components/loadingModal";
import { TrendingTopicPill } from "../../components/trendingTopicPill";
import { Topic } from "../../models/topic";
import { getTrendingTopics } from "../../services/topicService";

export function HomePage (props: any){
    const [ trendingTopics, setTrendingTopics ] = useState([] as any);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        listTrendings();
        setLoading(false);
        console.log(trendingTopics);
    }, [])

    const listTrendings = () => {
        getTrendingTopics().then((response:any) => {
            let trendings: Topic[] = [];
            response.data.forEach((topic: any) => {
                trendings.push(new Topic(topic.title.toUpperCase(), topic.title, topic.total));
            });
            setTrendingTopics(trendings);
        });
    }

    return (
        <>
            <div className="container">
                <p className="sub-title">
                    TRENDING TOPICS
                </p>
                <div className="row">
                    <div className="col-sm-12">
                        {
                            trendingTopics.map((topic: any, index: any) => (
                                <TrendingTopicPill className={index != 0 && "ml-2"}></TrendingTopicPill>
                            ))
                        }
                    </div>
                </div>
                <hr/>
                <p className="sub-title">
                    LAST SOLUTIONS
                </p>
                <div className="solitions-container">
                    <div className="row">
                    </div>
                </div>
            </div>

            <LoadingModal show={loading}></LoadingModal>
        </>
    );
}
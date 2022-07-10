import { Component, useEffect, useState } from "react";
import LoadingModal from "../../components/loadingModal";
import { SolutionCard } from "../../components/solutionCard";
import { TrendingTopicPill } from "../../components/trendingTopicPill";
import { CardSolution } from "../../models/cardSolution";
import { Topic } from "../../models/topic";
import { postFindSolutions } from "../../services/solutionService";
import { getTrendingTopics } from "../../services/topicService";
import "./index.scss";

export function HomePage (props: any){
    const [ trendingTopics, setTrendingTopics ] = useState([] as any);
    const [ solutions, setSolutions ] = useState([] as any);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        listTrendings();
        findSolutions();
        setLoading(false);
        console.log(solutions);
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

    const findSolutions = () => {
        var body = {
            "text": "",
            "topic": "",
            "limit": 10,
            "offset": 0
        };

        postFindSolutions(body).then((response:any) => {
            let listSolutions: CardSolution[] = [];
            response.data.forEach((sol: any) => {
                listSolutions.push(new CardSolution(sol.encriptedId, sol.title, sol, new Date(sol.createdAt), sol.status));
            });
            setSolutions(listSolutions);
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
                            trendingTopics.map((topic: Topic, index: any) => (
                                <TrendingTopicPill className={index != 0 ? "ml-2" : ""} data={topic}></TrendingTopicPill>
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
                        {
                            solutions.map((sol: CardSolution, index: any) => (
                                <div className="col-sm-6 mb-2 card-wrap">
                                    <SolutionCard data={sol}></SolutionCard>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <LoadingModal show={loading}></LoadingModal>
        </>
    );
}
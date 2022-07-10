import { Component, useEffect, useRef, useState } from "react";
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
    let noMoreSolutions:boolean = false;
    let offset: number = 0;
    let solutionsTemp: CardSolution[] = [];

    useEffect(() => {
        setLoading(true);
        listTrendings();
        findSolutions();
        setLoading(false);
        console.log(solutions);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
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
            "offset": offset
        };

        postFindSolutions(body).then((response:any) => {
            let data = response.data;
            if(data.length == 0){
                noMoreSolutions = true;
                return;
            }
            data.forEach((solution: any) => {
                let content = getOnlyText(solution.content.filter((content: any) => content.type == 1));
                solutionsTemp.push(new CardSolution(solution.encriptedId, solution.title, content, new Date(solution.createdAt), solution.status));
            });
            console.log(solutionsTemp);
            setSolutions(solutionsTemp);
        });
    }

    const getOnlyText = (content: any): string => {
        var text = "";
        content.forEach(function(element: any) {
            text += element.content + " ";
        });
        return text;
    }

    const onScroll = () => {
        if ((document.body.scrollHeight - (window.innerHeight + window.scrollY) <= 1) && noMoreSolutions == false) {
            offset = offset + 10;
            findSolutions();
        }
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
                                <TrendingTopicPill key={index} className={index != 0 ? "ml-2" : ""} data={topic}></TrendingTopicPill>
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
                                <div className="col-sm-6 mb-2 card-wrap" key={index}>
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
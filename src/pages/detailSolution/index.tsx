import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "../../components/comment";
import LoadingModal from "../../components/loadingModal";
import { MyButton } from "../../components/myButton";
import { TrendingTopicPill } from "../../components/trendingTopicPill";
import { Topic } from "../../models/topic";
import { getCommentsBySolutionId } from "../../services/commentsService";
import { getSolutionById } from "../../services/solutionService";
import "./index.scss";

export function DetailSolutionPage (props: any){
    const [ loading, setLoading ] = useState(false);
    const [ solution, setSolution ] = useState({} as any);
    const [ comments, setComments ] = useState([] as any);
    const { solutionId } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        solutionDetail();
        setLoading(false);
    }, []);

    const solutionDetail = () => {
        getSolutionById(solutionId).then((response:any) => {
            let data = response.data;
            data.solution.topics = response.data.solution.topics.map(function(item: string, index: any) {
                return new Topic(item, ("/search/" + item), 0);
            });

            console.log(data);
            setSolution(data);
        });

        getCommentsBySolutionId(solutionId).then((response:any) => {
            setComments(response.data);
        });
    }

    const getShortNameDate = (date:any) => {
        if(date !== undefined){
            var dateObj = new Date(date)
            return moment(dateObj).format('YYYY') + " " + moment(dateObj).format('MMM') + "." + " " + moment(dateObj).format('DD');
        }
    }


    const onBack = () => {
        navigate("/search");
    }

    return (
        <>
            <div className="container detailSolution-container">
                <div className="row">
                    <div className="col-sm-9">
                        <p className="detailSolution-author">{solution?.user?.email}</p>
                        <p className="detailSolution-date">{getShortNameDate(solution?.solution?.createdAt)}</p>
                    </div>
                    

                </div>
                <hr className="detailSolution-divider"/>
                <div className="row mb-5">
                    <div className="col-sm-1 detailSolution-vertical-align text-center">
                        <span className="material-icons return-icon" onClick={onBack}>keyboard_arrow_left</span>
                    </div>
                    <div className="col-sm-11 detailSolution-vertical-align">
                        <p className="detailSolution-title">{solution?.solution?.title}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-solution mb-4 text-center">
                            

                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-sm-12">
                        {
                            solution?.solution?.topics?.map((topic: Topic, index: any) => (
                                <TrendingTopicPill key={index} data={topic}></TrendingTopicPill>
                            ))
                        }
                    </div>
                </div>
                <div className="row container-comments">
                    <div className="col-sm-12">
                        
                        <div className="mb-4 text-center">
                            <button className="btn detailSolution-btn-mybutton" style={{width: "200px"}}>Post it!</button>
                        </div>
                        <div className="mb-4">
                            {
                                comments?.map((comment: any, index: any) => (
                                    <Comment key={index} comment={{
                                        "username": comment.userData.email,
                                        "comment": comment.comment,
                                        "createdAt": comment.createdAt
                                    }}></Comment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <LoadingModal show={loading}></LoadingModal>
        </>
    );
}
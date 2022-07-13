import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "../../components/comment";
import { Content } from "../../components/content";
import CustomModal from "../../components/customModal";
import LoadingModal from "../../components/loadingModal";
import { Login } from "../../components/login";
import { Tip } from "../../components/tip";
import { TrendingTopicPill } from "../../components/trendingTopicPill";
import { CommentSolution } from "../../models/comment";
import { Topic } from "../../models/topic";
import { getCommentsBySolutionId, saveComment } from "../../services/commentsService";
import { retrieveEmail, verifyAuth } from "../../services/sessionManagerService";
import { getSolutionById } from "../../services/solutionService";
import "./index.scss";

export function DetailSolutionPage (props: any){
    const [ loading, setLoading ] = useState(false);
    const [ loginModal, setLoginModal ] = useState(false);
    const [ solution, setSolution ] = useState({} as any);
    const [ comments, setComments ] = useState([] as any);
    const [ comment, setComment ] = useState("");
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
            setSolution(data);
        });

        getCommentsBySolutionId(solutionId).then((response:any) => {
            let data = response.data
            let commentsTemp: CommentSolution[] = [];
            data.forEach((com: any) => {
                commentsTemp.push(new CommentSolution(com.userData.email, com.createdAt, com.comment));
            });
            setComments(commentsTemp);
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

    const createPost = () => {
        if(!verifyAuth()){
            setLoginModal(true);
            return;
        }

        if(!validateComment()){
            return;
        }

        setLoading(true);
        let body = {
            "comment": comment,
            "solutionId": solutionId
        }

        saveComment(body).then((response:any) => {
            let data = response.data;
            console.log(data);
            setComments((currentComments: any) => [new CommentSolution(retrieveEmail(), new Date(data.comment.createdAt), data.comment.comment)].concat(currentComments));
            setComment("");
            setLoading(false);
        });
    }

    const validateComment = ():boolean => {
        if(comment.replace(/\s/g, "") == ""){
            return false;
        }
    
        if(comment.trim().length <= 5 || comment.trim().length >= 100){
            return false;
        }
    
        var numLines = comment.split(/\r\n|\r|\n/).length;
        if(numLines >= 5){
            return false;
        }
        return true;
    }

    return (
        <>
            <div className="container detailSolution-container">
                <div className="row">
                    <div className="col-sm-9">
                        <p className="detailSolution-author">{solution?.user?.email}</p>
                        <p className="detailSolution-date">{getShortNameDate(solution?.solution?.createdAt)}</p>
                    </div>
                    <div className="col-sm-3">
                        <Tip></Tip>
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
                        {
                            solution?.solution?.content?.map((content: any, index: any) => (
                                <div className="text-solution mb-4 text-center">
                                    <Content type={content.type} content={content.content}></Content>
                                </div>
                            ))
                        }
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
                        <div className="mb-1">
                            <textarea className="detailSolution-textArea" placeholder="Enter a comment..." value={comment} onChange={(e) => setComment(e.target.value)}/>
                        </div>
                        <div className="mb-4 text-center">
                            <button className="btn detailSolution-btn-mybutton" style={{width: "200px"}} onClick={createPost}>Post it!</button>
                        </div>
                        <div className="mb-4">
                            {
                                comments?.map((comment: CommentSolution, index: any) => (
                                    <Comment key={index} comment={comment}></Comment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <LoadingModal show={loading}></LoadingModal>
            <CustomModal show={loginModal}
                         handleClose={() => setLoginModal(false)}
                         size="sm"
                         verticalCenter={true}>
                <Login handleClose={() => setLoginModal(false)}></Login>
            </CustomModal>
        </>
    );
}
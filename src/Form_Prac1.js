import react from "react";
import "./Form_Prac.css";
class Form_Prac1 extends react.Component{
   state = {
       comments: [
       {id:1, name:'jack', content:'sofa!'},
       {id:2, name: 'rose', content:'chair!'},
       {id:3, name:'tom', content:'Op is a good guy!'},
       ],
       userName: "",
       userContent: "",

    }
   

    getPerson = (e)=>{
        // const name = e.target.value;

    }

    renderList = ()=>{
        // const {comments} = this.state;
        // return comments.length === 0
        // ?(<div className="no-comment">No comments yet, go post a comment!</div>)
        // :(<div className="render"> 
        // <ul>
        // {comments.map(item => (
        //         <li key={item.id}>
        //             <h3>Commenter:{item.name}</h3>
        //             <p>Content:{item.content}</p>
        //         </li>
        //     )
        // )}
        // </ul>
        // </div>)
         const {comments} = this.state;
        return comments.length === 0
        ?(<div className="no-comment">No comments yet, go post a comment!</div>)
        :(
        <div className="render">
            <ul>
            {comments.map(item => (
                <li key={item.id}>
                    <h3>Commenter:{item.name}</h3>
                    <p>Content:{item.content}</p>
                </li>
                )
            )}
            </ul>
        </div>)
       
    }

    handleForm = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
        const{userName, userContent} = this.state;
        console.log(userName, userContent)
    }

    showComments = () => {
        const {comments, userName, userContent} = this.state;
        console.log(userName,": ",userContent)
        if(userName == "" || userContent == ""){
            alert("Enter something")
            return    
        }
        const newComments = [...comments, {
            id: Math.random(),
            name: userName,
            content: userContent,
        }]
        this.setState({
            comments: newComments,
        })
        console.log(newComments);
        console.log(userName)
        console.log(userContent)
        this.setState({
            comments: newComments,
            userName: "",
            userContent: "",
        })
    }

    render(){
        const {userName, userContent} = this.state;
        return(
            <div className="border">
                <div className="form">
                    <input type="text" placeholder="Enter your name" name="userName" value={userName} onChange={this.handleForm}/>
                    <br />
                    <br />
                    <textarea cols="30" rows="10" placeholder="enter comments" name="userContent" value={userContent} onChange={this.handleForm}>

                    </textarea>
                    <br />
                    <br />
                    <button type="button" onClick={this.showComments}>Post comment</button>
                </div>
                {/* {
                    this.state.comments.length === 0
                    ?(<div className="no-comment">No comments yet, go post a comment!</div>)
                    :(<div className="render"> 
                        <ul>
                        {this.state.comments.map(item => (
                                <li key={item.id}>
                                    <h3>Commenter:{item.name}</h3>
                                    <p>Content:{item.content}</p>
                                </li>
                            )
                        )}
                        </ul>
                    </div>)
                } */}
                {this.renderList()}
                
                   
                
            </div>
        )
    }
}

export default Form_Prac1;
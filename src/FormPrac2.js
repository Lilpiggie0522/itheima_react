import react from "react";
import './Form_Prac.css'

class FormPrac2 extends react.Component{
    constructor(){
        super()
        this.state = {
            comments:[
                {
                    id:1,
                    author: "Jack",
                    content: "wassup!"
                },

                {
                    id:2,
                    author: "Rose",
                    content: "Yo yo!"
                },

                {
                    id:3,
                    author: "Chris",
                    content: "Op is the best!"
                },

                {
                    id:4,
                    author: "Tim",
                    content: "Hi yall!"
                },
            ],
            name: "",
            content: "",
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    renderList = () => {
        const{name, content, comments} = this.state;
        return comments.length !== 0
        ?(
            <div className="render">
                    {comments.map(
                        item => {
                            return(
                            <li key={item.id}>
                                <h3>Author: {item.author}</h3>
                                <p>Comment: {item.content}</p>
                            </li>
                            )
                        }
                    )}
                </div>
                
        )
        :(<div className="no-comment"><h3>No comments yet, go post a comment!</h3></div>)
    }

    addComment = () => {
        const {name, content, comments} = this.state;
        if(name.trim() == "" || content.trim == ""){
            alert("Please enter username and comments!")
            return
        }
        const newComments = [...comments, {id: Math.random(), author: name, content: content}];

        this.setState({
            comments: newComments,
        })

        this.setState({
            name: "",
            content: "",
        })
    }

    render(){
        const{name, content} = this.state;
        return(
            <div>
                <div className="form">
                    <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Enter your user name"/>
                    <br />
                    <br />
                    <textarea rows="10" cols="30" name="content" value={content} onChange={this.handleChange}>

                    </textarea>
                    <br />
                    <br />
                    <button onClick={this.addComment}>Post comment</button>
                </div>
                {this.renderList()};
            </div>
        )
    }
}

export default FormPrac2;
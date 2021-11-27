import react from "react";

class Form extends react.Component{
    constructor(){
    super()
    this.state = {
        txt: "",
        richtxt: "",
        city: "",
        isChecked: false,
        reftxt: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.txtref = react.createRef()
    }
    
    handleChange(e){
        // obtain current dom object
        const target = e.target
        // obtain value according to type
        const value = target.type === "checkbox"
        ?target.checked
        :target.value

        const name = target.name

        this.setState({
            // txt: e.target.value
            [name]: value
        })
        target.type === "checkbox"
        ?console.log(target.checked)
        :console.log(target.value)
    }

    getTxt = (e) =>{
        this.setState({
            reftxt: this.txtref.current.value,
        })
        console.log(this.txtref.current.value)
    }

    // handleRichChange=(e)=>{
    //     this.setState({
    //         richtxt: e.target.value
    //     })
    // }

    // handleSelect = (e)=> {
    //     this.setState({
    //         city: e.target.value,
    //     })
    //     console.log(document.getElementsByTagName("select")[0].value)
    // }

    // handleCheck = (e) =>{
    //     this.setState({
    //         isChecked: e.target.checked,
    //     })
    //     console.log(e.target.checked)
    // }

    render(){
        return(
            <div>
                {/* 文本框 */}
                <input type="text" name="txt" value = {this.state.txt} onChange={this.handleChange}/>
                <br />
                <br />
                {/* 富文本框 */}
                <textarea name="richtxt" value={this.state.richtxt} onChange={this.handleChange}></textarea>
                {/* 下拉框 */}
                <br />
                <select name="city" value={this.state.city} onChange={this.handleChange}>
                    <option value="syd">sydney</option>
                    <option value="cbr">canberra</option>
                    <option value="mel">melbourne</option>
                </select>

                <br />
                {/* 复选框 */}
                <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.handleChange}/>
                <br />
                <input type="text" ref={this.txtref}/>
                <button onClick={this.getTxt}>getText</button>
            </div>
        )
    }
}

export default Form;
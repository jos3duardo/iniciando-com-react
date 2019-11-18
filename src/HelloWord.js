import React, {Component} from 'react'
import StateInput from "./StateInput";
class HelloWord extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'José Eduardo'
        }
    }
    render() {
        const result = 4
        const style = {
            color: '#ff0000',
            fontSize: 50,
            backgroundColor: '#000000'
        }
        return(
            <div className="my-class-reom-react">
                {/* this is my first component */}
                <StateInput />
                <h1 style={style}>Hello Word React</h1>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWord
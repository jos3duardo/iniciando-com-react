import React, {Component} from 'react'

class StateInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        setTimeout( () => {
            this.setState({
                name: 'José'
            })
        },1000 )
    }

    render() {
        return(
            <div><input type="text" value={this.state.name}/></div>
        )
    }
}
export default StateInput
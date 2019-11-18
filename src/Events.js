import React,{ Component } from 'react'

class Events extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            data: []
        }

        this.updateInputName = this.updateInputName.bind(this)
        this.clickEvent = this.clickEvent.bind(this)
    }

    updateInputName(e){
        return this.setState({
            name: e.target.value
        })
    }
    clickEvent(e){
         this.state.data.push(this.state.name)

         return this.setState({
            name: ''
        })
        
    }

    render(){
        const { data } = this.state
        const itens = data.map((item) => {
            return <li key={item}> {item.toString()}</li>
        })

        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.updateInputName}/>
                <button type="button" onClick={this.clickEvent}>Submit</button>
                <ul>
                    {itens}
                </ul>
            </div>
        )
    }
}
export default Events
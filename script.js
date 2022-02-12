class Counter extends React.Component { 
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            totalTap:0 
        }
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({count : this.state.count - 1, totalTap : this.state.totalTap + 1});
        } else {
            this.setState({totalTap : this.state.totalTap + 1});
        }
    }

    render() {
        return (
            <div className='app'>
                <div className='counter'>
                    <h1>Counter</h1>
                    <div>
                        <h2 className='count'>{this.state.count}</h2>
                        <h4 className='taps'>{this.state.totalTap}</h4>
                        <button onClick={this.decrement}>Decrement -</button>
                        <button onClick={()=> this.setState({count : this.state.count + 1, totalTap : this.state.totalTap + 1})}>Increment +</button>
                    </div>
                    <div>
                        <button className='reset-count' onClick={()=> this.setState({count : 0})}>Reset Count</button>
                        <button className='reset-all' onClick={()=> this.setState({count : 0, totalTap : 0})}>Reset All</button>
                    </div>    
                </div>
            </div>
            
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)
import React, {Component} from 'react';
import Agreements from './components/agreements';

class App extends Component {
    render() {
        return (
            <Agreements agreements={this.state.agreements} />
        )
    }

    state = {
        agreements: []
    };

    componentDidMount() {
        fetch('http://192.168.1.206:8000/agreement/getAllAgreements')
            .then(res => res.json())
            .then((data) => {
                this.setState({ agreements: data })
            })
            .catch(console.log)
    }
}

export default App;





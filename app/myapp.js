
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    todos,
} from './selectors';

class MyApp extends Component {
    render() {
        let { words } = this.props;
        return (
            <div className={"main"}>
                <div className={"searchBar"}>
                    <input type="text" name="search"/>
                </div>
                <div className={"content"}>
                    <ul>
                    { words.map((word) => {
                        return (
                        <li>
                            word.text
                        </li>
                        )
                    })}
                    </ul> 
                </div>
            </div>
        )
    }
}

function stateToProps(state) {
    return {
        words: state.Word.all(),
    };
}

// This maps our action creators to props and binds
// them to dispatch.
const dispatchToProps = {
};

export default connect(stateToProps, dispatchToProps)(MyApp);

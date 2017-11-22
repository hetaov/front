
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    words,
} from './myselector';

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
                        <li key={word.id}>
                        {word.text}
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
    console.log(state.orm.Word.items);
    return {
        words: words(state),
        //words: state.orm.Word.all().toRefArray()
    };
}

// This maps our action creators to props and binds
// them to dispatch.
const dispatchToProps = {
};

export default connect(stateToProps, dispatchToProps)(MyApp);

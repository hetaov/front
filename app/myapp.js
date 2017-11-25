
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
                    <div>
                    { words.map((word) => {
                        return (
                        <a key={word.id} href={`/detail/${word.id}`}>
                            <h2 className={'title'}>{word.text}</h2>
                            <div className={'desc'}>{word.desc}</div>
                            <div className={'source'}>来源：{word.source}</div>
                        </a>
                        )
                    })}
                    </div> 
                </div>
            </div>
        )
    }
}

function stateToProps(state) {
    console.log(state.orm.Word.items);
    fetch('http://127.0.0.1:3000/api/黄枝', (result) => {
        console.log(result, 'in app ');
    });
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

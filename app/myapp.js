
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    words,
    items 
} from './myselector';

import { init, search } from './actions';

class MyApp extends Component {

    constructor(props) {
      super(props);

      this.state = {
          title: ''
      };
      this.search = this.search.bind(this);
    }

    componentDidMount() {
      const { init } = this.props;
      init();
    }

    search() {
      let title = this.state.title;
      let { search } = this.props;
      console.log(title, 'in search method');
      search(title);
    }

    render() {
        let { words, items } = this.props;
        return (
            <div className={"main"}>
                <div className={"searchBar"}>
                    <input type="text" name="search" onChange={(event) => { this.setState({title: event.target.value})}}/>
                    <button onClick={this.search}>搜索</button>
                </div>
                <div className={"content"}>
                    <div>
                    { items.map((item, index) => {
                        return (
                        <a key={index} href={`/detail/${item.subject.value}`}>
                            <h2 className={'title'}>{item.predicate}</h2>
                            <div className={'source'}>来源：{item.object}</div>
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
    return {
        words: words(state),
        items: items(state),
    };
}

// This maps our action creators to props and binds
// them to dispatch.
const dispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(init())
        },
        search: (title) => {
            dispatch(search(title));
        }
    }
};

export default connect(stateToProps, dispatchToProps)(MyApp);

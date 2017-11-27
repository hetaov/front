import {
    SELECT_USER,
    CREATE_TODO,
    MARK_DONE,
    DELETE_TODO,
    ADD_TAG_TO_TODO,
    REMOVE_TAG_FROM_TODO,
} from './actionTypes';

import { schema } from './mymodels';

export const selectUser = id => {
    return {
        type: SELECT_USER,
        payload: id,
    };
};

export const createTodo = props => {
    return {
        type: CREATE_TODO,
        payload: props,
    };
};

export const markDone = id => {
    return {
        type: MARK_DONE,
        payload: id,
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};

export const addTagToTodo = (todo, tag) => {
    return {
        type: ADD_TAG_TO_TODO,
        payload: {
            todo,
            tag,
        },
    };
};

export const init = () => {
    return (dispatch) => {
      fetch('http://127.0.0.1:3000/api/黄枝')
        .then((res) => res.json())
        .then((result) => {
            console.log(result, 'in app ');
        });
    }
}

const getKey = (uri) => {
    let key = /#([^#]+)$/.exec(uri);
    if(key) {
        return key[1];
    }
    return '';
};

const prop = (key) => {
    let map = {
        'label': '名称',
        'subClassOf': '属于类别',
        'type': '是类别',
        'comment': '说明',
    };
    if(map[key]) {
        return map[key];
    }
    return '';
};

const transformList = (result) => {
    return result.map((obj) => {

        console.log(obj.subject, '---')

        let row = {
            subject: {
                type: obj.subject.type,
                value: obj.subject.value
            }
        }

        if(obj.predicate.type == 'uri') {

            row.predicate = prop(getKey(obj.predicate.value));
        } else if (obj.pname) {
            row.predicate = obj.pname.value;

        } else {
            row.predicate = '';
        }

        if(obj.object.type == 'literal') {
            row.object = obj.object.value;
        } else if (obj.oname) {
            row.object = obj.oname.value;
        } else {
            row.object = '';
        }

        return row;

    });
}

export const getList = (list) => {
    return {
        type: 'list',
        list
    }
}

export const search = (title) => {
    return (dispatch) => {
      fetch(`http://127.0.0.1:3000/api/${title}`)
        .then((res) => res.json())
        .then((result) => {
            console.log(result, 'in search app ');
            console.log(transformList(result.result));
            dispatch(getList(transformList(result.result)))
        });
    }
}

export const removeTagFromTodo = (todo, tag) => {
    return {
        type: REMOVE_TAG_FROM_TODO,
        payload: {
            todo,
            tag,
        },
    };
};

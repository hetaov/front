'use strict';

import { Schema, Model, many, fk } from 'redux-orm';
import propTypesMixin from 'redux-orm-proptypes';

const ValidatingModel = propTypesMixin(Model);

export class Word extends ValidatingModel {
    static reducer(state, action, Tag) {
        const { payload, type } = action;
        switch (type) {
            case 'Test':
                break;
            default:

        }
    }
}

Word.modelName = 'Word';

export const schema = new Schema();
schema.register(Word);

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

export class Item extends ValidatingModel {
    static reducer(state, action, Item) {
        const { list, type } = action;
        switch (type) {
            case 'list':
            /*
            const state = schema.getDefaultState();
            const session = schema.withMutations(state);
            const { Item } = session;
            Item.create(transformList(result.result))
            */
                list.map((item) => {
                    Item.create(item)
                });
                break;
            default:

        }
    }
}

Item.modelName = 'Item';

export const schema = new Schema();
schema.register(Word);
schema.register(Item);

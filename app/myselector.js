
import { schema } from './mymodels';
import { createSelector } from 'reselect';

export const ormSelector = state => state.orm;

export const words = createSelector(
    ormSelector,
    schema.createSelector(orm => {
        console.log('Running users selector');

        // `.toRefArray` returns a new Array that includes
        // direct references to each User object in the state.
        return orm.Word.all().toRefArray();
    }));
    
import React from 'react';

import reducerRegistry from '__store/reducerRegistry';

import {WithReducerProps} from './types';

const componentWithReducer = ({Component, reducers}: WithReducerProps) => {

    class ComponentWithReducer extends React.PureComponent {
        componentDidMount() {
            reducerRegistry.register(reducers);
        }

        componentWillUnmount() {
            reducerRegistry.unregister(reducers);
        }

        render() {
            return <Component/>;
        }
    }

    return ComponentWithReducer;
};

export default componentWithReducer;

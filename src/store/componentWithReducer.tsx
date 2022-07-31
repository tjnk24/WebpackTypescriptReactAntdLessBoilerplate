import React from 'react';

import reducerRegistry from '__store/reducerRegistry';
import {RegistryReducers} from '__store/reducerRegistry/types';

const componentWithReducer = (reducers: RegistryReducers) => {
    return (Component: React.ComponentType) => {
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
};

export default componentWithReducer;

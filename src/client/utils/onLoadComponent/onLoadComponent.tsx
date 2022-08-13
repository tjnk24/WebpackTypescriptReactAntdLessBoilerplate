import React from 'react';

import {CreateOnLoadComponentParams} from './types';

export const onLoadComponent = ({onLoad, onDispose}: CreateOnLoadComponentParams) => {
    return (Component: React.ComponentType) => {

        class OnLoadComponent extends React.PureComponent {
            componentDidMount() {
                onLoad && void onLoad();
            }

            componentWillUnmount() {
                onDispose && void onDispose();
            }

            render() {
                return <Component/>;
            }
        }

        return OnLoadComponent;
    };
};

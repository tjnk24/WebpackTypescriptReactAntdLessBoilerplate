import React from 'react';
import {Helmet} from 'react-helmet';
import {Route, RouteComponentProps} from 'react-router';

import {Props} from './types';

const AppRoute: Props = ({
    component: Component,
    componentProps,
    statusCode,
    description,
    ogImageUrl,
    title,
    ...props
}) => {
    const renderContent = (routerProps: RouteComponentProps) => {
        const {staticContext} = routerProps;

        if (staticContext && statusCode) {
            staticContext.statusCode = statusCode;
        }

        return (
            <>
                <Helmet
                    defaultTitle="Boilerplate"
                    titleTemplate="Boilerplate - %s"
                >
                    <title>{title}</title>

                    <meta name="description" content={description}/>

                    <meta
                        property="og:image"
                        itemProp="image"
                        content={ogImageUrl}
                    />

                    <meta name="twitter:card" content="summary_large_image"/>

                    {description && <meta property="og:description" content={description}/>}
                </Helmet>

                <Component {...routerProps} {...componentProps}/>
            </>
        );
    };

    return <Route {...props} render={renderContent}/>;
};

export default AppRoute;

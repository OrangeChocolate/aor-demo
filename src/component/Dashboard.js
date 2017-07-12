import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile } from 'admin-on-rest';

const Dashboard = (props) => {
    const { width } = props;
    return (
        <div>
            {width === 1 && <AppBarMobile title="众信红包管理平台" />}
            <Card style={{ padding: '2em' }}>
                <CardHeader title="Welcome to the administration" />
                <CardText>Lorem ipsum sic dolor amet...</CardText>
            </Card>
        </div>
    );
}

export default withWidth()(Dashboard);
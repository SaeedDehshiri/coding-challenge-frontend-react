import React from 'react';

type HomeItemProps = {
    itemData: any;
};

class HomeItem extends React.Component<HomeItemProps, {}> {
    render() {
        return (
        <div className="home-item">
            <span>{this.props.itemData}</span>
        </div>
        );
    }
}

export default HomeItem;
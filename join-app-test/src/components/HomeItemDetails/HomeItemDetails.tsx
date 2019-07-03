import React from 'react';
import './style.scss';
import { RouteComponentProps } from 'react-router';

interface HomeItemDetailRouterProps {
    id: string;
}
  
interface HomeItemDetailProps extends RouteComponentProps<HomeItemDetailRouterProps> {
    description: ""
}

class HomeItemDetail extends React.Component<HomeItemDetailProps, {}> {

    componentDidMount() {
        // call axios
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div className="home-item-details">
                
            </div>
        );
    }
}

export default HomeItemDetail;
import React from 'react';
import './style.scss';

type HomeState = {
    text: string;
};

class Home extends React.Component<{}, HomeState> {
    state: HomeState = {
        text: "Stolen bykes"
    };
    render() {
        return (
        <div className="home">
            <div className="home-search">
                <input type="text" />
            </div>
        </div>
        );
    }
}

export default Home;
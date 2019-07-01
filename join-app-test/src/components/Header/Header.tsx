import React from 'react';
import './style.scss';

type HeaderState = {
    mainTitle: string;
    subTitle: string;
};

class Header extends React.Component<{}, HeaderState> {
    state: HeaderState = {
        mainTitle: "Police Department of Berlin",
        subTitle: "Stolen bykes"
    };
    render() {
        return (
        <div className="header">
            <div className="header-title">
                <img className="header-title__img" src="https://api.dehshiri.com/media/images/tik8-app-icon-1024.png" alt={this.state.mainTitle} />
                <div className="header-title__main">
                    <span className="header-title__main-title">
                        {this.state.mainTitle}
                    </span>
                    <span className="header-title__main-sub-title">
                        {this.state.subTitle}
                    </span>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;
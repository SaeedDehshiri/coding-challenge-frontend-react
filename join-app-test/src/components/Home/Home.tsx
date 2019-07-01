import React from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';
import dateLogo from '../../assets/date.png'; // Tell Webpack this JS file uses this image
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type HomeState = {
    description: string;
    from: any;
    to: any;
};

class Home extends React.Component<{}, HomeState> {
    state: HomeState = {
        description: "",
        from: "",
        to: ""
    };
    
    onChangeDescription = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ description: e.currentTarget.value });
    };

    onChangeFrom = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ from: e.currentTarget.value });
    };

    onChangeTo = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ to: e.currentTarget.value });
    };

    imageToClicked = () => {
        console.log('imageToClicked!!!!');
    };

    imageFromClicked = () => {
        console.log('imageFromClicked!!!!');
    };

    handleDateFromChange = (date: any) => {
        this.setState({
            from: date
        })
    };

    handleDateToChange = (date: any) => {
        this.setState({
            to: date
        })
    };

    render() {
        return (
            <div className="home">
                <div className="home-search">
                    <form
                        //ref={formRef}
                        onSubmit={(e: React.SyntheticEvent) => {
                            e.preventDefault();
                            
                        }}
                        >
                        <input className="home-search__description-input" 
                               type="text" 
                               value={this.state.description} 
                               onChange={this.onChangeDescription} 
                               placeholder="description"
                        />
                        <DatePicker
                            className="home-search__from-input"
                            selected={ this.state.from }
                            onChange={ this.handleDateFromChange }
                            dateFormat="yyyy-MM-dd"
                            placeholderText="From"
                        />
                        <img className="home-search__img" src={dateLogo} onClick={this.imageFromClicked} alt="" />
                        <DatePicker
                            className="home-search__to-input"
                            selected={ this.state.to }
                            onChange={ this.handleDateToChange }
                            dateFormat="yyyy-MM-dd"
                            placeholderText="To"
                        />
                        <img className="home-search__img" src={dateLogo} onClick={this.imageToClicked} alt="" />
                        <input className="home-search__submit" type="submit" value="Find Cases" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
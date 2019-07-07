import React from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';
import dateLogo from '../../assets/date.png'; // Tell Webpack this JS file uses this image
import errorIcon from '../../assets/error.png';
import loadingIcon from '../../assets/loading.svg';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeItem from './components/HomeItem/HomeItem';
import axios from 'axios';
import { Button, InputGroup, FormControl, FormControlProps, Row, Col, Container } from 'react-bootstrap';
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers';

enum RequestState {
    None, Loading, Error, Success
}

type HomeState = {
    description: string;
    from: any;
    to: any;
    items: [];
    requestState: RequestState 
};

class Home extends React.Component<{}, HomeState> {
    state: HomeState = {
        description: "",
        from: "",
        to: "",
        items: [],
        requestState: RequestState.None
    };

    componentDidMount() {
        
    }

    onFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        this.setState({
            requestState: RequestState.Loading
        });
        this.state.requestState = RequestState.Loading;
        try {
            const res = await axios.get("https://bikewise.org/api/v2/incidents?page=1&proximity_square=100");
            console.log(res.data);
            this.setState({
                items: res.data.incidents,
                requestState: RequestState.Success
            });
        } catch(err) {
            console.log(err);
            this.setState({
                items: [],
                requestState: RequestState.Error
            });
        }
    }
    
    onChangeDescription = (e: React.FormEvent<ReplaceProps<"input", BsPrefixProps<"input"> & FormControlProps>>): void => {
        this.setState({ description: e.currentTarget.value as string });
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

    renderBottom() {
        switch(+this.state.requestState) {
            case RequestState.None:
            return (
                <div>None</div>
            );

            case RequestState.Loading:
            return (
                <div>
                    <img src={loadingIcon} />
                </div>
            );
            
            case RequestState.Error:
            return (
                <div><img alt="Error" src={errorIcon} /><p>Opps! Something went wrong :(</p></div>
            );

            case RequestState.Success:
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="home">
                <div className="home-top">
                    <div className="home-search">
                        <form
                            //ref={formRef}
                            onSubmit={this.onFormSubmit}
                            >
                            <Container>
                            <Row>
                                <Col>
                                    <FormControl
                                        placeholder="Description"
                                        className="home-search__description-input" 
                                        type="text" 
                                        value={this.state.description} 
                                        onChange={this.onChangeDescription} 
                                    />
                                </Col>
                                <Col md="auto">
                                    <InputGroup className="mb-3">
                                        <DatePicker
                                            className="home-search__from-input form-control"
                                            selected={ this.state.from }
                                            onChange={ this.handleDateFromChange }
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText="From"
                                        />
                                        <InputGroup.Append>
                                        <InputGroup.Text>
                                            <img className="home-search__img" src={dateLogo} onClick={this.imageFromClicked} alt="" />
                                        </InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col md="auto">
                                    <InputGroup className="mb-3">
                                        <DatePicker
                                            className="home-search__to-input form-control"
                                            selected={ this.state.to }
                                            onChange={ this.handleDateToChange }
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText="To"
                                        />
                                        <InputGroup.Append>
                                        <InputGroup.Text>
                                            <img className="home-search__img" src={dateLogo} onClick={this.imageFromClicked} alt="" />
                                        </InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col md="auto">
                                    <Button 
                                        disabled={this.state.requestState == RequestState.Loading} 
                                        variant="primary" 
                                        className="home-search__submit" 
                                        type="submit">
                                            Find Cases
                                    </Button>
                                </Col>
                            </Row>
                            </Container>
                        </form>
                    </div>
                </div>
                <div className="home-items">
                    {this.renderBottom()}
                </div>
            </div>
        );
    }
}

export default Home;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPets: 0
        };
    }

    // for adding 1 to the clicked on cat
    increaseNumberOfPets = () => {
        this.setState({
            numOfPets: this.state.numOfPets + 1
        });
    }
    render() {

        return (

            <div> 


                <Card style={{ width: '18rem' }}>
                    <Card.Img className='cardCat' variant="top" src={this.props.imgUrl} alt= {this.props.description} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Number of Pets {this.state.numOfPets}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfPets} variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
                

            </div>

        );

    }

}



export default HornedBeasts;

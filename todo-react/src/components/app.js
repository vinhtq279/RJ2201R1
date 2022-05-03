import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

const App = () => {
    return(
        <>
        <Container>
            <Row>
                TODO LIST
            </Row>
            <Row>
                <Col>
                    <InputGroup>
                        <FormControl />
                        
                        <InputGroup.Append><Button>ADD</Button></InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                    
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </>
    );

}

export default App;
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Hours extends Component {
  state = {
    hours: [],
    free: "",
    selfA: "",
    esteem:"",
    love:"",
    synopsis: ""
  };

  componentDidMount() {
    this.loadHours();
  }

  loadHours = () => {
    API.getHours()
      .then(res =>
        this.setState({ hours: res.data, free: "", selfA: "",esteem: "",love:"", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteHour = id => {
    API.deleteHour(id)
      .then(res => this.loadHours())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTime = event => {
    const {name, value} = event.target;
    this.setState({
      
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.free)
    // && this.state.selfA) 
    {
      API.saveHour({
        free: this.state.free,
        selfA: this.state.free*.1,
        esteem: this.state.free*.3,
        love: this.state.free*.6,

        synopsis: this.state.synopsis
      })
        .then(res => this.loadHours())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>How Should I Spend My Free Time?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.free}
                onChange={this.handleInputChange}
                name="free"
                placeholder="time (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Explain (Optional)"
              />
              <FormBtn
                disabled={!(this.state.free)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
        
            <Jumbotron>
              <h1>Free Time Breakdown</h1>
            </Jumbotron>
            {this.state.hours.length ? (
              <List>
                {this.state.hours.map(hour => (
                  <ListItem key={hour._id}>
                    <Link to={"/hours/" + hour._id}>
                      
                        <p>
                        Free Time :         {hour.free} hrs
                        </p>
                        <p>
                        Self Actualization: {hour.selfA} hrs
                        </p>
                        <p>
                        Esteem:             {hour.esteem} hrs
                        </p>
                        Love:               {hour.love} hrs
                        
                     
                    </Link>
                    <DeleteBtn onClick={() => this.deleteHour(hour._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hours;

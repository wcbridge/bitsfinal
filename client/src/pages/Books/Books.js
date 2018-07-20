import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    selfA: "",
    esteem:"",
    love:"",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", selfA: "",esteem: "",love:"", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title)
    // && this.state.selfA) 
    {
      API.saveBook({
        title: this.state.title,
        selfA: this.state.title*.1,
        esteem: this.state.title*.3,
        love: this.state.title*.6,

        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="time (required)"
              />
              {/* <Input
                value={this.state.selfA}
                onChange={this.handleInputChange}
                name="selfA"
                placeholder="Physical, Mental, Emotional...make a drop down (required)"
              /> */}
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Explain (Optional)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Free Time Breakdown</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      
                        <p>
                        Free Time :         {book.title} hrs
                        </p>
                        <p>
                        Self Actualization: {book.selfA} hrs
                        </p>
                        <p>
                        Esteem:             {book.esteem} hrs
                        </p>
                        Love:               {book.love} hrs
                        
                     
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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

export default Books;
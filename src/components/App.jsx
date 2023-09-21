import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchPhoto } from 'API/pixabay';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    q: '',
    page: 1,
    isLoading: false,
    arrImage: [],
  };

  componentDidMount() {
    // const { q, page } = this.state;
    // searchPhoto(q, page).then(res => console.log(res));
  }

  componentDidUpdate(prevProps, prevState) {
    const { q, page, arrImage } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      searchPhoto(q, page).then(res => {
        console.log(res);
        this.setState({ arrImage: [...arrImage, ...res.hits] });
      });
    }

    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();

    const { value } = event.target.query;
    this.setState({ q: value, page: 1, arrImage: [] });
  };

  handleClick = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery array={this.state.arrImage} />
        <Button handleClick={this.handleClick} />
      </>
    );
  }
}

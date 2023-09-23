import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { searchPhoto } from 'API/pixabay';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    q: '',
    page: 1,
    isLoading: false,
    arrImage: [],
    loadMore: false,
    showModal: false,
    largeImage: '',
    description: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { q, page, arrImage } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      this.setState({ isLoading: true });
      searchPhoto(q, page)
        .then(res => {
          this.setState({
            arrImage: [...arrImage, ...res.hits],
            loadMore: page < Math.ceil(res.totalHits / 12),
          });
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const { value } = event.target.query;
    this.setState({ q: value, page: 1, arrImage: [] });
    event.currentTarget.reset();
  };

  handleClick = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { page: prevState.page + 1 };
    });
  };

  openModal = (url, desc) => {
    this.setState({ showModal: true, largeImage: url, description: desc });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ImageGallery array={this.state.arrImage} openModal={this.openModal} />
        {/* {this.state.isLoading &&} */}
        {this.state.showModal && (
          <Modal
            src={this.state.largeImage}
            alt={this.state.description}
            closeModal={this.closeModal}
          />
        )}
        {this.state.loadMore && <Button handleClick={this.handleClick} />}
      </>
    );
  }
}

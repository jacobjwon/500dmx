import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import FollowModal from '../follows/follows_modal';
import PhotoFeedItem from './photo_feed_item';

class PhotoFeed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photoArray: [],
      followersModalOpen: false,
      followingModalOpen: false
    };
  }

  componentDidMount () {
    this.props.fetchUsers();
    this.props.fetchPhotoFeed();
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentUser.numFollowing !== this.props.currentUser.numFollowing) {
      this.props.fetchPhotoFeed();
    }
  }

  closeModal () {
    document.body.style.overflow = 'auto';
    this.setState({
      followersModalOpen: false,
      followingModalOpen: false
    });
  }
  openModal () {
    document.body.style.overflow = 'hidden';
  }

  render () {
    let currentUser = this.props.currentUser;
    let userProfileUrl, photoFeedItems, suggestedFollows;
    if (currentUser.coverPhotoUrl) {
      userProfileUrl = {backgroundImage: `url(${currentUser.profilePhotoUrl})`};
    }
    if (this.props.photos.length > 0) {
      photoFeedItems = this.props.photos.map((photo, idx) => {
        return <PhotoFeedItem photo={photo} key={idx} />;
      });
    } else {
      photoFeedItems = (
        <div className='no-feed-msg'>
          You're not following anyone yet!
        </div>
      );
    }

    return (
      <div className='photo-feed-page'>
        <div className='photo-feed-item-container'>
          { photoFeedItems }
        </div>
      </div>

    );
  }
}

export default PhotoFeed;

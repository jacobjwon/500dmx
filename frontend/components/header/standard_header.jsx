import React from 'react';
import { Link } from 'react-router-dom';
import NavUser from './nav_user';
import NavAuth from './nav_auth';

class StandardHeader extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.errors.session.includes('Nobody signed in')) {
      window.location.reload();
    }
  }

  render () {
    let navComponentRight;
    if (this.props.loggedIn) {
      navComponentRight = <NavUser logout={this.props.logout}
        currentUser={this.props.currentUser} history={this.props.history}
        toggleUploadModal={this.props.toggleUploadModal} />;
    } else {
      navComponentRight = <NavAuth />;
    }

    return (
      <div className='header-sticky'>
        <header>
          <nav className='flex-center navbar navbar-std'>
            <div className='flex-center nav-component nav-left'>
              <Link to='/' className='nav-logo flex-center'>500dmx</Link>

            </div>
            { navComponentRight }
          </nav>
        </header>
      </div>
    );
  }
}

export default StandardHeader;

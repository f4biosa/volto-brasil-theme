import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../../../components/Atoms/Container/Container';
import { Navigation } from '@plone/volto/components';
import Logo from '../../../../../components/Logo';
import SearchWidget from '../../../../../components/Search/SearchWidget';
import useSticky from '../../../../../helpers/useSticky';
import cx from 'classnames';

const Header = (props) => {
  const { pathname } = props;
  const { sticky, stickyRef } = useSticky();

  return (
    <header
      ref={stickyRef}
      className={cx('header-wrapper', {
        sticky: sticky,
      })}
    >
      <Container
        layout
        className={cx('header-wrapper', {
          sticky: sticky,
        })}
      >
        <div className="header">
          <div className="logo-nav-wrapper">
            <div className="logo">
              <Logo href={'#'} />
            </div>
            <Navigation pathname={pathname} />
            <div className="search-wrapper">
              <div className="search">
                <SearchWidget />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

Header.defaultProps = {
  token: null,
};

export default Header;

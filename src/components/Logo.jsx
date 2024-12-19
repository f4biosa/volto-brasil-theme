import React from 'react';
import { UniversalLink, Icon } from '@plone/volto/components';
import logo from '../public/logo.png';

const Logo = ({ href }) => {
  return (
    <UniversalLink
      href={href}
      openLinkInNewTab
      className={'logo'}
    >
      <img src={logo} alt="Logo" />
    </UniversalLink>
  );
};

export default Logo;

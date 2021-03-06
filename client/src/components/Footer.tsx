import React from 'react';

import Colors from '../constants/Colors';

// Fontawesome
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FixMeLater } from '../constants/Utilities';

const Footer = (props: FixMeLater) => {
  return (
    <div
      className="footer"
      style={{
        flexShrink: 0,
      }}
    >
      <hr
        style={{
          marginTop: 0,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: '10%',
          }}
        >
          <small>Copyright &copy; Artemis</small>
        </div>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '10%',
          }}
        >
          <FontAwesomeIcon
            className="footer-icon"
            icon={faFacebookF}
            title="Facebook"
            style={{ cursor: 'pointer' }}
            size="lg"
            color={Colors.primary}
          />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faTwitter}
            title="Twitter"
            style={{ marginLeft: '5%', cursor: 'pointer' }}
            size="lg"
            color={Colors.primary}
          />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faInstagram}
            title="Instagram"
            style={{ marginLeft: '5%', cursor: 'pointer' }}
            size="lg"
            color={Colors.primary}
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer;

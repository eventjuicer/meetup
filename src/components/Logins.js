import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'react-admin';
import Card  from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';

//import LoginByPassword from './LoginByPassword';
//import LoginByRequest from './LoginByRequest';
import LoginByToken from './LoginByToken';

import styles from '../styles/landing';
import { ThemeProvider } from '@material-ui/styles';

const Logins = props => {

  const { theme } = props;
  const { accent1Color } = theme.palette;

  return (
    <ThemeProvider theme={theme}>
      <div style={{ ...styles.main, backgroundColor: accent1Color }}>
        <Card style={(styles.card, styles.secondary)}>
          <div style={styles.avatar}>
            <Avatar
              backgroundColor={accent1Color}
              icon={<LockIcon />}
              size={80}
            />
          </div>

          <LoginByToken {...props} />

          {/*  <Tabs>
            <Tab label="I have a password">
              <LoginByPassword {...props} />
            </Tab>

            <Tab label="I don't have a password">
              <LoginByRequest {...props} />
            </Tab>
          </Tabs>

          */}
        </Card>

        <Notification />
      </div>
    </ThemeProvider>
  );
};

Logins.propTypes = {
  theme: PropTypes.object.isRequired,
//  translate: PropTypes.func.isRequired
};

Logins.defaultProps = {
  theme: {}
};

export default Logins;

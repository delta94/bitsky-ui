/**
 *
 * DiaHeaderCmp
 *
 */

import { Button, Typography } from 'antd';

// import UserAvatar from './UserAvatar';
import Link from 'umi/link';
import PropTypes from 'prop-types';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import Avatar from '../GlobalHeader/AvatarDropdown';
import styles from './index.less';

const { Text } = Typography;

function DiaUserInfoCmp(props) {
  let userInfo = (
    <div style={{ display: 'inline-block' }}>
      <Link to="/login">
        <Button type="link" style={{ padding: 0 }}>
          {formatMessage({ id: 'app.components.DiaUserInfoCmp.logIn' })}
        </Button>
      </Link>
      <Text style={{ margin: '0 10px' }}>
        {formatMessage({ id: 'app.components.DiaUserInfoCmp.or' })}
      </Text>
      <Link to="/signup">
        <Button type="primary">
          {formatMessage({ id: 'app.components.DiaUserInfoCmp.signUp' })}
        </Button>
      </Link>
    </div>
  );

  if (props.currentUser && props.currentUser.email) {
    // userInfo = getUserAvatar(props.user.profile);
    // userInfo = <UserAvatar profile={props.user.profile} />;
    userInfo = <Avatar menu />;
  }
  return <div style={{ height: '64px', lineHeight: '64px' }}>{userInfo}</div>;
}

DiaUserInfoCmp.propTypes = {
  currentUser: PropTypes.object,
};

export default DiaUserInfoCmp;

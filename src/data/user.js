import PropTypes from 'prop-types';

export const dummyUser = {
  id: 123,
  name: "Jack Song",
};

const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default UserType;

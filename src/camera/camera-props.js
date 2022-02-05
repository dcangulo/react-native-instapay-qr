import PropTypes from 'prop-types';

const defaultProps = {
  style: {},
  onBarCodeScanned: () => null,
};

const propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onBarCodeScanned: PropTypes.func,
};

export {
  defaultProps,
  propTypes,
};

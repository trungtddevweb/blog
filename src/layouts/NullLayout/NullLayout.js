import PropTypes from 'prop-types';

const NullLayout = ({ children }) => {
    return <div>{children}</div>;
};

NullLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NullLayout;

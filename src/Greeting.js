import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRandomGreeting } from './redux/greetingActions';

function Greeting({ randomGreeting, fetchRandomGreeting }) {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
}

Greeting.propTypes = {
  randomGreeting: PropTypes.string.isRequired,
  fetchRandomGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  randomGreeting: state.randomGreeting,
});

const mapDispatchToProps = {
  fetchRandomGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

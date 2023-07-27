import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  return {
    randomGreeting: state.randomGreeting,
  };
};

const mapDispatchToProps = {
  fetchRandomGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

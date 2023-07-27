import moment from "moment";
import React from "react";
import PropTypes from 'prop-types';

export default function withConvertDate(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: this.convertDate(this.props.date) }
    }

    convertDate(date) {
      return moment(new Date(date).toLocaleDateString()).fromNow();
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
}

withConvertDate.propTypes = {
  date: PropTypes.string.isRequired
}
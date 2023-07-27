import DateTime from "./DateTime";
import withConvertDate from "./withConvertDate";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const DateTimePretty = withConvertDate(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe title={nanoid(5)} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
}
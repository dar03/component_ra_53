import Video from "./Video";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

export default function VideoList(props) {
  return props.list.map((item) => <Video key={nanoid()} url={item.url} date={item.date} />);
}

VideoList.propTypes = {
  list: PropTypes.array.isRequired
}
import PropTypes from 'prop-types'
import shortid from 'shortid';
import Star from './Star'

export default function Stars({ count }) {
    const isCount = count >= 1 && count <= 5 ? true : false

    if (!isCount) return null;
    const arr = [...Array(count).keys()];

    return (
        <ul className="card-body-stars u-clearfix">
            {arr.map(() => <Star key={shortid.generate()} />)}
        </ul>
    )
}
Stars.defaultProps = {
    count: 1
};

Stars.propTypes = {
    count: PropTypes.number
};
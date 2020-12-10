import { connect } from "react-redux";
import TagGroup from '../../components/Tag/TagGroup';

const mapStateToProps = (state) => ({
    tagArray: state.tagArray
});

const TagGroupContainer = connect(mapStateToProps)(TagGroup);

export default TagGroupContainer;
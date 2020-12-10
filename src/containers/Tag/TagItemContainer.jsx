import { connect } from "react-redux";
import TagItem from "../../components/Tag/TagItem";
import { deleteTag } from './../../actions';

const mapDispatchToProps = (dispatch) => ({
    deleteTag: (id) => {
        dispatch(deleteTag(id))
    }
});

const TagItemContainer = connect(null, mapDispatchToProps)(TagItem);

export default TagItemContainer;
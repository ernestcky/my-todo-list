import { connect } from "react-redux";
import TagItem from "../../components/Tag/TagItem";
import { deleteTag, updateTag } from './../../actions';

const mapDispatchToProps = (dispatch) => ({
    deleteTag: (id) => {
        dispatch(deleteTag(id))
    },
    updateTag: (tag) => {
        dispatch(updateTag(tag))
    }
});

const TagItemContainer = connect(null, mapDispatchToProps)(TagItem);

export default TagItemContainer;
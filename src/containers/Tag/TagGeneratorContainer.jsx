import { connect } from "react-redux";
import { submitTag, initTagArray } from "../../actions";
import TagGenerator from '../../components/Tag/TagGenerator';

const mapStateToProps = (state) => ({
    tagArray: state.tagArray
})

const mapDispatchToProps = (dispatch) => ({
    submitTag: (tag) => {
        dispatch(submitTag(tag));
    },
    initTagArray: (data) => {
        dispatch(initTagArray(data))
        dispatch(initTagArray(data))
    }
});

const TagGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TagGenerator);

export default TagGeneratorContainer;
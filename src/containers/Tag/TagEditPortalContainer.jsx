import { connect } from "react-redux";
import TagEditPortal from '../../components/Tag/TagEditPortal';
import { initTagArray } from './../../actions';

const mapStateToProps = (state) => ({
    tagArray: state.tagArray
});

const mapDispatchToProps = (dispatch) => ({
    initTagArray: (data) => {
        dispatch(initTagArray(data))
    }
}) 

const TagEditPortalContainer = connect(mapStateToProps, mapDispatchToProps)(TagEditPortal);

export default TagEditPortalContainer;
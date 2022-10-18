import {useDispatch} from "react-redux";
import {AllActionCreators} from "../store/reducers/action-creators";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllActionCreators, dispatch)
}
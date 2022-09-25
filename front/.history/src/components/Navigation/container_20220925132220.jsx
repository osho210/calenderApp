import Navigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";


//calenderプロパティが分からない
const mapStateToProps = state => ({ calender: state.calender })

//actionのデータをreducerを介してstoreに渡すことがdispatch
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month))
    }
})

//2つの引数で関数を実行して
const mergeProps = (stateProps, dispatchProps) => ({
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calender)
        dispatchProps.setMonth(nextMonth)
    },
    setPreviousMonth: () => {
        const previoutMonth = getPreviousMonth(stateProps.calender);
        dispatchProps.setMonth(previoutMonth)
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation)
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";


const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: () => {
        dispatch(addScheduleOpenDialog());
    }
});

const mapStateToProps = state => ({ calendar: state.calendar })

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})

//conect(prpsの制御 , stateの更新)
//connectで渡す順番にも順序が
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CalendarBoard);
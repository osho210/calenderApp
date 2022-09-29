//typeの宣言
import dayjs from "dayjs";
import {
    ADD_SCHEDULE_SET_VALUE,
    ADD_SCHEDULE_OPEN_DIALOG,
    ADD_SCHEDULE_CLOSE_DIALOG
} from "./actions";


const init = {
    //formが開いているか
    form: {
        title: "",
        description: "",
        date: dayjs(),
        location: ""
    },
    // dialogが開いているか
    isDialogOpen: false
}

// actionの状態に応じて更新を行う
const addScheduleReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_SCHEDULE_SET_VALUE:
            //formの第1引数にstateの変数,第2引数に格納する値
            return { ...state, form: { ...state.form, ...payload } }
        //isDialogOpenをtrue
        case ADD_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true }
        //初期化をしている
        case ADD_SCHEDULE_CLOSE_DIALOG:
            return init
        default:
            // return {state} 画面の初期化ができていなかったため
            return state;
    }
}

export default addScheduleReducer
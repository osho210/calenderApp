import { isSomeDay } from "./calendar";
export const setSchedules = (calendar,schedules)=>
calendar.map(c=>({
    date:c,
    schedules:schedules.fillter(e=>is)
}))
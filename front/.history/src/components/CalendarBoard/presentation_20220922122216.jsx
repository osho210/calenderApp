import React from "react";
import CalendarElement from "../CalendarElement"
import * as styles from "./style.css";
import {
    GridList, Typography
} from "@material-ui/core";
const days = ["日", "月", "火", "水", "木", "金", "土"]


const CalendarBoard = ({ calendar = {
    month: 11,
    year: 2019
} }) => {
    console.log(calendar)

    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {days.map(day => (
                    <li key={day}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {day}
                        </Typography>
                    </li>
                ))}
                {calendar.map(date => (
                    <li key={date.toISOString()}>
                        <CalendarElement date={date} />
                    </li>
                ))}
            </GridList>
        </div>
    );
};



export default CalendarBoard;
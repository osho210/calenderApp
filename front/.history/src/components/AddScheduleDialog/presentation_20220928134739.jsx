import React from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid
}
    from "@material-ui/core";
//ロゴのインポート
import {
    Description,
    LocationCityOutlined,
    NotesOutlined,
    AccessTime
} from "@material-ui/icons";

//カレンダー
import { DatePicker } from "@material-ui/pickers";

//Bootstrapのようなculom
import { withStyles } from "@material-ui/core/styles";

const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: { marginBottom: 32, fontSize: 22 }
})(Input)

const AddScheduleDialog = ({
    schedule: {
        form: { title, location, description, date },
        isDialogOpen
    },
    closeDialog,
    setSchedule
}) => {
    return (
        //クリックしたときに表示させるダイアログ
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogContent>
                <Title
                    autoFocus
                    fullWidth
                    placeholder="タイトルと日時を追加"
                    value={title}
                    onChange={e => setSchedule({ title: e.target.value })}
                />
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            value={date}
                            onChange={d => setSchedule({ date: d })}
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            disableToolbar
                            fullWidth
                            style={spacer}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between" >
                    <Grid item>
                        <LocationCityOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            style={spacer}
                            fullWidth
                            placeholder="場所を追加"
                            value={location}
                            onChange={e => setSchedule({ location: e.target.value })}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignContent="center" justifyContent="space-between">
                    <Grid item>
                        <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            style={spacer}
                            fullWidth placeholder="説明を追加"
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined">
                    保存
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddScheduleDialog;
import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { primary } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 200,
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 26,
        padding: 10,
    },
    pos: {
        marginBottom: 17,
    },
    top: {
        marginTop: 17,
    },
    btn: {
        margin: 17,
        width: 50,
        height: 30,
    }

});

const imgStyle = {
    height: "11em",
    width: "11em",

}

const formInitialState = {
    bones: false,
    joints: false,
    memory: false,
    respiratory: false,
    digestive: false,
    heart: false,
}

export default function AilsForm(props) {
    const classes = useStyles();
    const [ailsSelect, setAilsSelect] = useState(formInitialState);
    const [ails, setAils] = useState([]);

    const handleChange = (e) => {
        setAilsSelect({ ...ailsSelect, [e.target.name]: !ailsSelect[e.target.name] });
    }

    const onSubmit = (ailsSelect) => {
        const newArr = [];
        for (let [key, value] of Object.entries(ailsSelect)) {
            if (value) {
                newArr.push(key);
            }
        }
        props.handleSubmit(newArr);
    }

    const onReset = (e) => {
        e.preventDefault();

        props.onReset && props.onReset(e.target);
    }
    return (
        <FormGroup>
            <Typography className={classes.title}>Choose what ails you</Typography>
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.bones}
                        onChange={handleChange}
                        name="bones"
                        color="primary"
                    />
                }
                label="Bones"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.joints}
                        onChange={handleChange}
                        name="joints"
                        color="primary"
                    />
                }
                label="Joints"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.memory}
                        onChange={handleChange}
                        name="memory"
                        color="primary"
                    />
                }
                label="Memory"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.respiratory}
                        onChange={handleChange}
                        name="respiratory"
                        color="primary"
                    />
                }
                label="Respiratory"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.digestive}
                        onChange={handleChange}
                        name="digestive"
                        color="primary"
                    />
                }
                label="Digestive"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.heart}
                        onChange={handleChange}
                        name="heart"
                        color="primary"
                    />
                }
                label="Heart"
            />
            <button className={classes.btn} onClick={() => onSubmit(ailsSelect)}>Submit</button>
        </FormGroup>
    )
}
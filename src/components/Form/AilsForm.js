import * as React from 'react';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const initState = {
    bones: false,
    joints: false,
    memory: false,
    respiratory: false,
    digestive: false,
    heart: false,
}

export default function AilsForm(props) {
    const [ailsSelect, setAilsSelect] = useState(initState);
    const [ails, setAils] = useState([]);
    console.log("this is before: ", ails);
    const handleChange = (e) => {

        // if (!ails.indexOf(e.target.name)) {
        //     setAils(...ails, e.target.name)
        // }
        setAilsSelect({ ...ailsSelect, [e.target.name]: !ailsSelect[e.target.name] });
    }
    console.log(ailsSelect);
    const checkedObject = (ailsSelect) => {
        const entries = Object.entries(ailsSelect)
        console.log(entries);
    }

    console.log("this is after: ", ails);

    const onSubmit = (ailsSelect) => {
        const newArr = [];
        for (let [key, value] of Object.entries(ailsSelect)) {
            if (value) {
                newArr.push(key);
            }
        }
        props.handleSubmit(newArr);
        console.log(ailsSelect);

        // const entries = Object.entries(ailsSelect)
        // console.log(entries);

        //     if (ailsSelect) {
        //         setAils.push(ailsSelect)
        //     }
        // props.handleSubmit(ails);
    }

    console.log(ails);


    const onReset = (e) => {
        e.preventDefault();

        props.onReset && props.onReset(e.target);
    }


    return (
        <FormGroup row>
            <h1>Choose what ails you</h1>
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
            <button onClick={() => onSubmit(ailsSelect)}>Submit</button>

        </FormGroup>

        // <form onSubmit={onSubmit} onReset={onReset}>
        //     <h1>Choose what ails you</h1>
        //     <select name="ailSelect[]" multiple size="6">
        //         <option value="bones">Bones</option>
        //         <option value="joints">Joints</option>
        //         <option value="memory">Memory</option>
        //         <option value="respiratory">Respiratory</option>
        //         <option value="digestive">Digestive</option>
        //         <option value="heart">Heart</option>
        //     </select>
        //     {/*  */}
        //     <input type="reset" value="Clear" />
        //     <button onClick={props.showReport}>Show Report</button>

        // </form>
    )

}
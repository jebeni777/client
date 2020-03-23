import * as React from 'react';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


export default function AilsForm(props) {
    const [ailsSelect, setAilSelect] = useState({
        checkBones: false,
        checkJoints: false,
        checkMemory: false,
        checkRespiratory: false,
        checkDigestive: false,
        checkHeart: false,
    });



    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e)
        // this.props.onSave && this.props.onSave.call(this);
    }

    const handleChange = (e) => {
        setAilSelect({ ...ailsSelect, [e.target.name]: e.target.checked })
        // props.onChange && props.onChange(e.target);
    }

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
                        checked={ailsSelect.checkBones}
                        onChange={handleChange}
                        name="checkBones"
                        color="primary"
                    />
                }
                label="Bones"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="end"
                        checked={ailsSelect.checkJoints}
                        onChange={handleChange}
                        name="checkJoints"
                        color="primary"
                    />
                }
                label="Joints"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.checkMemory}
                        onChange={handleChange}
                        name="checkMemory"
                        color="primary"
                    />
                }
                label="Memory"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.checkRespiratory}
                        onChange={handleChange}
                        name="checkRespiratory"
                        color="primary"
                    />
                }
                label="Respiratory"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.checkDigestive}
                        onChange={handleChange}
                        name="checkDigestive"
                        color="primary"
                    />
                }
                label="Digestive"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="start"
                        checked={ailsSelect.checkHeart}
                        onChange={handleChange}
                        name="checkHeart"
                        color="primary"
                    />
                }
                label="Heart"
            />
            <input type="submit" value="Submit Ailments" onClick={onSubmit} />
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
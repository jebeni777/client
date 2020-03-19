import * as React from 'react';
import { useState } from 'react';


export default function AilsForm(props) {
    const [ailsSelect, setAilSelect] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e)
        // this.props.onSave && this.props.onSave.call(this);
    }

    const onChange = (e) => {
        e.preventDefault();

        props.onChange && props.onChange(e.target);
    }

    const onReset = (e) => {
        e.preventDefault();

        props.onReset && props.onReset(e.target);
    }


    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <h1>Choose what ails you</h1>
            <select name="ailSelect[]" multiple size="6">
                <option value="bones">Bones</option>
                <option value="joints">Joints</option>
                <option value="memory">Memory</option>
                <option value="respiratory">Respiratory</option>
                <option value="digestive">Digestive</option>
                <option value="heart">Heart</option>
            </select>
            {/* <input type="submit" value="Submit Ailments" /> */}
            <input type="reset" value="Clear" />
            <button onClick={props.showReport}>Show Report</button>

        </form>
    )

}
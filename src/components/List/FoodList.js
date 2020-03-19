import * as React from 'react';
import AilmentItem from './AilmentItem';

export default (props) =>
    (
        <table>
            <tbody>
                {props.ailments.map((currAil, i) =>
                    <AilmentItem name={currAil.name} key={i}
                        onDeleteAilment={props.onDeleteAilment}
                    />)
                }
                {/* {currAil.foods.map((currFood, i) =>
                    <td>{currFood}</td>
                )} */}
            </tbody>
        </table>
    )
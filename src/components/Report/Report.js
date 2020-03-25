import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import myConfigSanityClient from '../../client';


const builder = imageUrlBuilder(myConfigSanityClient);

export default (props) => {
    console.log("this is begining:", props);
    const [ailments] = useState(props);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const data = await client.fetch(`
            *[_type == 'ailments']{
                title, slug, image, imageAltText, body, nutrients, foods}`)
            console.log("the data: ", data)
            setDetails(data)
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
    }

    return (
        <div>
            {console.log("this is details: ", details)}
            {details.map(data => {
                function urlFor(_ref) {
                    return builder.image(_ref)
                }
                { console.log("this is more data:", data) }
                return (
                    <>
                        <table>
                            <tbody>
                                {props.ailments.map((currAil, i) => {

                                    if (data.slug.current === currAil) {
                                        // debugger
                                        console.log("and ailments after if: ", currAil);
                                        return (
                                            <tr key={i}>
                                                <td>{data.title}</td>
                                                <td>{data.foods}</td>
                                                <td>{data.nutrients}</td>
                                            </tr>
                                        )

                                    }
                                }
                                )}
                            </tbody>
                        </table>
                    </>
                )


            })}
            <button onClick={props.closeReport}>Close Report</button>
        </div>

    )
}
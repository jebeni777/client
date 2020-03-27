import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import Report from '../components/Report/Report';
import AilsForm from '../components/Form/AilsForm';
// import FoodList from '../components/List/FoodList';
import client from '../client';

export default () => {
    const [name, setName] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [report, setReport] = useState([]);
    const [ailsSelect, setAilsSelect] = useState([]);
    const [ailments, setAilments] = useState([]);

    const showReport = (e) => {
        console.log("showReport e: ", e);
        setReport(e);
        setShowForm(false);
    }

    const closeReport = () => {
        setReport(false);
        setShowForm(true);
    }

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const ailment = await client.fetch(`
        *[_type == 'ailments']{
            title, slug, image, imageAltText, body, nutrients, foods}`)
            console.log("ailment: ", ailment)
            setAilments(ailment)
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
        // setIsLoading(false);
    }

    const view = useMemo(() => ailsSelect,
        [ailsSelect, name]
    );

    const handleSubmit = (ails) => {
        console.log("inside handleSubmit")
        console.log(ails);
        setAilsSelect(ails);
        showReport(true);
    };

    const clearSelect = (e) => {
        setAilsSelect = [];
    }

    return (
        <div>
            {showForm &&
                <AilsForm
                    handleSubmit={handleSubmit}
                    showForm={showForm}
                    showReport={showReport}
                    onReset={() => clearSelect('')} />
            }
            {view <= 0 &&
                <h1>There are no items to display</h1>
            }
            {report && showReport &&
                <Report ailments={ailsSelect}
                    closeReport={closeReport} />
            }

        </div>
    )
}
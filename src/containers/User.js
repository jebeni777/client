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

    // const getSelectedOptions = (select, fn) => {
    //     var opts
    // }

    const showReport = (e) => {
        console.log("showReport e: ", e);
        // async function onLoad() {
        //     try {
        //         const ailment = await client.fetch(`
        //         *[_type == 'ailments']{
        //             title, slug, body, nutrients, foods}`)
        //         console.log("ailment: ", ailment);
        //         setAilments(ailment)
        //     } catch (e) {
        //         if (e !== "No current user") {
        //             alert(e)
        //         }
        //     }
        // }
        // // if (ailsSelect.name === ailment.current.slug)
        // console.log(ailments);
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

    // const createReport = (formImput) => {
    //     fetch('https.//api.somedomain.com/log.txt', {
    //         method: 'post',
    //         body: JSON.stringify.length(formInput)
    //     }).then(function (response) {
    //         return response.json();
    //     }).then(function (data) {
    //         sampleLog.log('Created Report:', data.html_url);
    //     });
    // }

    // function submitReport() {
    //     var content = document.querySelector('AilsSelect').value;
    //     if (content) {
    //         createReport({
    //             description: 'Fetch API POST example',
    //             public: true,
    //             files: {
    //                 'test.js': {
    //                     content: content
    //                 }
    //             }
    //         });
    //     } else {
    //         sampleLog.log('Please enter in content to POST to a new Report.');
    //     }
    // }

    // var submitBtn = document.querySelector('button');
    // submitBtn.addEventListener('click', submitReport);

    const view = useMemo(() => ailsSelect,
        [ailsSelect, name]
    );

    const handleSubmit = (ails) => {
        console.log("inside handleSubmit")
        console.log(ails);
        setAilsSelect(ails);
        showReport(true);

        // <Report {...ails} />

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
            {/* {view && view.length &&
                <FoodList
                    ailsSelect={view}
                    showReport={showReport} />
            } */}
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
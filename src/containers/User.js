import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import Report from '../components/Report/Report';
import AilsForm from '../components/Form/AilsForm';
// import FoodList from '../components/List/FoodList';
import client from '../client';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

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

export default () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [report, setReport] = useState([]);
    const [ailsSelect, setAilsSelect] = useState([]);
    // const [ailments, setAilments] = useState([]);

    const showReport = (e) => {
        setReport(e);
        setShowForm(false);
    }

    const closeReport = () => {
        setReport([]);
        setShowForm(true);
    }

    const view = useMemo(() => ailsSelect,
        [ailsSelect, name]
    );

    const handleSubmit = (ails) => {
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
                <Typography className={classes.title}>There are no items to display</Typography>
            }
            {report && showReport &&
                <Report ailArr={ailsSelect}
                    closeReport={closeReport} />
            }

        </div>
    )
}
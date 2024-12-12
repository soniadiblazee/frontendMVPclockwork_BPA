/* import react, chart
line renders a line chart 
imported specific (and needed) things from Chart */

import React from "react";
import {Line} from 'react-chartjs-2';
import {Chart as chartjs, categoryScale, linearScale, pointElement, lineElement, title, tooltip, legend} from 'chart.js';

/* displays a line chart that will show the progress of the user
over twelve months. the function chartsPage includes the months as labels,
and a dataset to display the progress over time */

function ChartsPage() {
    const data = {
        label: ['january','february','march','april','may','june','july','august','september','october','november','december'],
        datasets: [
            {
                label: 'Progress over time',
                data: [39,45,56,71,80 /* data example */],
                borderColor: 'rgba(5, 20, 73, 1)',
                backgroundColor: 'rgba(137, 113, 93, 0.5)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h1>Charts</h1>
            <Line data={data} />
        </div>
    );
}

export default ChartsPage;
//export default so this code can be used in other files
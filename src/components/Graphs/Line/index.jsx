import React from 'react';

import {ResponsiveLine} from '@nivo/line'

const calculatePrevious = (e, data) => {
    console.log(data)
}

const LineGraph = ({data, colors}) => (
    <ResponsiveLine
        data={data}
        colors={colors}
        margin={{top: 10, right: 127, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Data de coleta',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            format: value =>
                `${Number(value).toLocaleString('pt-BR', {
                    minimumFractionDigits: 0,
                })}`,
            orient: 'left',
            tickSize: 0,
            tickPadding: 4,
            tickRotation: -50,
            legend: 'Numero de reclamacoes respondidas',
            legendOffset: -45,
            legendPosition: 'middle'
        }}
        pointSize={8}
        pointColor={{theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{from: 'serieColor'}}
        useMesh={true}
        tooltip={function (e) {
            return (
                <div
                    style={{
                        padding: 12,
                        color: "#000",
                        background: '#fff',
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "14px",
                        fontFamily: "var(--font-body)"
                    }}
                >
                    <div style={{width: "10px", height: "10px", backgroundColor: e.point.serieColor, display: "block"}} />
                    <span>{e.point.serieId}</span>
                    <strong>
                        {`${Number(e.point.data.y).toLocaleString('pt-BR', {
                            minimumFractionDigits: 0,
                        })}`}
                    </strong>
                </div>
            )
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineGraph;
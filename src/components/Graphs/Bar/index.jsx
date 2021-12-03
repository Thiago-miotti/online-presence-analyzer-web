import React from 'react';

// Nivo
import {ResponsiveBar} from '@nivo/bar'

import {AutoSizer} from 'react-virtualized'

const BarGraph = ({data, colors, keys}) => (
    <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="dia"
        margin={{top: 5, right: 134, bottom: 50, left: 45}}
        // groupMode="grouped"
        padding={0.3}
        valueScale={{type: 'linear'}}
        indexScale={{type: 'band', round: true}}
        colors={colors}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#d33e3e',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#7fe36f',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'respondidas'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'reclamacoes'
                },
                id: 'dots'
            }
        ]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'data',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            format: value =>
                `${Number(value).toLocaleString('pt-BR', {
                    minimumFractionDigits: 0,
                })}`,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -50,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        label={""}
        labelSkipHeight={12}
        labelTextColor={"#000"}
        valueFormat={value => `${Number(value).toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
            })}`}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
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
                    <div style={{width: "10px", height: "10px", backgroundColor: e.color, display: "block"}} />
                    <span>{e.id}</span>
                    <strong>
                        {`${Number(e.value).toLocaleString('pt-BR', {
                            minimumFractionDigits: 0,
                        })}`}
                    </strong>
                </div>
            )
        }}

    />
);

export default BarGraph;
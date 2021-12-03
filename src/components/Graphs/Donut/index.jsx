import React from 'react';

import { ResponsivePie } from '@nivo/pie';

const DonutChart = ({data}) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Correios'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Mercado Livre'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Magazine Luiza'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Correios'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'PicPay'
                },
                id: 'lines'
            },
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 65,
                itemsSpacing: 0,
                itemWidth: 75,
                itemHeight: 15,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
        valueFormat={ value =>
            `${Number(value).toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
            })}`
        }
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
                    <div style={{width: "10px", height: "10px", backgroundColor: e.datum.color, display: "block"}} />
                    <span>{e.datum.label}</span>
                    <strong>
                        {`${Number(e.datum.value).toLocaleString('pt-BR', {
                            minimumFractionDigits: 0,
                        })}`}
                    </strong>
                </div>
            )
        }}
    />
);

export default DonutChart;
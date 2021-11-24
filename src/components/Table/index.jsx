import React from 'react';
import "./style.css"

// MUI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

// Utils
import { selectCompanyInfoById } from '../../utils/selectCompanyInfo';

const rows = [
    { companyId: 1, score: '4.9', companyname: "PicPay"},
    { companyId: 2, score: '5.3', companyname: "Ifood"},
    { companyId: 3, score: '8', companyname: "Correios"},
    { companyId: 4, score: '7.4', companyname: "Magalu"},
    { companyId: 5, score: '9', companyname: "Nubank"},
    { companyId: 6, score: '6.1', companyname: "Mercado Livre"},
];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableOpa = ({data}) => {
    const classes = useStyles();
    return (
        <div className="table-container" style={{ height: 400, width: '100%' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{borderBottom: 0, paddingBottom: 0, paddingTop: 0, lineHeight: 0}}> </TableCell>
                        <TableCell style={{borderBottom: 0, paddingBottom: 0, paddingTop: 0, lineHeight: 0}} align="right"> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow style={{borderBottom: 0}} key={row.companyId}>
                            <TableCell style={{borderBottom: 0}} padding='none' component="th" scope="row">
                                <div className="table-company-cell">
                                    <img style={{width: "68px",height: "68px"}} src={selectCompanyInfoById(row.companyId).src} alt="company icon"/>
                                    <p className="table-company-cell-name">{row.companyname}</p>
                                </div>
                            </TableCell>
                            <TableCell style={{borderBottom: 0}} align="right"><p className="table-company-cell-score">{row.score}</p></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableOpa;
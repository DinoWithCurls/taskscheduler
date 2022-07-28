import React, { useState } from "react";

import {
  Container,
  TableMain,
  Head,
  Body,
  Row,
  Cell,
  Paper,
  SortLabel,
} from "../utils/muiComponents";

import AddNoteButton from "./buttons/addNoteButton";

import { Filter } from "./iconsComponent";

import jsonFile from "../data/info.json";
import headCells from "../data/headers.json";
import OptionButton from "./buttons/optionButton";
import StatusButton from "./buttons/statusButton";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const TableHeader = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <Head>
      <Row>
        {headCells.map((headCell) => {
          return (
            <Cell
              key={headCell.id}
              align={headCell.align}
              padding={"normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ border: "none" }}
            >
              <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{ fontWeight: "bold" }}>{headCell.label}</div>
                {headCell.label.length > 0 ? (
                  <Filter style={{ color: "grey" }} />
                ) : null}
                <SortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                ></SortLabel>
              </div>
            </Cell>
          );
        })}
      </Row>
    </Head>
  );
};

export const Table = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("task");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  return (
    <Container component={Paper}>
      <TableMain
        sx={{
          tableLayout: "fixed",
          overflowX: "auto",
          mb: 2,
          width: "90%",
          borderWidth: "2px",
          borderColor: "black",
        }}
        small
      >
        <TableHeader
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <Body>
          {stableSort(jsonFile, getComparator(order, orderBy)).map(
            (row, index) => {
              const labelID = index;
              return (
                <Row tabIndex={-1} key={row.id}>
                  <Cell
                    component="th"
                    scope="row"
                    style={{
                      width: "70%",
                      borderBottom: "none",
                    }}
                    id={labelID}
                    align={"left"}
                  >
                    {row.date}
                  </Cell>
                  <Cell
                    component="th"
                    scope="row"
                    style={{
                      whiteSpace: "normal",
                      width: "80%",
                      borderBottom: "none",
                      display: "block",
                    }}
                    id={labelID}
                  >
                    {row.entityName}
                  </Cell>
                  <Cell
                    align="left"
                    style={{
                      width: "20%",
                      borderBottom: "none",
                    }}
                  >
                    {row.taskType}
                  </Cell>
                  <Cell
                    align="left"
                    style={{
                      width: "20%",
                      borderBottom: "none",
                    }}
                  >
                    {row.time}
                  </Cell>
                  <Cell
                    align="left"
                    style={{
                      whiteSpace: "nowrap",
                      width: "20%",
                      borderBottom: "none",
                    }}
                  >
                    {row.contactPerson}
                  </Cell>
                  <Cell
                    align="left"
                    style={{
                      whiteSpace: "nowrap",
                      width: "100%",
                      display: "block",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      height: "100%",
                      borderBottom: "none",
                    }}
                  >
                    {row.notes.length > 0 ? row.notes : <AddNoteButton />}
                  </Cell>
                  <Cell
                    align="left"
                    style={{ borderBottom: "none", width: "40%" }}
                  >
                    <StatusButton status={row.status} />
                  </Cell>
                  <Cell style={{ borderBottom: "none" }}>
                    <OptionButton />
                  </Cell>
                </Row>
              );
            }
          )}
        </Body>
      </TableMain>
    </Container>
  );
};

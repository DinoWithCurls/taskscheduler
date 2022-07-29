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
import OptionButton from "./buttons/optionButton";
import StatusButton from "./buttons/statusButton";

import { Filter, Phone, Location } from "../utils/iconsComponent";

import headCells from "../data/headers.json";

import { getComparator, stableSort } from "../utils/tableSort";

import "../styles/table.css";

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
              size="medium"
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ border: "none", cursor: "pointer" }}
              onClick={createSortHandler(headCell.id)}
            >
              <div class="head-cell-body">
                <div class="head-cell-text">{headCell.label}</div>
                {headCell.label.length > 0 ? (
                  <Filter style={{ color: "grey" }} />
                ) : null}
                <SortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                ></SortLabel>
              </div>
            </Cell>
          );
        })}
      </Row>
    </Head>
  );
};

export const Table = ({data}) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  return (
    <Container component={Paper}>
      <TableMain class="table-main">
        <TableHeader
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <Body>
          {stableSort(data, getComparator(order, orderBy)).map(
            (row, index) => {
              const labelID = index;
              return (
                <Row tabIndex={-1} key={row.id}>
                  <Cell
                    component="th"
                    scope="row"
                    class="cell-date"
                    id={labelID}
                    align={"left"}
                  >
                    {row.date}
                  </Cell>
                  <Cell
                    component="th"
                    scope="row"
                    class="cell-name"
                    id={labelID}
                  >
                    {row.entityName}
                  </Cell>
                  <Cell align="left" class="cell-task">
                    <div>
                      {row.taskType === "Call" ? (
                        <div>
                          <Phone style={{ fontSize: "small" }} /> Call
                        </div>
                      ) : (
                        <div>
                          <Location style={{ fontSize: "small" }} /> Meeting
                        </div>
                      )}
                    </div>
                  </Cell>
                  <Cell align="left" class="cell-time">
                    {row.time}
                  </Cell>
                  <Cell align="left" class="cell-contact">
                    {row.contactPerson}
                  </Cell>
                  <Cell align="left" class="cell-note">
                    {row.notes.length > 0 ? row.notes : <AddNoteButton />}
                  </Cell>
                  <Cell align="left" class="cell-status">
                    <StatusButton status={row.status} />
                  </Cell>
                  <Cell class="cell-options">
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

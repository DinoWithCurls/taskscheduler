import React, {useState} from "react";

import {
  Container,
  TableMain,
  Head,
  Body,
  Row,
  Cell,
  Paper,
  SortLabel,
  Box,
} from "../utils/muiComponents";

import AddNoteButton from "./buttons/addNoteButton";

import jsonFile from "../data/info.json";

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

const headCells = [
  {
    id: "entityName",
    label: "Entity Name",
  },
  {
    id: "task",
    label: "Task",
  },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "notes",
    label: "Notes",
  },
  {
    id: "status",
    label: "Status",
  },
];

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
              align={"right"}
              padding={"none"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <SortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span">
                  </Box>
                ) : null}
              </SortLabel>
            </Cell>
          );
        })}
      </Row>
    </Head>
  );
};

export const Table = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('task');
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc': 'asc');
    setOrderBy(property);
  }
  return (
    <Container component={Paper}>
      <TableMain sx={{ tableLayout: "fixed", overflowX: "auto", mb:2 }} small>
        <TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
        <Body>
          {stableSort( jsonFile, getComparator(order, orderBy)).map((row, index)=>{
            const labelID = index;
            return (
              <Row tabIndex={-1} key={row.entityName}>
                <Cell
                  component="th"
                  scope="row"
                  style={{
                    whiteSpace: "nowrap",
                    width: "80%",
                    display: "block",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                  id={labelID}
                >
                  {row.entityName}
                </Cell>
                <Cell
                  align="right"
                  style={{ whiteSpace: "nowrap", width: "20%" }}
                >
                  {row.taskType}
                </Cell>
                <Cell
                  align="right"
                  style={{ whiteSpace: "nowrap", width: "20%" }}
                >
                  {row.time}
                </Cell>
                <Cell
                  align="right"
                  style={{ whiteSpace: "nowrap", width: "20%" }}
                >
                  {row.contactPerson}
                </Cell>
                <Cell
                  align="right"
                  style={{
                    whiteSpace: "nowrap",
                    width: "100%",
                    display: "block",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {row.notes.length > 0 ? row.notes : <AddNoteButton />}
                </Cell>
                <Cell
                  align="right"
                  style={{ whiteSpace: "nowrap", width: "10%" }}
                >
                  {row.status}
                </Cell>
              </Row>
            )
          })
        }
        </Body>
      </TableMain>
    </Container>
  );
};

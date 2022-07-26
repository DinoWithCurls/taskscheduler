import React from "react";

import {
  Container,
  TableMain,
  Head,
  Body,
  Row,
  Cell,
  Paper,
} from "../utils/muiComponents";

import jsonFile from "../data/info.json";

// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1;
//     }
//     return 0;
//   }

//   function getComparator(order, orderBy) {
//     return order === 'desc'
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy);
//   }

//   // This method is created for cross-browser compatibility, if you don't
//   // need to support IE11, you can use Array.prototype.sort() directly
//   function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) {
//         return order;
//       }
//       return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
//   }
// export const Table = () => {

//     return (
//         <Container>

//         </Container>
//     )
// }

export const Table = () => {
    console.log(jsonFile);
    return (
    <Container component={Paper}>
      <TableMain sx={{ minWidth: 400 }} stickyHeader aria-label="sticky table">
        <Head>
          <Row>
            <Cell>Entity Name</Cell>
            <Cell>Task</Cell>
            <Cell>Time</Cell>
            <Cell>Contact Person</Cell>
            <Cell>Notes</Cell>
            <Cell>Status</Cell>
          </Row>
        </Head>
        <Body>
          {(jsonFile).map((i) => {
            return (
              <Row
                key={i.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Cell component="th" scope="row">
                  {i.entityName}
                </Cell>
                <Cell align="right">{i.taskType}</Cell>
                <Cell align="right">{i.time}</Cell>
                <Cell align="right">{i.contactPerson}</Cell>
                <Cell align="right">{i.notes}</Cell>
                <Cell align="right">{i.status}</Cell>
              </Row>
            );
          })}
        </Body>
      </TableMain>
    </Container>
  );
};

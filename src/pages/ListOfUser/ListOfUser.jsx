import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Id', minWidth: 170 },
  { id: 'code', label: 'Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Password',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('1', 'Aurora Nightingale', 'aurora.nightingale@example.com', 'DragonFly#42!'),
  createData('2', 'Xavier Thunderstrike', 'thunderstrike@example.com', 'StellarPassion$89'),
  createData('3', 'Seraphina Moonlight', 'seraphina.moonlight@example.com', 'MidnightWhisper*76'),
  createData('4', 'Orion Stardust', 'orion.stardust@example.com', 'CascadeDreams@33'),
  createData('5', 'Luna Silverwing', 'luna.silverwing@example.com', 'PhoenixRising%17'),
  createData('6', 'Phoenix Blaze', 'phoenix.blaze@example.com', 'EnigmaQuest^55'),
  createData('7', 'Nova Starshine', 'nova.starshine@example.com', 'OceanicMirage!28'),
  createData('8', 'Atlas Skywatcher', 'atlas.skywatcher@example.com', 'SolarEclipse&92'),
  createData('9', 'Electra Stormrider', 'electra.stormrider@example.com','SerenityBreeze$71'),
  createData('10', 'Draco Fireheart', 'draco.fireheart@example.com', 'NebulaCascade*44'),
  createData('11', 'Celeste Frostwind', 'celeste.frostwind@example.com', 'ThunderCrush^63'),
  createData('12', 'Sirius Shadowhunter','sirius.shadowhunter@example.com', 'AuroraBliss@87'),
  createData('13', 'Athena Sunburst', 'athena.sunburst@example.com', 'CelestialHarmony%39'),
  createData('14', 'Apollo Dawnbreaker', 'apollo.dawnbreaker@example.com', 'MysticalJourney!20'),
  createData('15', 'Selene Nightfall', 'selene.nightfall@example.com', 'GalacticFusion*58'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{
      marginBottom:'9%'
  }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
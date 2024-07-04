import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { Project } from '@prisma/client'

export const ProjectsList = ({ projects }: { projects: Project[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="List of PBL Projects">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 100 }}>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Subhead</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {project.title}
              </TableCell>
              <TableCell>{project.subhead}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

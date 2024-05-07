import { GridColDef } from "@mui/x-data-grid";

 export const columns: GridColDef[] = [
   { field: "id", headerName: "ID", flex: 2 },
   { field: "name", headerName: "Name", flex: 1 },
   { field: "email", headerName: "Email", flex: 2 },
   { field: "created_at", headerName: "Created_at", flex: 1 },
 ];


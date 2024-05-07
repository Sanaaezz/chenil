"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns } from "../Components/Datagrid/UsersColumns";
import { getAllUsers } from "../Services/users";
import { frFR } from "@mui/x-data-grid/locales";


const Users = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getAllUsers().then((res: any) => {
      setUsersList(res.data);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-white">
      {usersList && (
        <DataGrid
          rows={usersList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
          slots={{ toolbar: GridToolbar }}
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        />
      )}
    </main>
  );
};

export default Users;

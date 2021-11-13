import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { Box } from "@mui/system";

export const AdminPanel = () => {

    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {        
            axios.get("http://localhost:8000/user/").then(res => res.data)
            .then(usersInDb => {
                setUsers(usersInDb.map(u => {return {id: u.Id, Id: u.Id, Username: u.Username}}));            
            })
            .then(
                axios.get("http://localhost:8000/movie/").then(res => res.data)
                    .then(movieInDb => {
                        setMovies(movieInDb.map(m => {return {id: m.Id, Id: m.Id, Title: m.Title, Plot: m.Plot, Poster: m.Poster, Release: m.Release}}));            
                    })
            )      
        } catch (error) {
            console.log(error);
        }
    }, [])
    
    const userColumns = [
      { field: 'Id', headerName: 'Id', width: 100 },
      { field: 'Username', headerName: 'Username', width: 150},
    ];
    
    const movieColumns = [
        { field: 'Id', headerName: 'Id', width: 100 },
        { field: 'Title', headerName: 'Title', width: 150, editable: true},
        { field: 'Plot', headerName: 'Plot', width: 150, editable: true},
        { field: 'Poster', headerName: 'Poster', width: 150, editable: true},
        { field: 'Release', headerName: 'Release', width: 150, editable: true},
      ];

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: 5 }}>
            <div style={{ height: 400, width: 410, margin: "100px auto" }}>
                <h1>Users</h1>
                <DataGrid
                    rows={users}
                    columns={userColumns}
                    pageSize={5}
                    checkboxSelection
                />
            </div>
            <div style={{ height: 400, width: 770, margin: "100px auto"  }}>
                <h1>Movies</h1>
                <DataGrid
                    rows={movies}
                    columns={movieColumns}
                    pageSize={5}
                    checkboxSelection
                />
            </div>
        </Box>
  );
}
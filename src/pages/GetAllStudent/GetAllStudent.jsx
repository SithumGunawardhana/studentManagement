
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'firstName', headerName: 'First name', width: 130 },

    {field: 'name',headerName: 'Name',width: 150},
    {field: 'email',headerName: 'Email',width  :250 },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     // valueGetter: (params) =>
    //     //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    {field: 'password' ,headerName: 'Password',width:150},
];

const rows = [
    { id: 1, name: 'Snow',email:'sithumthilanka@icloud.com', password:'123456' },
    { id: 2},
    { id: 3, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function GetAllStudent() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
            />
        </div>
    );
}
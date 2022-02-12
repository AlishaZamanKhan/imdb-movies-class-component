import TableBody from './table-body.component';
import TableHeader from './table-header.component';
const Table = ({data, columns}) => {
    return (
        <>
            <table class="table">
                <TableHeader columns = {columns}/>
                <TableBody data = {data} columns = {columns}/>


            </table>
        </>
    );
}
 
export default Table;
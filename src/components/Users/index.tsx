import { Row, Col, Button } from "react-bootstrap";
import { User } from "../../pages/Home";

type UsersProps = {
    users: User[];
    deleteUser: (id:string) => void;
    getUserById: (id:string) => void;
}

const Users = ({ users, deleteUser, getUserById } : UsersProps) => {

    return(
        <section>
            <Row>
                <Col>
                    <h2>Usuários</h2>

                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Sobrenome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.length === 0 
                                    ? 
                                <tr>
                                    <td colSpan={6}>Nenhum usuário foi encontrado</td>
                                </tr>
                                    :
                                users.map(u => (
                                    <tr key={u.id}>
                                        <td>
                                            <div className="avatar">
                                                <img src={`${u.img}`} alt="" />
                                            </div>
                                        </td>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.lastName}</td>
                                        <td>{u.email}</td>
                                        <td>
                                            <Button variant="outline-info rounded-circle" onClick={ () => getUserById(u.id) }>
                                                <i className="bi bi-pencil-square"></i>
                                            </Button>

                                            <Button variant="outline-danger ms-2 rounded-circle" onClick={ () => deleteUser(u.id) }>
                                                <i className="bi bi-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </section>
    );

}

export default Users;
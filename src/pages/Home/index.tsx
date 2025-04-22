import { urlApi } from "../../config";
import { useEffect, useState } from "react";
import Users from "../../components/Users";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";
import MyToast from "../../components/Toast";

export type UserProps = {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    img: string;
}

const Home = () => {

    document.title = 'Home | Users-app';
    
    const { register, handleSubmit, watch, reset, setFocus, formState: { errors } } = useForm();
    const [ users, setUsers ] = useState<UserProps[]>([]);
    const navigate = useNavigate();
    const [ show, setShow ] = useState(false);

    const addUser = async () => {
    
        const pathsImg = [
            '../src/assets/img/man.png',
            '../src/assets/img/boy.png',
            '../src/assets/img/man2.png'
        ];

        const randomValue = Math.random() * pathsImg.length;
        const formatValue = Math.floor(randomValue); 
        
        const dataForm = {
            name: watch('name'),
            lastName: watch('lastName'),
            email: watch('email'),
            password: watch('password'),
            img: pathsImg[formatValue] 
        };

        const res = await fetch(urlApi + '/users', {
            method: 'post',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( dataForm )
        });

        if(!res.ok){
            throw new Error('Error ao fazer requisição');
        }

        const data = await res.json();
        setFocus('name');
        reset();
        setUsers(prev => [ data, ...prev ]);
        setShow(true);
        
    }

    const getUsers = async () => {

        try{

            const res = await fetch(urlApi + '/users');

            if(!res.ok){

                throw new Error('Erro ao fazer requisição');
            }

            const data = await res.json();

            setUsers(data);

        } catch(error){

            console.log(error);
        }

    }

    const getUserById = (id:string) => {
        
        navigate(`/usuario/${id}`);
    }

    const deleteUser = async (id:string) => {

        const res = await fetch(urlApi + `/users/${id}`, {
            method: 'delete',
            headers: {
                'Content-type' : 'application/json'
            },
        });

        if(res.ok){

            getUsers();
        }
    }

    const handleSetShow = () => {

        setShow(false);
    }

    useEffect(() => {

        getUsers();

    }, []);

    return(
        <>
            <Users users={ users } getUserById={ getUserById } deleteUser={ deleteUser } />
            <Form  
                register={ register } 
                addUser={ handleSubmit(addUser) } 
                errors={ errors }  
            />

            <MyToast 
                setShow={ handleSetShow } 
                show={ show } 
                callback={{ status: 'success', msg: 'Adicionado com sucesso' }} 
            />
        </>
    );

}

export default Home;
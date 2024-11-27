import {createContext, useEffect, useState} from "react";
import AsynStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

function UserProvider({children})
{
    const[ usuario, setUsuario ] = useState(null);
    const[ logado, setLogado ] = useState( false );
    const[ cadastro, setCadastro ] = useState( false );

    async function Login( email, senha )
    {
        if( email == "ana.silva106@icloud.com" && senha == "121257@Ana" ){
            await AsynStorage.setItem( "usuario" , "Ana Clara" );
            setLogado( true );
        }
    }
    async function infoUsuario()
    {
        const usuario = await AsynStorage.getItem( "usuario" );
        if( usuario ){
            setUsuario( usuario );
            setLogado( true );  
        }
    }
    useEffect( () => {
        infoUsuario();
    }, [] );

    return(
        <UserContext.Provider value={ { usuario: usuario, logado: logado, Login, infoUsuario, cadastro: cadastro, setCadastro, setLogado } }>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;
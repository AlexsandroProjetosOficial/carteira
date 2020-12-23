import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContex = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@carteira:logged');

        /**
         * Quando se usa dois !! ele retorna uma expressão logica, se tem conteudo retorna true caso contrario retorna false;
         */
        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if (email === 'alexsandrofpf2011@gmail.com' && password === 'stx33608500++') {
            localStorage.setItem('@carteira:logged', 'true');
            setLogged(true);
        } else {
            alert('E-mail ou senha estão inválidos.')
        }
    }

    const signOut = () => {
        localStorage.removeItem('@carteira:logged');
        setLogged(false);
    }

    return (
        <AuthContex.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContex.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContex);

    return context;
}

export { AuthProvider, useAuth };
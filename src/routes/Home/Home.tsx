import React, { useEffect } from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { useAppStore } from '../../state/appState';

function Home() {
    const resetFormState = useAppStore((state) => state.reset);

    useEffect(() => {
        // Clean store on load
        resetFormState();
    }, []);

    return (
        <>
            <div className="mx-20 flex min-h-screen flex-col items-center justify-center md:mx-0">
                <RegistrationForm />
            </div>
        </>
    );
}

export default Home;

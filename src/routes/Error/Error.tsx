import React from 'react';
import { useAppStore } from '../../state/appState';
import { useNavigate } from 'react-router-dom';

const Error: React.FC = (props) => {
    const errorMsg = useAppStore((state) => state.error);
    const navigate = useNavigate();

    return (
        <div className="pt-8 text-center font-inter uppercase">
            <div className="text-4xl">Error</div>
            <div className="mt-8 text-xl">{errorMsg}</div>
            <button
                className="mr-2 mt-8 inline-flex items-center rounded-lg border-2 border-black bg-white px-5 py-2.5 font-inter text-sm font-medium text-black  focus:z-10 focus:bg-black focus:text-white"
                onClick={() => {
                    // use History here because it will have saved URL params
                    navigate(-1);
                }}
            >
                GO BACK
            </button>
        </div>
    );
};

export default Error;

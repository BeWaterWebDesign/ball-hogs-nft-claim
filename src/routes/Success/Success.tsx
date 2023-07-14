import React from 'react';
import { useEffect } from 'react';
import { useFormDataStore } from '../../state/formDataState';
import { useAppStore } from '../../state/appState';

const Success: React.FC = (props) => {
    const { accountName, accountSuffix, pin } = useFormDataStore(
        (state) => state
    );
    const setError = useAppStore((state) => state.setError);
    const url = useAppStore((state) => state.url) || '/';

    useEffect(() => {
        if (!accountName) {
            // TODO: Re-enable this
            // setError("Account name not found")
        }
    }, []);

    return (
        <div className="font-dela absolute bottom-0 left-0 right-0 top-0 bg-brand-green pt-16 text-center text-brand-cream">
            <div className="mb-8 text-3xl font-bold uppercase">Success</div>
            <div className="text-lg uppercase">Your PIN is: </div>
            <div className="text-3xl">{pin}</div>
            <div className="mt-4 text-lg uppercase">Your Account name is:</div>
            <div className="text-3xl">
                {accountName}
                {accountSuffix}
            </div>
            <div className="drop-shadow-m mt-8 text-sm uppercase shadow-black">
                <div className="mb-4 text-6xl">📸</div>
                <div>Please Screenshot this page</div>
            </div>
            <div className="text-sm uppercase">
                They will only be shown once
            </div>
            <div className="mt-20">
                <a
                    className="rounded bg-white px-8 py-4 capitalize text-brand-blue drop-shadow-hard drop-shadow-lg hover:text-blue-700"
                    href={url}
                    rel={'noreferrer'}
                    target={'_blank'}
                >
                    Proceed to Account
                </a>
            </div>
            <div className="mt-8 text-xs uppercase">
                and Click the "Collectibles" tab
            </div>
        </div>
    );
};

export default Success;

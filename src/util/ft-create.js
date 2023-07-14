import { claim, generateKeys, initKeypom } from '@keypom/core';

async function createAccountAndClaim(privKey, accountId, pinCode, _network) {
    const network = _network ? _network : 'testnet';
    const accountSuffix = network === 'testnet' ? '.testnet' : '.near';
    const newAccountId = accountId + accountSuffix;
    
    const refractionKey = process.env.REACT_APP_REFRACTION_KEY || "master-key";
    
   
    await initKeypom({
        network
    });
    console.log('newAccountId: ', newAccountId)
    console.log('refractionKey: ', refractionKey)

    let {publicKeys, secretKeys} = await generateKeys({
        numKeys: 1,
        rootEntropy: `${pinCode}${refractionKey}`,
    })
    console.log('secretKeys: ', secretKeys)

    await claim({
        secretKey: privKey,
        newAccountId,
        newPublicKey: publicKeys[0],
    })
    
    // Generate the auto import link for the new account
    const walletAutoImportLink = `https://wallet.${network}.near.org/auto-import-secret-key#${newAccountId}/${secretKeys[0]}`;
    console.log('walletAutoImportLink: ', walletAutoImportLink);
    // return walletAutoImportLink;
    return {
        error: null,
        account: walletAutoImportLink,
    };
}
export { createAccountAndClaim };

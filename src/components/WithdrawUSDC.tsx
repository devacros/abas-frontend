import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {Keypair, PublicKey, SystemProgram, Transaction, TransactionSignature} from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";
import {
    BUTLER_PROGRAM_KEY,
    DRIFT_PROGRAM_KEY,
    DRIFT_STATE_KEY,
    MANGO_CACHE_KEY,
    MANGO_GROUP_CONFIG_KEY,
    MANGO_PROGRAM_KEY,
    MANGO_SIGNER_KEY,
    MANGO_USDC_NODE_KEY,
    MANGO_USDC_ROOT_KEY,
    MANGO_USDC_VAULT,
    USDC_MINT_KEY,
} from "../models/constants";
import {Butler} from "../models/butler";
import {Program} from "@project-serum/anchor";
import {
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import {ClearingHouse, } from '@drift-labs/sdk';

export type WithdrawUSDCProps = {
    show: boolean,
    mangoAccount: PublicKey,
    butlerAccountOwner: PublicKey,
    driftFreeCollateral: number,
    mangoAccountValue: number,
    positionUi: []

}

export const WithdrawUSDC: FC<WithdrawUSDCProps> = (props) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, wallet } = useWallet();

    console.log("driftFreeCollateral", props.driftFreeCollateral)
    console.log("mangoAccountValue", props.mangoAccountValue)

    let driftWithdrawValue = 50;
    let mangoWithdrawValue = 50;

    // if user exited all position and has some balance in his account
    // we set the withdrawable value to full amount of his account so he can take all money out
    // will eventually need to think about partial withdraw vs full withdraw
    // maybe we will only allow withdraw when user exited all.
    if (props.positionUi.length === 0 && props.driftFreeCollateral > 0) {
        driftWithdrawValue = props.driftFreeCollateral
        mangoWithdrawValue = props.mangoAccountValue
    }

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }
        const anchor = require("@project-serum/anchor");

        const [accountOwner, accountOwnerBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("butler_account_owner_v1")), publicKey.toBuffer()],
            BUTLER_PROGRAM_KEY
        )

        const [mangoAccountPk, mangoAccountBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("mango_account_v1")), publicKey.toBuffer()],
            BUTLER_PROGRAM_KEY
        )

        const [state, stateBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("state_v1"))],
            BUTLER_PROGRAM_KEY
        )
        const [userConfig, userConfigBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("user_config_v1")), publicKey.toBuffer()],
            BUTLER_PROGRAM_KEY
        )


        const [driftAccountPk, driftAccountBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode('user')), accountOwner.toBuffer()],
            DRIFT_PROGRAM_KEY
        );

        const [butlerDriftCollateralVault, butlerDriftCollateralBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("butler_drift_collateral_vault_v1")), publicKey.toBuffer()],
            BUTLER_PROGRAM_KEY
        )

        const [butlerMangoCollateralVault, butlerMangoCollateralBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("butler_mango_collateral_vault_v1")), publicKey.toBuffer()],
            BUTLER_PROGRAM_KEY
        )

        const [clearingHouseCollateralVault, _bump]= await PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode('collateral_vault'))],
            DRIFT_PROGRAM_KEY
        );
        const clearingHouse = ClearingHouse.from(
            connection,
            null,
            DRIFT_PROGRAM_KEY
        );

        const [userConfigPk, butlerUserConfigBump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode("butler_user_config_v1")), publicKey.toBuffer()],
            BUTLER_PROGRAM_KEY
        )

        await clearingHouse.subscribe()

        const clearingHouseState = clearingHouse.getStateAccount();
        const driftUserData = await clearingHouse.program.account.user.fetch(driftAccountPk.toString())
        const clearingHouseUserPositions = driftUserData.positions
        const clearingHouseCollateralVaultAuthority = clearingHouseState.collateralVaultAuthority
        const clearingHouseInsuranceVault = clearingHouseState.insuranceVault
        const clearingHouseInsuranceVaultAuthority = clearingHouseState.insuranceVaultAuthority


        const provider = new anchor.Provider(connection, wallet);

        const program = await anchor.Program.at(BUTLER_PROGRAM_KEY, provider) as Program<Butler>

        const mangoQuantityNative = new anchor.BN(mangoWithdrawValue * 1000000)
        const driftQuantityNative = new anchor.BN(driftWithdrawValue * 1000000)

        const userDriftCollateralAccount = await getAssociatedTokenAddress(USDC_MINT_KEY, publicKey)

        let signature: TransactionSignature = '';
        try {

            const withdrawDriftCollateralIx = await program.instruction.withdrawDriftCollateral(stateBump, accountOwnerBump, butlerDriftCollateralBump, butlerMangoCollateralBump, butlerUserConfigBump, driftQuantityNative, false, {
                accounts: {
                    state: state,
                    userDriftCollateralAccount: userDriftCollateralAccount,
                    userMangoCollateralAccount: userDriftCollateralAccount,
                    butlerDriftCollateralVault,
                    butlerMangoCollateralVault,
                    butlerAccountOwner: accountOwner,
                    userConfig: userConfigPk,
                    clearingHouseState: DRIFT_STATE_KEY,
                    clearingHouseUser: driftAccountPk,
                    clearingHouseCollateralVault: clearingHouseCollateralVault,
                    clearingHouseUserPositions: clearingHouseUserPositions,
                    clearingHouseFundingPaymentHistory: clearingHouseState.fundingPaymentHistory,
                    clearingHouseDepositHistory: clearingHouseState.depositHistory,
                    clearingHouseMarkets: clearingHouseState.markets,
                    clearingHouseCollateralVaultAuthority,
                    clearingHouseInsuranceVault,
                    clearingHouseInsuranceVaultAuthority,
                    clearingHouseProgram: clearingHouse.program.programId,
                    butlerUserPubkey: publicKey,
                    signer: publicKey,
                    tokenProgram: TOKEN_PROGRAM_ID
                },
            })
            const withdrawIx = program.instruction.withdrawMangoCollateral(stateBump, mangoAccountBump, accountOwnerBump, butlerMangoCollateralBump, butlerDriftCollateralBump, butlerUserConfigBump, mangoQuantityNative, false, {
                accounts: {
                    state: state,
                    userMangoCollateralAccount: userDriftCollateralAccount,
                    butlerDriftCollateralVault: butlerDriftCollateralVault,
                    butlerMangoCollateralVault: butlerMangoCollateralVault,
                    butlerAccountOwner: accountOwner,
                    userConfig: userConfigPk,
                    mangoProgram: MANGO_PROGRAM_KEY,
                    mangoGroupAi: MANGO_GROUP_CONFIG_KEY,
                    mangoAccountPk: mangoAccountPk,
                    mangoCacheAi: MANGO_CACHE_KEY,
                    rootBankAi: MANGO_USDC_ROOT_KEY,
                    nodeBankAi: MANGO_USDC_NODE_KEY,
                    vaultAi: MANGO_USDC_VAULT,
                    emptyAccountAi: PublicKey.default,
                    mangoVaultSigner: MANGO_SIGNER_KEY,
                    signer: publicKey,
                    butlerUserPubkey: publicKey,
                    tokenProgram: TOKEN_PROGRAM_ID
                },
            })

            signature = await sendTransaction(new Transaction().add(withdrawDriftCollateralIx).add(withdrawIx), connection, {skipPreflight: true});

            console.log("signature", signature)
            await connection.confirmTransaction(signature, 'confirmed');
            notify({ type: 'success', message: 'Transaction successful!', txid: signature });

        } catch (error: any) {
            notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
        } finally {
            await clearingHouse.unsubscribe()
        }
    }, [publicKey, notify, connection, sendTransaction]);

    if (!props.show || !props.butlerAccountOwner || !props.mangoAccount) {
        return <div></div>
    }
    return (
        <div>
    <button
        className="btn m-2 bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
    onClick={onClick} disabled={!publicKey}
>
    <span> Withdraw {(mangoWithdrawValue + driftWithdrawValue).toFixed(0)} USDC</span>
    </button>
    </div>
);
}

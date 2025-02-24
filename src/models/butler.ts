export type Butler = {
    "version": "0.1.0",
    "name": "butler",
    "instructions": [
        {
            "name": "initState",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "driftCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "authorityBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createUserAccount",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "driftCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupPk",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "driftAccountBump",
                    "type": "u8"
                },
                {
                    "name": "mangoAccountBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createUserConfig",
            "accounts": [
                {
                    "name": "userConfig",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "updateUserConfig",
            "accounts": [
                {
                    "name": "userConfig",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userCranker",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "closeSpread",
                    "type": "i8"
                },
                {
                    "name": "openSpread",
                    "type": "i8"
                },
                {
                    "name": "tradeSize",
                    "type": "u32"
                },
                {
                    "name": "mode",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createUserDriftOrders",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserOrders",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "driftUserOrdersBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "depositCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userDriftCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseDepositHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "depositMangoCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rootBankAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "nodeBankAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vaultAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "mangoAccountBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "withdrawDriftCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userDriftCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseCollateralVaultAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseInsuranceVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseInsuranceVaultAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseDepositHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerUserPubkey",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "withdrawMangoCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rootBankAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoVaultSigner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "nodeBankAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vaultAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAccountAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerUserPubkey",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "mangoAccountBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "placeArbOrder",
            "accounts": [
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracle",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingRateHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseTradeHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserOrders",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "extendedCurveHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "perpMarketAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidsAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "asksAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventQueueAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "direction",
                    "type": {
                        "defined": "PositionDirection"
                    }
                },
                {
                    "name": "quoteAssetAmount",
                    "type": "u128"
                },
                {
                    "name": "marketIndex",
                    "type": "u64"
                },
                {
                    "name": "optionalAccounts",
                    "type": {
                        "defined": "ManagePositionOptionalAccounts"
                    }
                }
            ]
        },
        {
            "name": "fillArbOrder",
            "accounts": [
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracle",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingRateHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseTradeHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserOrders",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "extendedCurveHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "perpMarketAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidsAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "asksAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventQueueAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "closeArbOrder",
            "accounts": [
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracle",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingRateHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseTradeHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "perpMarketAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidsAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "asksAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventQueueAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "direction",
                    "type": {
                        "defined": "PositionDirection"
                    }
                },
                {
                    "name": "quoteAssetAmount",
                    "type": "u128"
                },
                {
                    "name": "marketIndex",
                    "type": "u64"
                },
                {
                    "name": "spread",
                    "type": "u64"
                },
                {
                    "name": "optionalAccounts",
                    "type": {
                        "defined": "ManagePositionOptionalAccounts"
                    }
                }
            ]
        },
        {
            "name": "checkDriftMargin",
            "accounts": [
                {
                    "name": "clearingHouseUser",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "maxLeverage",
                    "type": "u128"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "userConfig",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "userPubkey",
                        "type": "publicKey"
                    },
                    {
                        "name": "userCranker",
                        "type": "publicKey"
                    },
                    {
                        "name": "tradeSize",
                        "type": "u32"
                    },
                    {
                        "name": "openSpread",
                        "type": "i8"
                    },
                    {
                        "name": "closeSpread",
                        "type": "i8"
                    },
                    {
                        "name": "mode",
                        "type": "u8"
                    },
                    {
                        "name": "padding",
                        "type": {
                            "array": [
                                "u8",
                                64
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "state",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "driftCollateralMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "mangoCollateralMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "globalDepositAmount",
                        "type": "u128"
                    },
                    {
                        "name": "padding2",
                        "type": "u128"
                    },
                    {
                        "name": "padding3",
                        "type": "u128"
                    },
                    {
                        "name": "padding4",
                        "type": "u128"
                    },
                    {
                        "name": "padding5",
                        "type": "u128"
                    },
                    {
                        "name": "padding6",
                        "type": "u128"
                    },
                    {
                        "name": "padding7",
                        "type": "u128"
                    },
                    {
                        "name": "padding8",
                        "type": "u128"
                    },
                    {
                        "name": "padding9",
                        "type": "u128"
                    },
                    {
                        "name": "padding10",
                        "type": "u128"
                    },
                    {
                        "name": "padding11",
                        "type": "u128"
                    },
                    {
                        "name": "padding12",
                        "type": "u128"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "ManagePositionOptionalAccounts",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "discountToken",
                        "type": "bool"
                    },
                    {
                        "name": "referrer",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "PositionDirection",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Long"
                    },
                    {
                        "name": "Short"
                    }
                ]
            }
        }
    ],
    "events": [
        {
            "name": "CreateUserAccountEvent",
            "fields": [
                {
                    "name": "userWallet",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "butlerAccountOwner",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "mangoAccount",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "driftAccount",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "CreateUserAccountEvent",
            "fields": [
                {
                    "name": "userPubkey",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "butlerAccountOwner",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "mangoAccount",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "driftAccount",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "PlaceArbOrderEvent",
            "fields": [
                {
                    "name": "userWallet",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "isDriftLong",
                    "type": "bool",
                    "index": false
                },
                {
                    "name": "isOpening",
                    "type": "bool",
                    "index": false
                },
                {
                    "name": "worstMangoPrice",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "driftLimitPrice",
                    "type": "u128",
                    "index": false
                },
                {
                    "name": "tradeSize",
                    "type": "u128",
                    "index": false
                },
                {
                    "name": "userConfigMode",
                    "type": "u8",
                    "index": false
                },
                {
                    "name": "spread",
                    "type": "i8",
                    "index": false
                }
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "FailMarginCheck",
            "msg": "Fail margin check"
        },
        {
            "code": 6001,
            "name": "FailOpenNewPosition",
            "msg": "Cant open new position in exit only mode"
        },
        {
            "code": 6002,
            "name": "EmptyMangoOrderBook",
            "msg": "bro wtf you emptied the mango order book"
        },
        {
            "code": 6003,
            "name": "DriftOrderNotFilledCompletely",
            "msg": "Drift order did not filled completely"
        },
        {
            "code": 6004,
            "name": "MaxDepositReached",
            "msg": "Max deposit reached"
        }
    ]
};

export const IDL: Butler = {
    "version": "0.1.0",
    "name": "butler",
    "instructions": [
        {
            "name": "initState",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "driftCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "authorityBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createUserAccount",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "driftCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoCollateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupPk",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "driftAccountBump",
                    "type": "u8"
                },
                {
                    "name": "mangoAccountBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createUserConfig",
            "accounts": [
                {
                    "name": "userConfig",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "updateUserConfig",
            "accounts": [
                {
                    "name": "userConfig",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userCranker",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "closeSpread",
                    "type": "i8"
                },
                {
                    "name": "openSpread",
                    "type": "i8"
                },
                {
                    "name": "tradeSize",
                    "type": "u32"
                },
                {
                    "name": "mode",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createUserDriftOrders",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserOrders",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "driftUserOrdersBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "depositCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userDriftCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseDepositHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "depositMangoCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rootBankAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "nodeBankAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vaultAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "mangoAccountBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "withdrawDriftCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userDriftCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseCollateralVaultAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseInsuranceVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseInsuranceVaultAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseDepositHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerUserPubkey",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "withdrawMangoCollateral",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userMangoCollateralAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerMangoCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerDriftCollateralVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rootBankAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoVaultSigner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "nodeBankAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vaultAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAccountAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "butlerUserPubkey",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "stateBump",
                    "type": "u8"
                },
                {
                    "name": "mangoAccountBump",
                    "type": "u8"
                },
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerMangoCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerDriftCollateralBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "isTransfer",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "placeArbOrder",
            "accounts": [
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracle",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingRateHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseTradeHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserOrders",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "extendedCurveHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "perpMarketAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidsAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "asksAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventQueueAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                },
                {
                    "name": "direction",
                    "type": {
                        "defined": "PositionDirection"
                    }
                },
                {
                    "name": "quoteAssetAmount",
                    "type": "u128"
                },
                {
                    "name": "marketIndex",
                    "type": "u64"
                },
                {
                    "name": "optionalAccounts",
                    "type": {
                        "defined": "ManagePositionOptionalAccounts"
                    }
                }
            ]
        },
        {
            "name": "fillArbOrder",
            "accounts": [
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userConfig",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderState",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracle",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingRateHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseOrderHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseTradeHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserOrders",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "extendedCurveHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "perpMarketAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidsAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "asksAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventQueueAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "userPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "butlerUserConfigBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "closeArbOrder",
            "accounts": [
                {
                    "name": "butlerAccountOwner",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseState",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUser",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oracle",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingPaymentHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseFundingRateHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseTradeHistory",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoGroupAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mangoAccountPk",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mangoCacheAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "perpMarketAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidsAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "asksAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "eventQueueAi",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "emptyAi",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "accountOwnerBump",
                    "type": "u8"
                },
                {
                    "name": "direction",
                    "type": {
                        "defined": "PositionDirection"
                    }
                },
                {
                    "name": "quoteAssetAmount",
                    "type": "u128"
                },
                {
                    "name": "marketIndex",
                    "type": "u64"
                },
                {
                    "name": "spread",
                    "type": "u64"
                },
                {
                    "name": "optionalAccounts",
                    "type": {
                        "defined": "ManagePositionOptionalAccounts"
                    }
                }
            ]
        },
        {
            "name": "checkDriftMargin",
            "accounts": [
                {
                    "name": "clearingHouseUser",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseUserPositions",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clearingHouseMarkets",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "maxLeverage",
                    "type": "u128"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "userConfig",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "userPubkey",
                        "type": "publicKey"
                    },
                    {
                        "name": "userCranker",
                        "type": "publicKey"
                    },
                    {
                        "name": "tradeSize",
                        "type": "u32"
                    },
                    {
                        "name": "openSpread",
                        "type": "i8"
                    },
                    {
                        "name": "closeSpread",
                        "type": "i8"
                    },
                    {
                        "name": "mode",
                        "type": "u8"
                    },
                    {
                        "name": "padding",
                        "type": {
                            "array": [
                                "u8",
                                64
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "state",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "driftCollateralMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "mangoCollateralMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "globalDepositAmount",
                        "type": "u128"
                    },
                    {
                        "name": "padding2",
                        "type": "u128"
                    },
                    {
                        "name": "padding3",
                        "type": "u128"
                    },
                    {
                        "name": "padding4",
                        "type": "u128"
                    },
                    {
                        "name": "padding5",
                        "type": "u128"
                    },
                    {
                        "name": "padding6",
                        "type": "u128"
                    },
                    {
                        "name": "padding7",
                        "type": "u128"
                    },
                    {
                        "name": "padding8",
                        "type": "u128"
                    },
                    {
                        "name": "padding9",
                        "type": "u128"
                    },
                    {
                        "name": "padding10",
                        "type": "u128"
                    },
                    {
                        "name": "padding11",
                        "type": "u128"
                    },
                    {
                        "name": "padding12",
                        "type": "u128"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "ManagePositionOptionalAccounts",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "discountToken",
                        "type": "bool"
                    },
                    {
                        "name": "referrer",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "PositionDirection",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Long"
                    },
                    {
                        "name": "Short"
                    }
                ]
            }
        }
    ],
    "events": [
        {
            "name": "CreateUserAccountEvent",
            "fields": [
                {
                    "name": "userWallet",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "butlerAccountOwner",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "mangoAccount",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "driftAccount",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "CreateUserAccountEvent",
            "fields": [
                {
                    "name": "userPubkey",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "butlerAccountOwner",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "mangoAccount",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "driftAccount",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "PlaceArbOrderEvent",
            "fields": [
                {
                    "name": "userWallet",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "isDriftLong",
                    "type": "bool",
                    "index": false
                },
                {
                    "name": "isOpening",
                    "type": "bool",
                    "index": false
                },
                {
                    "name": "worstMangoPrice",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "driftLimitPrice",
                    "type": "u128",
                    "index": false
                },
                {
                    "name": "tradeSize",
                    "type": "u128",
                    "index": false
                },
                {
                    "name": "userConfigMode",
                    "type": "u8",
                    "index": false
                },
                {
                    "name": "spread",
                    "type": "i8",
                    "index": false
                }
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "FailMarginCheck",
            "msg": "Fail margin check"
        },
        {
            "code": 6001,
            "name": "FailOpenNewPosition",
            "msg": "Cant open new position in exit only mode"
        },
        {
            "code": 6002,
            "name": "EmptyMangoOrderBook",
            "msg": "bro wtf you emptied the mango order book"
        },
        {
            "code": 6003,
            "name": "DriftOrderNotFilledCompletely",
            "msg": "Drift order did not filled completely"
        },
        {
            "code": 6004,
            "name": "MaxDepositReached",
            "msg": "Max deposit reached"
        }
    ]
};

import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { VotingDapp } from './idl';
import IDL from "./voting_dapp.json";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const programId = new PublicKey("6wAc8r7HCckiSnoLtr1eUWGTf47LbwoSwKw6WJyaSWTH");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program(IDL as unknown as VotingDapp, { connection,});

export const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("voting_dapp")],
    program.programId,
);

export type CounterData = IdlAccounts<VotingDapp>["counter"];
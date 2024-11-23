import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { VotingDapp } from "../target/types/voting_dapp";
import { Keypair, PublicKey } from "@solana/web3.js";

describe("voting-dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.VotingDapp as Program<VotingDapp>;

  const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("voting_dapp")],
    program.programId,
  );

  // const counterAccount = new Keypair();

  // it("Is initialized!", async () => {
  //   // const transactionSignature = await program.methods
  //   //   .initialize()
  //   //   .accounts({
  //   //     counter: counterAccount.publicKey,
  //   //   })
  //   //   .signers([counterAccount])
  //   //   .rpc({ skipPreflight: true });

  //   const transactionSignature = await program.methods.initialize().rpc({ skipPreflight: true });

  //   // const accountData = await program.account.counter.fetch(
  //   //   counterAccount.publicKey
  //   // );

  //   const accountData = await program.account.counter.fetch(counterPDA);

  //   console.log(`Transaction Signature: ${transactionSignature}`);
  //   console.log(`Count: ${accountData.count}`);
  // });

  it("Is initialized!", async () => {
    try {
      const txSig = await program.methods.initialize().rpc();

      const accountData = await program.account.counter.fetch(counterPDA);
      console.log(`Transaction Signature: ${txSig}`);
      console.log(`Count: ${accountData.count}`);
    } catch (error) {
      // If PDA Account already created, then we expect an error
      console.log(error);
    }
  });

  it("Increment", async () => {
    const transactionSignature = await program.methods.increment().rpc();

    const accountData = await program.account.counter.fetch(counterPDA);

    console.log(`Transaction Signature: ${transactionSignature}`);
    console.log(`Count: ${accountData.count}`);
  });
});

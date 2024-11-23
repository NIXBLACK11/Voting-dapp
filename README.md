# Voting-dapp
This is me trying to create my first rust-solana contrac and connecting it with my frontend.

```bash
solana-keygen new
solana config get
solana config set --url localhost
solana-test-validator
solana balance
solana airdrop 1000
solana airdrop 1000 <address>
anchor init voting-dapp
anchor build
anchor keys sync
anchor test --skip-local-validator
anchor deploy

# To extnd program
anchor keys list
solana program show <program address>
du -h target/deploy/voting_dapp.so
solana rent <size>
solana program extend <program address> <size>

#Extending does not work when the structure changes so we need to make a new
rm -rf target
anchor keys sync

# Deploying to devnet
solana config set --url devnet

#To dploy to devnet make changes to anchor.toml 
solana config set --url devnet

#If you ever forgot the program id
solana program show --programs

#Always check buffer
solana program show --buffers
solana program close --buffers

#The Idl is the target/types/voting__dapp.ts

```


use anchor_lang::prelude::*;

declare_id!("2LzExR1P1JEUNAZb43kEznMVWzsMHR5mcvHch8aSz8dq");

#[program]
pub mod voting_dapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

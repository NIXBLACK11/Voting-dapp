use anchor_lang::prelude::*;

declare_id!("2tC447jX35oLcTLG4nYqQwYxPpBgMpg7FboSdmAfD183");

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

#![no_main]

use {
    solana_program::{account_info::{next_account_info, AccountInfo}, entrypoint::ProgramResult, program_error::ProgramError, pubkey::Pubkey},
    spl_tlv_account_resolution::state::ExtraAccountMetaList,
    spl_transfer_hook_interface::{get_extra_account_metas_address, instruction::{ExecuteInstruction, TransferHookInstruction}}
};
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    input: &[u8],
) -> ProgramResult {
    let instruction = TransferHookInstruction::unpack(input)?;
    let amount = match instruction {
        TransferHookInstruction::Execute { amount } => amount,
        _ => return Err(ProgramError::InvalidInstructionData),
    };
    let account_info_iter = &mut accounts.iter();

    // Pull out the accounts in order, none are validated in this test program
    let _source_account_info = next_account_info(account_info_iter)?;
    let mint_info = next_account_info(account_info_iter)?;
    let _destination_account_info = next_account_info(account_info_iter)?;
    let _authority_info = next_account_info(account_info_iter)?;
    let extra_account_metas_info = next_account_info(account_info_iter)?;

    // Only check that the correct pda and account are provided
    let expected_validation_address = get_extra_account_metas_address(mint_info.key, program_id);
    if expected_validation_address != *extra_account_metas_info.key {
        return Err(ProgramError::InvalidSeeds);
    }

    // Load the extra required accounts from the validation account
    let data = extra_account_metas_info.try_borrow_data()?;

    // Check the provided accounts against the validation data
    ExtraAccountMetaList::check_account_infos::<ExecuteInstruction>(
        accounts,
        &TransferHookInstruction::Execute { amount }.pack(),
        program_id,
        &data,
    )?;

    Ok(())
}

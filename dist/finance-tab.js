/**
 * Extension Point: finance-tab
 *
 * Location: Finance module, extra tab
 * Purpose: Display any custom finance information in a new tab
 *
 * This file defines the contract for a custom finance tab.
 * ChurchTools provides this interface to extension developers.
 */
/**
 * Runtime metadata for testing and development
 * Contains event names that can be sent FROM ChurchTools TO the extension
 */
export const FinanceTabMetadata = {
    /** Extension point ID */
    id: 'finance-tab',
    /** Event names from ChurchTools to extension (keys from FinanceTabEvents) */
    eventNames: ['accountingPeriod:changed', 'tab:hidden'],
};

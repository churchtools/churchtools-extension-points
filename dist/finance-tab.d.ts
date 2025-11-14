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
 * Data provided by ChurchTools for custom finance tabs
 */
export interface FinanceTabData {
    /** Currently selected client */
    clientId: number;
    /** Currently selected accounting period */
    accountingPeriodId: number;
    /** Finance master data for the selected accounting period */
    masterData: object;
}
/**
 * Events FROM ChurchTools (extension subscribes with `on()`)
 *
 * The extension can listen to these events to react to user interactions
 */
export interface FinanceTabEvents {
    /**
     * Fired when user changes the accounting period
     * Extension
     * @param data - New accounting period and master data
     */
    'accountingPeriod:changed': (data: {
        clientId: number;
        accountingPeriodId: number;
        masterData: object;
    }) => void;
    /**
     * Fired when tab has been hidden
     * Extension should cleanup resources
     */
    'tab:hidden': () => void;
}
/**
 * Events TO ChurchTools (extension emits with `emit()`)
 *
 * The extension can emit these events to communicate back to ChurchTools.
 */
export interface FinanceTabEmits {
}
/**
 * Full type-safe contract for calendar dialog availability extension point
 */
export type FinanceTabContract = {
    data: FinanceTabData;
    events: FinanceTabEvents;
    emits: FinanceTabEmits;
};
//# sourceMappingURL=finance-tab.d.ts.map
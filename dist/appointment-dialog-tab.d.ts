/**
 * Extension Point: appointment-dialog-tab
 *
 * Location: Calendar appointment edit dialog, extra tab
 * Purpose: Display any custom appointment information in a new tab, edit appointment data
 *
 * This file defines the contract for a custom calendar appointment dialog tab.
 * ChurchTools provides this interface to extension developers.
 */
/**
 * Data provided by ChurchTools for custom calendar appointment dialog tabs
 */
export interface AppointmentDialogTabData {
    /** Initial appointment data */
    currentAppointment: object;
    /** Calendar master data */
    masterData: object;
}
/**
 * Events FROM ChurchTools (extension subscribes with `on()`)
 *
 * The extension can listen to these events to react to user interactions
 * in the surrounding dialog.
 */
export interface AppointmentDialogTabEvents {
    /**
     * Fired when user changes the event data
     * Extension can react to changes in appointment data
     * @param data - New appointment data
     */
    'appointment:changed': (data: object) => void;
    /**
     * Fired when the edit dialog is about to close
     * Extension should cleanup resources
     */
    'dialog:closing': () => void;
}
/**
 * Events TO ChurchTools (extension emits with `emit()`)
 *
 * The extension can emit these events to communicate back to ChurchTools.
 */
export interface AppointmentDialogTabEmits {
    /**
     * Update the appointment data
     * ChurchTools will update the appointment data on the dialog and propagate changes to other tabs
     *
     * @param data - update appointment data object
     */
    'appointment:update': (data: object) => void;
}
/**
 * Full type-safe contract for calendar dialog availability extension point
 */
export type AppointmentDialogTabContract = {
    data: AppointmentDialogTabData;
    events: AppointmentDialogTabEvents;
    emits: AppointmentDialogTabEmits;
};
/**
 * Runtime metadata for testing and development
 * Contains event names that can be sent FROM ChurchTools TO the extension
 */
export declare const AppointmentDialogTabMetadata: {
    /** Extension point ID */
    readonly id: "appointment-dialog-tab";
    /** Event names from ChurchTools to extension (keys from AppointmentDialogTabEvents) */
    readonly eventNames: readonly ["appointment:changed", "dialog:closing"];
};
//# sourceMappingURL=appointment-dialog-tab.d.ts.map
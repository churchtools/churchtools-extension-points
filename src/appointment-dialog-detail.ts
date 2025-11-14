/**
 * Extension Point: appointment-dialog-detail
 *
 * Location: Calendar appointment edit dialog, first tab, below the other appointment fields
 * Purpose: Display any custom appointment information in the appointment edit dialog
 *
 * This file defines the contract for custom calendar appointment edit dialog details.
 * ChurchTools provides this interface to extension developers.
 */

/**
 * Data provided by ChurchTools for custom calendar appointment edit dialog details
 */
export interface AppointmentDialogDetailData {
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
export interface AppointmentDialogDetailEvents {
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
export interface AppointmentDialogDetailEmits {
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
export type AppointmentDialogDetailContract = {
    data: AppointmentDialogDetailData;
    events: AppointmentDialogDetailEvents;
    emits: AppointmentDialogDetailEmits;
};

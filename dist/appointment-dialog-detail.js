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
 * Runtime metadata for testing and development
 * Contains event names that can be sent FROM ChurchTools TO the extension
 */
export const AppointmentDialogDetailMetadata = {
    /** Extension point ID */
    id: 'appointment-dialog-detail',
    /** Event names from ChurchTools to extension (keys from AppointmentDialogDetailEvents) */
    eventNames: ['appointment:changed', 'dialog:closing'],
};

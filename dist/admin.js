/**
 * Extension Point: admin
 *
 * Location: Admin → Extensions → Extension Settings
 * Purpose: Render admin configuration interface for the extension
 *
 * This file defines the contract for the admin configuration extension point.
 */
/**
 * Runtime metadata for testing and development
 * Contains event names that can be sent FROM ChurchTools TO the extension
 */
export const AdminMetadata = {
    /** Extension point ID */
    id: 'admin',
    /** Event names from ChurchTools to extension (keys from AdminEvents) */
    eventNames: [], // No events defined for admin
};

/**
 * Extension Point: main
 *
 * Location: ChurchTools main menu → Extension module
 * Purpose: Render extension as a standalone module with its own menu entry
 *
 * This file defines the contract for the main module extension point.
 */
/**
 * Runtime metadata for testing and development
 * Contains event names that can be sent FROM ChurchTools TO the extension
 */
export const MainModuleMetadata = {
    /** Extension point ID */
    id: 'main',
    /** Event names from ChurchTools to extension (keys from MainModuleEvents) */
    eventNames: [], // No events defined for main module
};

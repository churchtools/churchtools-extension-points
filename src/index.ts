/**
 * ChurchTools Extension Points
 *
 * TypeScript type definitions for all ChurchTools extension points.
 * These contracts define the data structures and events for each extension point.
 */

// Main extension points
export * from './main';
export * from './admin';

// Calendar module extension points
export * from './appointment-dialog-tab';
export * from './appointment-dialog-detail';

// Finance module extension points
export * from './finance-tab';

// Import metadata for central collection
import { MainModuleMetadata } from './main';
import { AdminMetadata } from './admin';
import { AppointmentDialogTabMetadata } from './appointment-dialog-tab';
import { AppointmentDialogDetailMetadata } from './appointment-dialog-detail';
import { FinanceTabMetadata } from './finance-tab';

/**
 * All extension point metadata in a single collection
 * Automatically includes all extension points - new extension points just need to be added here
 */
export const allExtensionPointMetadata = [
	MainModuleMetadata,
	AdminMetadata,
	AppointmentDialogTabMetadata,
	AppointmentDialogDetailMetadata,
	FinanceTabMetadata,
] as const;

/**
 * Extension point metadata mapped by ID for easy lookup
 */
export const extensionPointMetadataById = Object.fromEntries(
	allExtensionPointMetadata.map(metadata => [metadata.id, metadata])
) as Record<string, typeof allExtensionPointMetadata[number]>;

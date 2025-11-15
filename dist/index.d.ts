/**
 * ChurchTools Extension Points
 *
 * TypeScript type definitions for all ChurchTools extension points.
 * These contracts define the data structures and events for each extension point.
 */
export * from './main';
export * from './admin';
export * from './appointment-dialog-tab';
export * from './appointment-dialog-detail';
export * from './finance-tab';
/**
 * All extension point metadata in a single collection
 * Automatically includes all extension points - new extension points just need to be added here
 */
export declare const allExtensionPointMetadata: readonly [{
    readonly id: "main";
    readonly eventNames: readonly [];
}, {
    readonly id: "admin";
    readonly eventNames: readonly [];
}, {
    readonly id: "appointment-dialog-tab";
    readonly eventNames: readonly ["appointment:changed", "dialog:closing"];
}, {
    readonly id: "appointment-dialog-detail";
    readonly eventNames: readonly ["appointment:changed", "dialog:closing"];
}, {
    readonly id: "finance-tab";
    readonly eventNames: readonly ["accountingPeriod:changed", "tab:hidden"];
}];
/**
 * Extension point metadata mapped by ID for easy lookup
 */
export declare const extensionPointMetadataById: Record<string, (typeof allExtensionPointMetadata)[number]>;
//# sourceMappingURL=index.d.ts.map
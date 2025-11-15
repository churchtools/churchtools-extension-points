/**
 * Extension Point: main
 *
 * Location: ChurchTools main menu → Extension module
 * Purpose: Render extension as a standalone module with its own menu entry
 *
 * This file defines the contract for the main module extension point.
 */
/**
 * Data provided by ChurchTools for main module extension
 */
export interface MainModuleData {
    /** Current user ID */
    userId: number;
    /** Additional context data */
    context?: {
        /** Module parameters from URL */
        params?: Record<string, string>;
        /** Navigation state */
        route?: string;
    };
}
/**
 * Events FROM ChurchTools
 */
export interface MainModuleEvents {
}
/**
 * Events TO ChurchTools
 */
export interface MainModuleEmits {
    /**
     * Show notification to user
     * @param data - Notification details
     */
    'notification:show': (data: {
        message: string;
        type?: 'info' | 'success' | 'warning' | 'error';
        duration?: number;
    }) => void;
}
/**
 * Full contract for main module extension point
 */
export type MainModuleContract = {
    data: MainModuleData;
    events: MainModuleEvents;
    emits: MainModuleEmits;
};
/**
 * Runtime metadata for testing and development
 * Contains event names that can be sent FROM ChurchTools TO the extension
 */
export declare const MainModuleMetadata: {
    /** Extension point ID */
    readonly id: "main";
    /** Event names from ChurchTools to extension (keys from MainModuleEvents) */
    readonly eventNames: readonly [];
};
//# sourceMappingURL=main.d.ts.map
/**
 * Extension Point: admin
 *
 * Location: Admin → Extensions → Extension Settings
 * Purpose: Render admin configuration interface for the extension
 *
 * This file defines the contract for the admin configuration extension point.
 */
/**
 * Data provided by ChurchTools for admin configuration of extension
 */
export interface AdminData {
    /** Extension metadata */
    extensionInfo: {
        /** Extension name */
        name: string;
        /** Extension version */
        version: string;
        /** Extension key/identifier */
        key: string;
        /** Extension description */
        description?: string;
        /** Extension author */
        author?: {
            name: string;
            email?: string;
        };
    };
    /** Admin user info */
    adminUser?: {
        /** User ID */
        userId: number;
        /** User name */
        name: string;
        /** User permissions */
        permissions: string[];
    };
}
/**
 * Events FROM ChurchTools
 */
export interface AdminEvents {
}
/**
 * Events TO ChurchTools
 */
export interface AdminEmits {
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
 * Full contract for admin configuration extension point
 */
export type AdminContract = {
    data: AdminData;
    events: AdminEvents;
    emits: AdminEmits;
};
//# sourceMappingURL=admin.d.ts.map
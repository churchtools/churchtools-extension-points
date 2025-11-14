# ChurchTools Extension Points

TypeScript type definitions for ChurchTools extension points.

## Overview

This package provides TypeScript contracts for all ChurchTools extension points. These contracts define:
- **Data structures** that ChurchTools provides to extensions
- **Events FROM ChurchTools** that extensions can listen to
- **Events TO ChurchTools** that extensions can emit

## Installation

```bash
npm install @churchtools/extension-points
```

## Usage

Import the types you need in your extension (example here: a custom tab in the finance module):

```typescript
import type { FinanceTabData } from '@churchtools/extension-points';
import type { EntryPoint } from './lib/main';

// Use the types for type-safe extension development
const mainEntryPoint: EntryPoint<FinanceTabData> = ({ data, on, emit, element }) => {
    console.log('AccountingPeriodId:', data.accountingPeriodId);

    on('accountingPeriod:changed', (newAccountingPeriodData) => {
        console.log('Accounting period changed: ', newAccountingPeriodData.accountingPeriodId);
        // update the tab content accordingly
    });

    element.innerHTML = '<h1>My Extension</h1>';
};
```

## Available Extension Point types

### Module Extension Points

There are two fix module extension points:

#### `main`
**Location**: ChurchTools main menu → Extension module

**Purpose**: Render extension as a standalone module with its own menu entry

```typescript
import type { MainModuleData, MainModuleEvents, MainModuleEmits } from '@churchtools/extension-points'; // or:
import type { MainModuleContract } from '@churchtools/extension-points';
```

**Data**: `MainModuleData`

**Events FROM ChurchTools**: `MainModuleEvents`

**Events TO ChurchTools**: `MainModuleEmits`

---

#### `admin`
**Location**: Admin → Extensions → Extension Settings

**Purpose**: Render admin configuration interface

```typescript
import type { AdminData, AdminEvents, AdminEmits } from '@churchtools/extension-points'; // or:
import type { AdminContract } from '@churchtools/extension-points';
```

### Tab Extension Points inside a ChurchTools module

E.g. a new tab in the person module, calendar appointment dialog, finance module, etc.

#### E.g. `finance-tab`
**Location**: Finance module, extra tab

**Purpose**: Display any custom finance information in a new tab

```typescript
import type { FinanceTabData, FinanceTabEvents, FinanceTabEmits } from '@churchtools/extension-points'; // or:
import type { FinanceTabContract } from '@churchtools/extension-points';
```

### Detail Extension Points within another view's context

E.g. custom display of data in the calendar appointment edit dialog, person details, group details, etc.

#### E.g. `appointment-dialog-details`
**Location**: Calendar appointment edit dialog, first tab, below the other appointment fields

**Purpose**: Display any custom appointment information in the appointment edit dialog

```typescript
import type { AppointmentDialogDetailData, AppointmentDialogDetailEvents, AppointmentDialogDetailEmits } from '@churchtools/extension-points'; // or:
import type { AppointmentDialogDetailContract } from '@churchtools/extension-points';
```

## Type Structure

Each extension point exports:

1. **Data interface** - Data provided by ChurchTools
2. **Events interface** - Events FROM ChurchTools (that you listen to)
3. **Emits interface** - Events TO ChurchTools (that you emit)
4. **Contract type** - Combined contract

Example:

```typescript
export interface MainModuleData { /* ... */ }
export interface MainModuleEvents { /* ... */ }
export interface MainModuleEmits { /* ... */ }

export type MainModuleContract = {
    data: MainModuleData;
    events: MainModuleEvents;
    emits: MainModuleEmits;
};
```

## Development

This package contains only TypeScript type definitions. No runtime code is included.

```bash
# Install dependencies
npm install

# Build type definitions
npm run build

# Output: dist/
```

## Contributing

Extension point definitions are maintained by ChurchTools. If you need a new extension point or want to propose changes:

1. Open an issue describing the use case
2. Submit a pull request with the type definitions

## License

MIT

## Support

- **Contact**: extensions@churchtools.de
- **Forum**: [ChurchTools Forum](https://forum.church.tools)
- **Issues**: [GitHub Issues](https://github.com/churchtools/churchtools-extension-points/issues)

# Cases Dashboard

A responsive Cases Dashboard built with **Angular 22**, **Standalone Components**, **Signals**, and **Tailwind CSS**.

## Features

- Responsive RTL layout
- Sidebar with collapse/expand
- Cases displayed in:
  - Table View
  - Grid View
- Search by case title or case number
- Filter cases by status
- Pagination component
- Reusable standalone components
- Accessible buttons and form controls

## Tech Stack

- Angular 22
- TypeScript
- Angular Signals
- Standalone Components
- Tailwind CSS v3

- @ng-icons lucide 

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── cases/
│   ├── shared/
│   │   ├── case-card/
│   │   ├── case-row/
│   │   ├── filter-chip/
│   │   ├── pagination/
│   │   ├── sidebar/
│   │   ├── header/
│   │   └── status-badge/
│   ├── mock/
│   └── core/
```

## Installation

Clone the repository:

```bash
git clone <https://github.com/fatmaaalzharaa445/law-cases.git>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
ng serve
```

Open:

```
http://localhost:4200
```

## Build

```bash
ng build
```

## Notes

- Uses Angular Signals for local state management.
- Uses Angular Standalone Components.
- Mock data is stored locally.
- Fully RTL layout.
- Built following the provided Figma design.


## Author

Fatma Alzharaa
Frontend Developer

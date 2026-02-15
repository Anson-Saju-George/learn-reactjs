## React topics practiced in this project

- **JSX basics**: Built simple components like `Message` to render dynamic text, using PascalCase names and conditional rendering to swap between greetings.
- **Lists and keys**: Rendered arrays with `map`, supplying stable `key` values; demonstrated empty-list handling with ternaries and short-circuiting.
- **State with hooks**: Used `useState` to track selected list items and to toggle UI elements (e.g., highlighting a clicked city and showing/hiding alerts).
- **Conditional rendering patterns**: Practiced ternary operators and `&&` short-circuit checks to display placeholders when data is missing or to show components only when needed.
- **Props and typing**: Defined typed props for child components (`items`, `heading`, `color`, callbacks), optional props with defaults, and union literal types for constrained values.
- **Component composition**: Passed `children` into reusable UI pieces like `Alert` and `Buttons`, including support for nested JSX content.
- **Styling and classes**: Applied Bootstrap utility classes (`btn`, `alert`, `list-group`, `active`) and toggled classes based on state for selection highlighting.
- **Event handling**: Wired click handlers to update state (`setSelectedIndex`, `setVisible`) and to invoke callbacks like closing an alert.

## Components and what they teach

- `Message`: JSX syntax, conditional rendering, and simple string interpolation.
- `ListGroup1`: `useState` for selection, mapping lists to elements with keys, ternary empty-state UI, and dynamic class names.
- `ListGroup2`: Alternate empty-state handling via short-circuit `&&` along with mapping items.
- `ListGroup3`: Typed props for reusable lists (items + heading), stateful selection, and rendering based on incoming data.
- `Buttons`: Custom button component with typed props, optional `color` prop defaulting to `primary`, and click callbacks.
- `Alert`: Reusable alert shell that accepts arbitrary `children`, exposes an `onClose` callback, and uses Bootstrap’s close button styling.
- `App`: Composes the building blocks, lifts state to control alert visibility, and demonstrates prop-driven behavior (`color`, `onClose`, `children`).

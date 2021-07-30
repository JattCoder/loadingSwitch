# Installation

`npm i loadingswitch`

# Usage

`import { LoadSwitch } from 'loadingswitch';`

`<LoadSwitch onPress={() => YourFunction()} status={true} />`

# Props

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Required</th>
            <th>Type</th>
            <th>Default</th>
            <th>Return Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>status</td>
            <td>Yes</td>
            <td>Boolean</td>
            <td>False</td>
            <td>None</td>
        </tr>
        <tr>
            <td>onPress()</td>
            <td>Yes</td>
            <td>Method</td>
            <td>None</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>toggleOnColor</td>
            <td>No</td>
            <td>String</td>
            <td>White</td>
            <td>None</td>
        </tr>
        <tr>
            <td>toggleOffColor</td>
            <td>No</td>
            <td>String</td>
            <td>Blue</td>
            <td>None</td>
        </tr>
         <tr>
            <td>switchOnColor</td>
            <td>No</td>
            <td>String</td>
            <td>Blue</td>
            <td>None</td>
        </tr>
        <tr>
            <td>switchOffColor</td>
            <td>No</td>
            <td>String</td>
            <td>White</td>
            <td>None</td>
        </tr>
        <tr>
            <td>switchBorderColor</td>
            <td>No</td>
            <td>String</td>
            <td>Black</td>
            <td>None</td>
        </tr>
        <tr>
            <td>shape</td>
            <td>No</td>
            <td>Box/Circle</td>
            <td>Circle</td>
            <td>None</td>
        </tr>
    </tbody>
</table>


# Contribution

For major changes, please open an issue first to discuss what you would like to change.

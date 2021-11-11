> # React
---

## Components:
* is the declaration of the view with its state, template and functions.
Components encapsulate all the functionality of an interface element in one place. It is in the component that we define what is to be displayed, what data we receive, what data we modify and how that data changes the interface.

This component-oriented architecture helps us to organize and separate the complexity of our application into simple elements that perform simple tasks independent of each other. A form, for example, can be composed of different components such as a button, some text input controls, selectors, a calendar control, etc.

Through this architecture, we apply the principle of "divide and conquer" on our graphical interface, instead of seeing the interface as a large, constantly updating code base, we see the interface as a collection of elements that take care of simple tasks and that, together, form the complete interface.

## Element:
* is that which returns a component on each update.

## Props
* Conceptually, components are like JavaScript functions. They accept input data (called props) and return React elements that describe what should appear on the screen.

Props are the collection of data that a component receives from the parent container, which can be used to define the React elements that the component will return.

In practical terms, if a component needs to receive information to function, it receives it via props.

In technical terms, props have certain characteristics:

They are immutable, which is the adjective for what cannot be modified or changed. A prop is not modified.
They can have a default value
They can be marked as mandatory, when a component cannot function without receiving a prop.
In JSX, props are seen as the attributes of HTML elements.

## State
* Components need data to work and React has two different ways to combine components and data: Props and State. (Props = Properties and State = State) In a nutshell we can say that State is where our data lives and Props is the data that is passed from one component to another.
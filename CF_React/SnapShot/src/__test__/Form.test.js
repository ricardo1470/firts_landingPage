import { create, act } from 'react-test-renderer';
import Form from '../components/Form';
import React from 'react';

let component;

const props = {
    history: {},
    handleSubmit: jest.fn(),
};

describe("<Form />", () => {
    beforeEach(() => {
        component = create(<Form {...props} />);
    });

    it("should render Form", () => {
        expect(component).toBeDefined();
        expect(component.toJSON().type).toEqual("form");
        expect(component.root.findByType("input")).toBeDefined();
        expect(component.root.findByType("button")).toBeDefined();
        expect(component.root.findByType("svg")).toBeDefined();
    });

    it("button must enable if input has a non-empty value", () => {
        const form = component.root.findByType("form");
        const input = form.findByType("input");
        const button = form.findByType("button");

        expect(button.props.disabled).toBeTruthy();
        expect(button.props.className).toEqual("search-button null");

        act(() => {
            input.props.onChange({ target: { value: "bird" } });
        });

        expect(button.props.disabled).toBeFalsy();
        expect(button.props.className).toEqual("search-button active");
    });

    it("the onSubmit should be called without problems", () => {
        const form = component.root.findByType("form");
        form.props.onSubmit();

        expect(props.handleSubmit).toHaveBeenCalled();
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
        expect(props.handleSubmit).toHaveBeenCalledWith(undefined, props.history, "");
    });
});

import { create } from 'react-test-renderer';
import Gallery from '../components/Gallery';
import React from 'react';
import NoImages from '../components/NoImages';
import Image from '../components/Image';

let component;

const props = {
    data: [],
};

describe('<Gallery />', () => {
    beforeEach(() => {
        component = create(<Gallery {...props} />);
    });

    it ("should render Gallery", () => {
        expect(component).toBeDefined();
        expect(component.root.findByType('div')).toBeDefined();
        expect(component.root.findByType('ul')).toBeDefined();
    });

    it("muestra NoImages si la data esta vacia", () => {
        expect(component.root.findByType(NoImages)).toBeDefined();
    });

    it("renderiza las imagenes si la data existe o cambia", () => {
        const data = [
            {farm: 'farm1', id: 'id1', secret: 'secret1', server: 'server1', title: 'title1'},
            {farm: 'farm2', id: 'id2', secret: 'secret2', server: 'server2', title: 'title2'},
            {farm: 'farm3', id: 'id3', secret: 'secret3', server: 'server3', title: 'title3'},
            {farm: 'farm4', id: 'id4', secret: 'secret4', server: 'server4', title: 'title4'},
        ]

        component.update(<Gallery data={data} />);

        expect(component.root.findAllByType(NoImages).length).toEqual(0);
        expect((component.root.findAllByType(Image).length)).toEqual(data.length);
        expect(component.root.findAllByType(Image)[0].props.alt).toEqual(data[0].title);
        expect(component.root.findAllByType(Image)[1].props.alt).toEqual(data[1].title);
        expect(component.root.findAllByType(Image)[2].props.alt).toEqual(data[2].title);
        expect(component.root.findAllByType(Image)[3].props.alt).toEqual(data[3].title);
    });

});
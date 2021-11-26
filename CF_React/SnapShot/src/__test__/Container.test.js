import React from "react";
import { act, create } from "react-test-renderer";
import Container from "../components/Container"
import Gallery from "../components/Gallery";
import PhotoContextProvider from "../context/PhotoContext";
import axios from "axios";

let component;

describe("<Constainer />", () => {
    beforeEach(async () => {
        await act(async () =>{
            component = await create(
                <PhotoContextProvider>
                    <Container searchTerm="" />
                </PhotoContextProvider>
            );
        })
    });

    it("Renderiza Correctamente", () => {
        expect(component.root).toBeDefined();
        expect(component.root.findByType(Container)).toBeDefined();
        expect(component.root.findAllByType(Gallery).length).toEqual(1);
    });

    it("Llama a la API si es necesario o si cambia el texto", async () => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: {
                photos: {
                    photo: [{farm: 'farm1', id: 'id1', secret: 'secret1', server: 'server1', title: 'title1'}],
                }
            }
        }));

        await act(async () => {
            await component.update(
                <PhotoContextProvider>
                    <Container searchTerm="text" />
                </PhotoContextProvider>
            );
        });

        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(3);
        expect(axios.post).not.toHaveBeenCalled();
        expect(axios.put).not.toHaveBeenCalled();
    });
});
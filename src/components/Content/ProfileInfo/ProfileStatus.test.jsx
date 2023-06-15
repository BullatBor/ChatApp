import React from 'react'
import { create } from "react-test-renderer"
import { ProfileStatus } from './ProfileStatus'


describe("ProfileStatusTest" , () => {
    test("statusFromPropsShouldBeInState"), () => {
        const component = create(<ProfileStatus status="Fuck" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test")
    }
})


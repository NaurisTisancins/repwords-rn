import { routines } from "../../mock-data/routines"

export const getRoutines = () => {
    return new Promise((resolve, reject) => {
        if(!routines) {
            reject(`error: no routines found`);
        }
        resolve(routines);
    })
}
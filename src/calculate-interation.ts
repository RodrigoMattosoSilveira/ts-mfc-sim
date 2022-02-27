import {ParametersT} from "./types";

export const calculateIterationF = (fsm: any, parameters: ParametersT): void => {
    fsm.log();
    // console.log(`fsm.state: I'm at the ` + fsm.state);
    fsm.pick();
    // console.log(`fsm.state: I'm at the ` + fsm.state);
    fsm.pack();
    // console.log(`fsm.state: I'm at the ` + fsm.state);
    fsm.label();
    // console.log(`fsm.state: I'm at the ` + fsm.state);
    fsm.deliver();
    // console.log(`fsm.state: I'm at the ` + fsm.state);
    fsm.ready();
    // console.log(`fsm.state: I'm at the ` + fsm.state);
}
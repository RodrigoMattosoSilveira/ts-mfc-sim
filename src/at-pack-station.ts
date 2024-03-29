import {JSMArgumentsT, ParametersT} from "./types";

const random = require("random");

export const atPackStatiom = (jsmArguments: JSMArgumentsT): void => {
    let parameters: ParametersT = jsmArguments.parameters

    // walk to the packing station
     let time_to_walk_to_paking_station = random.int(parameters.TIME_TO_WALK_TO_PACKING_STATION_MIN,parameters.TIME_TO_WALK_TO_PACKING_STATION_MAX);
    jsmArguments.order.packTime += time_to_walk_to_paking_station;
    // console.log('I walked to the packing station area in: ' + time_to_walk_to_paking_station + ' seconds');

    // Get packing resources
    let time_to_get_packing_resources = random.int(parameters.TIME_TO_SELECT_PACKING_RESOURCES_MIN,parameters.TIME_TO_SELECT_PACKING_RESOURCES_MAX);
    jsmArguments.order.packTime += time_to_get_packing_resources;
    // console.log('I got packing resources in: ' + time_to_get_packing_resources + ' seconds');

    // Pack the oder
    let time_to_pack_order = random.int(parameters.TIME_TO_PACK_ORDER_MIN,parameters.TIME_TO_PACK_ORDER_MAX);
    jsmArguments.order.packTime += time_to_pack_order;
    // console.log('I packed the other in: ' + time_to_pack_order + ' seconds');
}
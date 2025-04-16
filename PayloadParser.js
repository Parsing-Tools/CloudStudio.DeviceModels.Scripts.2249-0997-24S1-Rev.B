function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.temperatures) {
        var temperatures = parsed[0].payload.temperatures;

        var e2 = device.endpoints.byAddress("1");
        var e3 = device.endpoints.byAddress("2"); //Nuevo
        var e4 = device.endpoints.byAddress("3"); //Nuevo
        var e5 = device.endpoints.byAddress("7"); //Nuevo
        var e6 = device.endpoints.byAddress("4"); //Nuevo
        var e7 = device.endpoints.byAddress("5"); //Nuevo
        var e8 = device.endpoints.byAddress("6"); //Nuevo
        var e9 = device.endpoints.byAddress("8"); //Nuevo
        var e10 = device.endpoints.byAddress("9"); //Nuevo
        var e11 = device.endpoints.byAddress("10"); //Nuevo
        env.log(temperatures[0]);

        if (temperatures[0] != null && e2 != null) {
            e2.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius1);
            }
        if (temperatures[0] != null && e3 != null) {
            e3.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius2); //Nuevo
            }
        if (temperatures[0] != null && e4 != null) {
            e4.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius3); //Nuevo
            }
        if (temperatures[0] != null && e5 != null) {
            e5.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius7); //Nuevo
            }
        if (temperatures[0] != null && e6 != null) {
            e6.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius4); //Nuevo
            }
        if (temperatures[0] != null && e7 != null) {
            e7.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius5); //Nuevo
            }
        if (temperatures[0] != null && e8 != null) {
            e8.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius6); //Nuevo
            }
        if (temperatures[0] != null && e9 != null) {
            e9.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius8); //Nuevo
            }
        if (temperatures[0] != null && e10 != null) {
            e10.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius9); //Nuevo
            }
        if (temperatures[0] != null && e11 != null) {
            e11.updateTemperatureSensorStatus(temperatures[0].temperatureCelsius10); //Nuevo
            }
    }



    

}



function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}
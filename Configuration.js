function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  //endpoints.addEndpoint("1", "Location", endpointType.locationTracker);
  endpoints.addEndpoint("1", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temperatura Salida Grifos", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Acumulador Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temperatura Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Consigna ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("9", "Consigna Caldera", endpointType.temperatureSensor);
  
  //var e = endpoints.addEndpoint("4", "Battery", endpointType.genericSensor);
  //e.variableTypeId = 1308;

}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}
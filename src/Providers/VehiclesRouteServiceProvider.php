<?php

namespace VehiclesList\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;

/**
 * Class VehiclesRouteServiceProvider
 * @package VehiclesList\Providers
 */
class VehiclesRouteServiceProvider extends RouteServiceProvider
{
    /**
     * @param Router $router
     */
    public function map(Router $router)
    {
        $router->get('vehicle', 'Vehicles\Controllers\ContentController@showVehicle');
        $router->post('vehicle', 'Vehicles\Controllers\ContentController@createVehicle');
        $router->put('vehicle/{id}', 'Vehicles\Controllers\ContentController@updateVehicle')->where('id', '\d+');
        $router->delete('vehicle/{id}', 'Vehicles\Controllers\ContentController@deleteVehicle')->where('id', '\d+');
    }

}

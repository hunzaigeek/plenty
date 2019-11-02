<?php

namespace Vehicles\Providers;

use Plenty\Plugin\ServiceProvider;
use Vehicles\Contracts\VehiclesRepositoryContract;
use Vehicles\Repositories\VehiclesRepository;

/**
 * Class VehiclesServiceProvider
 * @package Vehicles\Providers
 */
class VehiclesServiceProvider extends ServiceProvider
{

    /**
     * Register the service provider.
     */
    public function register()
    {
        $this->getApplication()->register(VehiclesRouteServiceProvider::class);
        $this->getApplication()->bind(VehiclesRepositoryContract::class, VehiclesRepository::class);
    }
}

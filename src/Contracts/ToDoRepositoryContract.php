<?php

namespace Vehicles\Contracts;

use Vehicles\Models\Vehicles;

/**
 * Class VehiclesRepositoryContract
 * @package Vehicles\Contracts
 */
interface VehiclesRepositoryContract
{
    /**
     * List all tasks of the Vehicles list
     *
     * @return Vehicles[]
     */
    public function getVehicles(): array;


}

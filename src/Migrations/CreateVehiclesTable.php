<?php

namespace Vehicles\Migrations;

use Vehicles\Models\ToDo;
use Plenty\Modules\Plugin\DataBase\Contracts\Migrate;

/**
 * Class CreateVehiclesTable
 */
class CreateVehiclesTable
{
    /**
     * @param Migrate $migrate
     */
    public function run(Migrate $migrate)
    {
        $migrate->createTable(Vehicles::class);
    }
}
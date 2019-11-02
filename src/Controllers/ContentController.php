<?php

namespace Vehicles\Controllers;

use Plenty\Plugin\Controller;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;
use Vehicles\Contracts\VehiclesRepositoryContract;

/**
 * Class ContentController
 * @package Vehicles\Controllers
 */
class ContentController extends Controller
{
    /**
     * @param Twig                   $twig
     * @param VehiclesRepositoryContract $VehiclesRepo
     * @return string
     */
    public function showVehicles(Twig $twig, VehiclesRepositoryContract $VehiclesRepo): string
    {
        $Vehicles = $VehiclesRepo->getVehicles();
        $templateData = array("tasks" => $Vehicles);
        return $twig->render('Vehicles::content.todo', $templateData);
    }

    /**
     * @param  \Plenty\Plugin\Http\Request $request
     * @param VehiclesRepositoryContract       $VehiclesRepo
     * @return string
     */
    public function createVehicles(Request $request, VehiclesRepositoryContract $VehiclesRepo): string
    {
        $newVehicles = $VehiclesRepo->createTask($request->all());
        return json_encode($newVehicles);
    }

    /**
     * @param int                    $id
     * @param VehiclesRepositoryContract $VehiclesRepo
     * @return string
     */
    public function updateVehicles(int $id, VehiclesRepositoryContract $VehiclesRepo): string
    {
        $updateVehicles = $VehiclesRepo->updateTask($id);
        return json_encode($updateVehicles);
    }

    /**
     * @param int                    $id
     * @param VehiclesRepositoryContract $VehiclesRepo
     * @return string
     */
    public function deleteVehicles(int $id, VehiclesRepositoryContract $VehiclesRepo): string
    {
        $deleteVehicles = $VehiclesRepo->deleteTask($id);
        return json_encode($deleteVehicles);
    }
}

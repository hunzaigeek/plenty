<?php

namespace Vehicles\Repositories;

use Plenty\Exceptions\ValidationException;
use Plenty\Modules\Plugin\DataBase\Contracts\DataBase;
use Vehicles\Contracts\VehiclesRepositoryContract;
use Vehicles\Models\Vehicles;
// use Vehicles\Validators\VehiclesValidator;
// use Plenty\Modules\Frontend\Services\AccountService;


class VehiclesRepository implements VehiclesRepositoryContract
{
    // /**
    //  * @var AccountService
    //  */
    // private $accountService;

    // /**
    //  * UserSession constructor.
    //  * @param AccountService $accountService
    //  */
    // public function __construct(AccountService $accountService)
    // {
    //     $this->accountService = $accountService;
    // }

    // /**
    //  * Get the current contact ID
    //  * @return int
    //  */
    // public function getCurrentContactId(): int
    // {
    //     return $this->accountService->getAccountContactId();
    // }

    // /**
    //  * Add a new item to the To Do list
    //  *
    //  * @param array $data
    //  * @return Vehicles
    //  * @throws ValidationException
    //  */
    // public function createTask(array $data): Vehicles
    // {
    //     try {
    //         VehiclesValidator::validateOrFail($data);
    //     } catch (ValidationException $e) {
    //         throw $e;
    //     }

    //     /**
    //      * @var DataBase $database
    //      */
    //     $database = pluginApp(DataBase::class);

    //     $Vehicles = pluginApp(Vehicles::class);

    //     $toDo->taskDescription = $data['taskDescription'];

    //     $toDo->userId = $this->getCurrentContactId();

    //     $toDo->createdAt = time();

    //     $database->save($toDo);

    //     return $toDo;
    // }

    /**
     * List all items of the To Do list
     *
     * @return Vehicles[]
     */
    public function getVehicles(): array
    {
        $database = pluginApp(DataBase::class);

        $id = $this->getCurrentContactId();
        /**
         * @var Vehicles[] $Vehicles
         */
        $Vehicles = $database->query(Vehicles::class)->where('userId', '=', $id)->get();
        return $Vehicles;
    }

    // /**
    //  * Update the status of the item
    //  *
    //  * @param int $id
    //  * @return Vehicles
    //  */
    // public function updateTask($id): Vehicles
    // {
    //     /**
    //      * @var DataBase $database
    //      */
    //     $database = pluginApp(DataBase::class);

    //     $Vehicles = $database->query(Vehicles::class)
    //         ->where('id', '=', $id)
    //         ->get();

    //     $toDo = $Vehicles[0];
    //     $toDo->isDone = true;
    //     $database->save($toDo);

    //     return $toDo;
    // }

    // /**
    //  * Delete an item from the To Do list
    //  *
    //  * @param int $id
    //  * @return ToDo
    //  */
    // public function deleteTask($id): ToDo
    // {
    //     /**
    //      * @var DataBase $database
    //      */
    //     $database = pluginApp(DataBase::class);

    //     $Vehicles = $database->query(ToDo::class)
    //         ->where('id', '=', $id)
    //         ->get();

    //     $toDo = $Vehicles[0];
    //     $database->delete($toDo);

    //     return $toDo;
    // }
}
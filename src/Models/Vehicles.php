<?php

namespace Vehicles\Models;

use Plenty\Modules\Plugin\DataBase\Contracts\Model;

/**
 * Class Vehicles
 *
 * @property int     $id
 * @property string  $hsn
 * @property string  $tsn
 * @property string  $make
 * @property string  $model
 * @property string  $type
 * @property string  $year
 * @property string  $moto_type
 * 
 */
class Vehicles extends Model
{
    /**
     * @var int
     */
    public $id = 0;
    public $hsn = '';
    public $tsn = '';
    public $make = '';
    public $model = '';
    public $type = '';
    public $year = '';
    public $moto_type = '';

    /**
     * @return string
     */
    public function getTableName(): string
    {
        return 'Vehicles::Vehicles';
    }
}
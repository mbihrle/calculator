<?php
interface CalculationInterface
{
    public function __construct($firstOperand, $secondOperand, $operator);
    public function getResult();

}
?>

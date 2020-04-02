<?php

include_once "./CalculationInterface.php";
class Multiplication implements CalculationInterface
{
    public function __construct($firstOperand, $secondOperand, $operator)
    {
        $this->firstOperand = $firstOperand;
        $this->secondOperand = $secondOperand;
        $this->operator = $operator;
        $this->result = 0;
    }

    public function getResult()
    {
        $this->result = $this->firstOperand * $this->secondOperand;
        return $this->result;
    }
}

?>
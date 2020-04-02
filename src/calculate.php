<?php

include "./Addition.php";
include "./Substraction.php";
include "./Multiplication.php";
include "./Division.php";


if (isset($_GET['firstOperand'])) {
    $firstOperand = $_GET['firstOperand'];
    $secondOperand = $_GET['secondOperand'];
    $operator = $_GET['operator'];
    // echo $firstOperand . ',' . $secondOperand . ','  . $operator;
}


    switch ($operator) {
        case "+":
           $calculationMethod = new Addition($firstOperand, $secondOperand, $operator);
        //    $result = $calculationMethod->getResult();
        //    echo $result;
            break;
        case "-":
            $calculationMethod = new Substraction($firstOperand, $secondOperand, $operator);
            break;
        case "*":
            $calculationMethod = new Multiplication($firstOperand, $secondOperand, $operator);
            break;
        case "/":
            $calculationMethod = new Division($firstOperand, $secondOperand, $operator);
            break;
        default:
            $result = "Error";
            break;
    }
    echo $result = $calculationMethod->getResult();




//alt
// $calculation = new Calculation($firstOperand, $secondOperand, $operator);
// echo $calculation->getResult();










?>
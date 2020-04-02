<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="calculator.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>Taschenrechner</title>
</head>

<body>
    <h1>Taschenrechner</h1>

    <div class="calculator">

        <input type="text" class="calculator-screen" value="0" disabled />

        <div class="calculator-keys">

            <button type="button" class="all-clear" value="all-clear">AC</button>
            <button type="button" class="clear-entry" value="clear-entry">C</button>
            <button type="button" class="back" value="back">back</button>
            <button type="button" class="operator" value="/">&divide;</button>


            <button type="button" value="7">7</button>
            <button type="button" value="8">8</button>
            <button type="button" value="9">9</button>
            <button type="button" class="operator" value="*">&times;</button>


            <button type="button" value="4">4</button>
            <button type="button" value="5">5</button>
            <button type="button" value="6">6</button>
            <button type="button" class="operator" value="-">-</button>


            <button type="button" value="1">1</button>
            <button type="button" value="2">2</button>
            <button type="button" value="3">3</button>
            <button type="button" class="operator" value="+">+</button>


            <button type="button" class="invert">+/-</button>
            <button type="button" value="0">0</button>
            <button type="button" class="decimal" value=".">.</button>
            <button type="button" class="operator equal-sign" value="=">=</button>

        </div>
    </div>
    <script type="text/javascript" src="calculator.js"></script>

</body>

</html>
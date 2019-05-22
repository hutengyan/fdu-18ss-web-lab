<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        $amount=$quantity*$price;
        global $total;
        $total=$total+$amount;
        $path="images/books/tinysquare/$file";
        $price=number_format($price,2);
        $amount=number_format($amount,2);
        echo "<tr>";
        echo "<td><img src='$path'></td>";
        echo "<td>$title</td>";
        echo "<td>$quantity</td>";
        echo "<td>$$price</td>";
        echo "<td>$$amount</td>";
        echo "</tr>";

    }

?>



}

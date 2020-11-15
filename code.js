var subtotal;
var tax;
var total;
$(document).ready(function () {
        $("#tabs a").click(showTab);
        $("fieldset").change(orderPizza);
        $("#size").change(orderPizza);
        $("#crust").change(orderPizza);
        $("#veggies").change(orderPizza);
        $("#meats").click(orderPizza);

        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }

        function orderPizza() {

            //PIZZA SIZE
            var size = parseFloat($("input[name=size]:checked").val());
            var sizeName;
            if (size == 7.0)
            {
                sizeName = `Small`;
            }
            else if (size == 9.0)
            {
                sizeName = `Medium`;
            }
            else
            {
                sizeName = 'Large';
            }
            //PIZZA OUTPUT

            var crust = $("input[name=crust]:checked").val();
            var veggies = $("input[name=veggies]:checked").val();
            var meats = $("input[name=meats]:checked").val();

            $("#outputSize").text(`${sizeName}`);
            $("#outputCrust").text(`${crust}`);
            //DEAL W/UNDEFINED VALUES
            var vegNum = $("input[name=veggies]:checked").length;
            var meatNum = $("input[name=meats]:checked").length;
            if (vegNum > 0)
            {
                $("#outputVeg").text(`${veggies}`);
            }
            else
            {
                $("#outputVeg").text(`NONE`);
            }
            if (meatNum > 0)
            {
                $("#outputMeat").text(`${meats}`);
            }
            else
            {
                $("#outputMeat").text(`NONE`);
            }


            //CONTACT OUTPUT
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var phone = $("#phone").val();
            var street = $("#street").val();
            var apt = $("#apt").val();
            var city = $("#city").val();
            var state = $("#state").val();
            var zip = $("#zip").val();

            $("#outputName").text(`${firstName} ${lastName}`);
            $("#outputAddress").text(`${street} ${apt} ${city}, ${state} ${zip}`);
            $("#outputPhone").text(`${phone}`);

            //COST CALCULATION

            subtotal = vegNum + (meatNum * 1.5) + size;
            tax = subtotal * 0.051;
            total = subtotal * (tax + 1) + 2;

            $("#outputSub").text(`$${subtotal.toFixed(2)}`);
            $("#outputTax").text(`$${tax.toFixed(2)}`);
            $("#outputTotal").text(`$${total.toFixed(2)}`);
        }
        function confirmOrder(event)
        {
            event.preventDefault();
            $("#outputConfirm").text("Comin' Right Up!");
        }
});
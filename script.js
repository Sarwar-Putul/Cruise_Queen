
//First class calculation

        function handleFirstClassChange(isIncrease){
            const firstInput = document.getElementById('first-count');
            const firstCount = parseInt(firstInput.value);
            if(isIncrease == true) {
                firstNewCount = firstCount + 1;
            }
            if(isIncrease == false  && firstCount > 0) {
                firstNewCount = firstCount - 1;
            }
            firstInput.value = firstNewCount;
            const firstClassTotal = firstNewCount * 150;
            calculateTotal();
        };
// Economy class calculation
        function handleEconomyChange(isIncrease){
            const ecoInput = document.getElementById('eco-count');
            const ecoCount = parseInt(ecoInput.value);
            if(isIncrease == true) {
                ecoNewCount = ecoCount + 1;
            }
            if(isIncrease == false  && ecoCount > 0) {
                ecoNewCount = ecoCount - 1;
            }
            ecoInput.value = ecoNewCount;
            const economyTotal = ecoNewCount * 100;
            calculateTotal();
        };
// Final calculation with confirmation slip calculation.
        function calculateTotal() {
            const firstInput = document.getElementById('first-count');
            const firstCount = parseInt(firstInput.value);
            const ecoInput = document.getElementById('eco-count');
            const ecoCount = parseInt(ecoInput.value);
            const totalPrice = firstCount * 150 + ecoCount * 100;
            document.getElementById('total-price').innerText = '$' + totalPrice;

            const tax = Math.round(totalPrice * 0.1);
            document.getElementById('tax-amount').innerText = '$' + tax;

            const grandTotal = totalPrice + tax;
            document.getElementById('grand-total').innerText = '$' + grandTotal;

            const confirmSubtotal = firstCount * 150 + ecoCount * 100;
            document.getElementById('confirm-subtotal').innerText = '$' + confirmSubtotal;

            const confirmTax = Math.round(totalPrice * 0.1);
            document.getElementById('confirm-tax').innerText = '$' + confirmTax;

            const confirmTotal = totalPrice + tax;
            document.getElementById('confirm-total').innerText = '$' + confirmTotal;
         };
 const n_adivinhar = getRndInteger(1, 100);

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function verificar() {
            const numero = document.getElementById('numero').value;

            
            if (parseInt(numero) === n_adivinhar) {
                alert("Você acertou!");
                location.reload();
            } else {
                alert(`Que pena. O número na verdade era ${n_adivinhar}.`);
                location.reload();
            }
        }
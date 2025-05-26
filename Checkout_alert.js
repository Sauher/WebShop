        const paymentAlert = document.getElementById('paymentAlert');
        const paymentForm = document.getElementById('paymentForm');
        const cardNumberInput = document.getElementById('cardNumber');
        const cardNameInput = document.getElementById('cardName');
        const cardExpiryInput = document.getElementById('cardExpiry');
        const cardCvvInput = document.getElementById('cardCvv');
        const Placeinput = document.getElementById('Placeinput');
        const Streetinput = document.getElementById('Streetinput');
        const Placenumberinput = document.getElementById('Placenumberinput');
        const Vasarlaskartyachip = document.getElementById('Vasarlas-kartya-chip')
       
        const cardPreview = document.getElementById('cardPreview');
        const previewCardNumber = document.getElementById('previewCardNumber');
        const previewCardName = document.getElementById('previewCardName');
        const previewCardExpiry = document.getElementById('previewCardExpiry');
        const cardLogo = document.getElementById('cardLogo');
        
       
        const visaIcon = document.getElementById('visaIcon');
        const mastercardIcon = document.getElementById('mastercardIcon');
        const amexIcon = document.getElementById('amexIcon');
        
        const cardPlaceError = document.getElementById('cardPlaceError');
        const cardStreetError = document.getElementById('cardStreetError');
        const cardPlacenumberError = document.getElementById('cardPlacenumberError');
        const cardPhoneError = document.getElementById('cardPhoneError');
        const cardNumberError = document.getElementById('cardNumberError');
        const cardNameError = document.getElementById('cardNameError');
        const cardExpiryError = document.getElementById('cardExpiryError');
        const cardCvvError = document.getElementById('cardCvvError');

        const flagDropdown = document.getElementById('flagDropdown');
        const flagOptions = document.getElementById('flagOptions');
        const selectedFlag = document.getElementById('selectedFlag');
        const countryCode = document.getElementById('countryCode');
        const phoneInput = document.getElementById('phoneInput');
               
      
        let currentPaymentResolve = null;
        let currentAmount = 0;
        
       
        function showPaymentAlert(amount = 0) {
            currentAmount = amount;
            paymentAlert.classList.add('active');
            
            setTimeout(() => {
                cardNumberInput.focus();
            }, 100);
            return new Promise((resolve) => {
                currentPaymentResolve = resolve;
            });
        }
        
      
        function Kilepes_alert() {
            paymentAlert.classList.remove('active');
            resetForm();
            if (currentPaymentResolve) {
                currentPaymentResolve({ status: 'cancelled' });
                currentPaymentResolve = null;
            }
        }
        
       
        function Vasarlas_elfogadas() {
            if (Informacioellenorzes()) {
                const paymentData = {
                    cardNumber: cardNumberInput.value.replace(/\s/g, ''),
                    cardName: cardNameInput.value,
                    cardExpiry: cardExpiryInput.value,
                    cardCvv: cardCvvInput.value,
                    amount: currentAmount
                };
                
               
                console.log('Processing payment:', paymentData);
                
               
                setTimeout(() => {
                    paymentAlert.classList.remove('active');
                    resetForm();
                    Megvasarlas();
                    if (currentPaymentResolve) {
                        currentPaymentResolve({ 
                            status: 'success',
                            data: paymentData
                        });
                        currentPaymentResolve = null;
                    }
                }, 500);
            }
        }
        
       
        function Informacioellenorzes() {
            let isValid = true;
            
            
            const cardNumber = cardNumberInput.value.replace(/\s/g, '');
            if (cardNumber == "1111111111111111") {
                cardNumberInput.classList.remove('error');
                cardNumberError.style.display = 'none';
                alert("Ez egy teszt kártyaszám, nem lehet vele vásárolni.");
            }
            else if (!cardNumber || !luhnCheck(cardNumber)){
                cardNumberInput.classList.add('error');
                cardNumberError.style.display = 'block';
                isValid = false;
            } else {
                cardNumberInput.classList.remove('error');
                cardNumberError.style.display = 'none';
            }
            
          
            if (!cardNameInput.value.trim()) {
                cardNameInput.classList.add('error');
                cardNameError.style.display = 'block';
                isValid = false;
            } else {
                cardNameInput.classList.remove('error');
                cardNameError.style.display = 'none';
            }
            
            
            const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
            if (!expiryRegex.test(cardExpiryInput.value)) {
                cardExpiryInput.classList.add('error');
                cardExpiryError.style.display = 'block';
                isValid = false;
            } else {
                cardExpiryInput.classList.remove('error');
                cardExpiryError.style.display = 'none';
            }
            
           
            const cvvRegex = /^[0-9]{3,4}$/;
            if (!cvvRegex.test(cardCvvInput.value)) {
                cardCvvInput.classList.add('error');
                cardCvvError.style.display = 'block';
                isValid = false;
            } else {
                cardCvvInput.classList.remove('error');
                cardCvvError.style.display = 'none';
            }
            
            if (!phoneInput.value.trim()) {
                phoneInput.classList.add('error');
                cardPhoneError.style.display = 'block';
                isValid = false;
            } else {
                phoneInput.classList.remove('error');
                cardPhoneError.style.display = 'none';
            }


            if (!Placeinput.value.trim()) {
                Placeinput.classList.add('error');
                cardPlaceError.style.display = 'block';
                isValid = false;
            } else {
                Placeinput.classList.remove('error');
                cardPlaceError.style.display = 'none';
            }

            if (!Streetinput.value.trim()) {
                Streetinput.classList.add('error');
                cardStreetError.style.display = 'block';
                isValid = false;
            } else {
                Streetinput.classList.remove('error');
                cardStreetError.style.display = 'none';
            }
            if (!Placenumberinput.value.trim()) {
                Placenumberinput.classList.add('error');
                cardPlacenumberError.style.display = 'block';
                isValid = false;
            } else {
                Placenumberinput.classList.remove('error');
                cardPlacenumberError.style.display = 'none';
            }
            


            return isValid;
        }
        cardNumberInput.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, ''); 
        });
        cardCvvInput.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, ''); 
        });
        cardExpiryInput.addEventListener('input', function () {
            let value = this.value.replace(/[^0-9]/g, '');
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            this.value = value.slice(0, 5); 
        });
        function Mastervasarlas() {

            cardNumberInput.value = '54'; 
            cardNumberInput.dispatchEvent(new Event('input')); 
    
        }
        function Paypalvasarlas(){
            Vasarlaskartyachip.style.backgroundImage = 'url("https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg")';
            Vasarlaskartyachip.style.backgroundSize = 'cover';
            Vasarlaskartyachip.style.backgroundPosition = 'center';
        }
        function Visavasarlas(){
            cardNumberInput.value = '4'; 
            cardNumberInput.dispatchEvent(new Event('input')); 
            
        }
        function resetForm() {
            paymentForm.reset();
            previewCardNumber.textContent = '•••• •••• •••• ••••';
            previewCardName.textContent = 'Telejes név';
            previewCardExpiry.textContent = '••/••';
            Vasarlaskartyachip.style.backgroundImage = 'none';
            
            document.querySelectorAll('.payment-form-input').forEach(input => {
                input.classList.remove('error');
            });
            document.querySelectorAll('.Vasarlasi_hiba').forEach(error => {
                error.style.display = 'none';
            });
            
            
            [visaIcon, mastercardIcon, amexIcon].forEach(icon => {
                icon.classList.remove('active');
            });
        }
        
       
        function luhnCheck(cardNumber) {
            let sum = 0;
            let alternate = false;
            
            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(cardNumber.charAt(i), 10);
                
                if (alternate) {
                    digit *= 2;
                    if (digit > 9) {
                        digit = (digit % 10) + 1;
                    }
                }
                
                sum += digit;
                alternate = !alternate;
            }
            
            return (sum % 10 === 0);
        }
        
       
        function detectCardType(cardNumber) {
            cardNumber = cardNumber.replace(/\s/g, '');

            if (/^4/.test(cardNumber)) {
                return 'visa';
            }
           
            else if (/^5[1-5]/.test(cardNumber)) {
                return 'mastercard';
            }
           
            else if (/^3[47]/.test(cardNumber)) {
                return 'amex';
            }
            else if (cardNumber === 'paypal') {
                return 'paypal';
            }

            
            
            return null;
        }
        
       
        function formatCardNumber(cardNumber) {
            const type = detectCardType(cardNumber);
            cardNumber = cardNumber.replace(/\s/g, '');
            
            if (type === 'amex') {
               
                return cardNumber.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3');
            } else {
              
                return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
            }
        }
        
       
        cardNumberInput.addEventListener('input', function(e) {
          
            this.value = formatCardNumber(this.value);
            
          
            if (this.value) {
                previewCardNumber.textContent = this.value + '•••• •••• •••• ••••'.substring(this.value.length);
            } else {
                previewCardNumber.textContent = '•••• •••• •••• ••••';
            }
            
            
            const cardType = detectCardType(this.value);
            
            
            if (cardType === 'visa') {
                
                Vasarlaskartyachip.style.backgroundImage = 'url("https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visa.svg")';
                Vasarlaskartyachip.style.backgroundSize = 'cover';
                Vasarlaskartyachip.style.backgroundPosition = 'center';
                
               
            } 
            else if (cardType === 'mastercard') {
                
                Vasarlaskartyachip.style.backgroundImage = 'url("https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mastercard.svg")';
                Vasarlaskartyachip.style.backgroundSize = 'cover';
                Vasarlaskartyachip.style.backgroundPosition = 'center';
                
            } 
            else if (cardType === 'amex') {
                
                Vasarlaskartyachip.style.backgroundImage = 'url("https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/americanexpress.svg")';
                Vasarlaskartyachip.style.backgroundSize = 'cover';
                Vasarlaskartyachip.style.backgroundPosition = 'center';
            }
            else if (cardType === 'paypal') {
                Vasarlaskartyachip.style.backgroundImage = 'url("https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg")';
                Vasarlaskartyachip.style.backgroundSize = 'cover';
                Vasarlaskartyachip.style.backgroundPosition = 'center';
        
            } 
            else {
                Vasarlaskartyachip.style.backgroundImage = 'none';
            }
        });
        
        cardNameInput.addEventListener('input', function(e) {
            previewCardName.textContent = this.value.toUpperCase() || 'CARDHOLDER NAME';
        });
        //CVV
        cardExpiryInput.addEventListener('input', function(e) {
           
            if (this.value.length === 2 && !this.value.includes('/')) {
                this.value = this.value + '/';
            }
            
           
            if (this.value) {
                previewCardExpiry.textContent = this.value + '••'.substring(this.value.length);
            } else {
                previewCardExpiry.textContent = '••/••';
            }
        });
         //telefonszám
        const countries = [
            { name: "Hungary", code: "HU", dialCode: "+36" },
            { name: "United States", code: "US", dialCode: "+1" },
            { name: "United Kingdom", code: "GB", dialCode: "+44" },
            { name: "Canada", code: "CA", dialCode: "+1" },
            { name: "Australia", code: "AU", dialCode: "+61" },
            { name: "Germany", code: "DE", dialCode: "+49" },
            { name: "France", code: "FR", dialCode: "+33" },
            { name: "Brazil", code: "BR", dialCode: "+55" },
            { name: "India", code: "IN", dialCode: "+91" },
            { name: "China", code: "CN", dialCode: "+86" },
            { name: "Japan", code: "JP", dialCode: "+81" },
            { name: "Russia", code: "RU", dialCode: "+7" },
            { name: "Mexico", code: "MX", dialCode: "+52" },
            { name: "South Africa", code: "ZA", dialCode: "+27" },
            { name: "Nigeria", code: "NG", dialCode: "+234" },
            { name: "Egypt", code: "EG", dialCode: "+20" }
            
        ];

        
        

        
        countries.forEach(country => {
            const option = document.createElement('div');
            option.className = 'flag-option';
            option.innerHTML = `
                <img src="https://flagcdn.com/w20/${country.code.toLowerCase()}.png" class="flag-icon">
                <span style="margin-right: 10px;">${country.name}</span>
                <span style="color: #888;">${country.dialCode}</span>
            `;
            
            option.addEventListener('click', () => {
                selectedFlag.src = `https://flagcdn.com/w20/${country.code.toLowerCase()}.png`;
                countryCode.textContent = country.dialCode;
                flagDropdown.classList.remove('open');
            });
            
            flagOptions.appendChild(option);
        });

       
        flagDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            flagDropdown.classList.toggle('open');
        });

       
        document.addEventListener('click', () => {
            flagDropdown.classList.remove('open');
        });

       
        flagOptions.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        phoneInput.addEventListener('input', function(e) {
            
            let value = this.value.replace(/\D/g, '');
            
           
            if (value.length > 3 && value.length <= 6) {
                value = value.replace(/(\d{2})(\d{1,2})/, '$1 $2');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{3})(\d{1,})/, '$1 $2 $3');
            }
            
            this.value = value;
        });
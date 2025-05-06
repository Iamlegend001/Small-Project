const priceDisplay = document.getElementById("price");

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function trackPrice() {
      const cryptoInput = document.getElementById("cryptoName");
      const crypto = cryptoInput.value.trim().toLowerCase();

      if (!crypto) {
        priceDisplay.innerHTML = `<span class="text-red-400">Please enter a cryptocurrency name.</span>`;
        return;
      }

      priceDisplay.innerHTML = `
        <div class="flex items-center justify-center gap-3 text-yellow-400">
          <svg class="animate-spin h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          Loading price...
        </div>
      `;

      try {
        await delay(1000);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`
        );
        const data = await response.json();

        if (data[crypto] && data[crypto].usd !== undefined) {
          priceDisplay.innerHTML = `
            <div class="text-green-400">
              ✅ <strong class="capitalize">${crypto}</strong> is
              <span class="text-white font-bold text-3xl">$${data[crypto].usd}</span>
            </div>
          `;
        } else {
          priceDisplay.innerHTML = `<span class="text-red-400">❌ Couldn’t find "${crypto}". Check the name.</span>`;
        }
      } catch (error) {
        priceDisplay.innerHTML = `<span class="text-red-500">⚠️ Error fetching data. Please try again.</span>`;
        console.error(error);
      }
    }
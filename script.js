// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const userInput = document.getElementById('userInput');
    const submitBtn = document.getElementById('submitBtn');
    const results = document.getElementById('results');
    const timeBtn = document.getElementById('timeBtn');
    const weatherBtn = document.getElementById('weatherBtn');
    const infoBtn = document.getElementById('infoBtn');
    const currentYear = document.getElementById('currentYear');
    
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Handle user input submission
    submitBtn.addEventListener('click', function() {
        const text = userInput.value.trim();
        if (text) {
            results.innerHTML = `<p>You entered: <strong>${text}</strong></p>`;
            userInput.value = '';
        } else {
            results.innerHTML = '<p class="error">Please enter some text</p>';
        }
    });
    
    // Allow submitting with Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    // Get current time
    timeBtn.addEventListener('click', function() {
        const now = new Date();
        results.innerHTML = `
            <p>Current time: <strong>${now.toLocaleTimeString()}</strong></p>
            <p>Current date: <strong>${now.toLocaleDateString()}</strong></p>
        `;
    });
    
    // Get mock weather data
    weatherBtn.addEventListener('click', function() {
        const weatherData = getMockWeatherData();
        results.innerHTML = `
            <div>
                <h4>Weather in ${weatherData.location}:</h4>
                <p>Temperature: ${weatherData.temperature}°C</p>
                <p>Condition: ${weatherData.condition}</p>
                <p>Humidity: ${weatherData.humidity}%</p>
                <p>Wind: ${weatherData.wind} km/h</p>
            </div>
        `;
    });
    
    // Get system info
    infoBtn.addEventListener('click', function() {
        const systemInfo = getSystemInfo();
        results.innerHTML = `
            <div>
                <h4>System Information:</h4>
                <p>Browser: ${systemInfo.browser}</p>
                <p>Operating System: ${systemInfo.os}</p>
                <p>Screen Resolution: ${systemInfo.screenResolution}</p>
                <p>Language: ${systemInfo.language}</p>
            </div>
        `;
    });
    
    // Helper function for mock weather data
    function getMockWeatherData() {
        const locations = ['New York', 'London', 'Tokyo', 'Sydney', 'Berlin'];
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy', 'Windy', 'Partly Cloudy'];
        
        return {
            location: locations[Math.floor(Math.random() * locations.length)],
            temperature: Math.floor(Math.random() * 35) - 5, // -5 to 30
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            humidity: Math.floor(Math.random() * 100),
            wind: Math.floor(Math.random() * 50)
        };
    }
    
    // Helper function for system info
    function getSystemInfo() {
        const userAgent = navigator.userAgent;
        let browser = 'Unknown';
        let os = 'Unknown';
        
        // Detect browser
        if (userAgent.indexOf('Firefox') > -1) {
            browser = 'Firefox';
        } else if (userAgent.indexOf('Chrome') > -1) {
            browser = 'Chrome';
        } else if (userAgent.indexOf('Safari') > -1) {
            browser = 'Safari';
        } else if (userAgent.indexOf('Edge') > -1) {
            browser = 'Edge';
        } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) {
            browser = 'Internet Explorer';
        }
        
        // Detect OS
        if (userAgent.indexOf('Windows') > -1) {
            os = 'Windows';
        } else if (userAgent.indexOf('Mac') > -1) {
            os = 'macOS';
        } else if (userAgent.indexOf('Linux') > -1) {
            os = 'Linux';
        } else if (userAgent.indexOf('Android') > -1) {
            os = 'Android';
        } else if (userAgent.indexOf('iOS') > -1) {
            os = 'iOS';
        }
        
        return {
            browser: browser,
            os: os,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language
        };
    }
    
    // This is where MCP browser tools integration could happen in the future
    window.mcpIntegration = {
        getData: function() {
            return {
                inputValue: userInput.value,
                lastResult: results.innerHTML
            };
        },
        setData: function(data) {
            if (data && data.text) {
                results.innerHTML = `<p>From MCP: ${data.text}</p>`;
                return true;
            }
            return false;
        }
    };
});
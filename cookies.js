// Define the expiration date (Expires in 7 days for all examples)
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);

const Cookie = {
    set: function(name, value, options = {}) {
        // Default options
        let defaults = {
            path: "/",
            domain: document.domain,
            secure: false,
            httpOnly: false,
            sameSite: "Lax"  // Default to Lax for better security
        };

        // Merge options with defaults
        options = { ...defaults, ...options };

        // Construct cookie string
        let cookieString = `${name}=${encodeURIComponent(value)}`;

        // Add optional attributes
        if (options.expires) {
            let expires = new Date(options.expires);
            cookieString += `; expires=${expires.toUTCString()}`;
        }
        if (options.path) cookieString += `; path=${options.path}`;
        if (options.domain) cookieString += `; domain=${options.domain}`;
        if (options.secure) cookieString += `; secure`;
        if (options.httpOnly) cookieString += `; HttpOnly`;
        if (options.sameSite) cookieString += `; SameSite=${options.sameSite}`;

        // Set the cookie
        document.cookie = cookieString;
    },

    get: function(name) {
        // Retrieve cookie value
        const cookieValue = this.getRaw(name);
        if (cookieValue) {
            return decodeURIComponent(cookieValue);
        }
        return null;
    },

    getRaw: function(name) {
        // Get raw cookie value
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    delete: function(name, options = {}) {
        // Set expiration time to delete cookie
        options.expires = new Date(0);
        this.set(name, "", options);
    }
};

// Example usage:


Cookie.set("userSettings", JSON.stringify({ theme: "dark", fontSize: "16px" }), {
    expires: expirationDate,
    path: "/",
    domain: "www.example.com",
    secure: true,
    httpOnly: true,
    sameSite: "Strict"
});

const storedSettings = JSON.parse(Cookie.get("userSettings"));
console.log(storedSettings);  // Outputs: { theme: "dark", fontSize: "16px" }

// Optionally, delete the cookie
// Cookie.delete("userSettings");


// Set the cookie for dark theme on LinkedIn
Cookie.set("theme", "dark", {
    expires: expirationDate,
    path: "/in/ramziosta",
    domain: "www.linkedin.com",
    secure: true,
    httpOnly: true,
    sameSite: "Strict"
});

// Optionally, retrieve the cookie value
const theme = Cookie.get("theme");
console.log(theme);  // Outputs: "dark"

const Cookie2 = {
    set: function(name, value, options = {}) {
        // Implementation details as previously discussed
        // ...
    },
    get: function(name) {
        // Implementation details as previously discussed
        // ...
    },
    delete: function(name, options = {}) {
        // Implementation details as previously discussed
        // ...
    }
};

// Example: Setting a cookie for theme preference on successful login
let app;
app.post('/login', (req, res) => {
    // Assuming authentication and other necessary checks are done

    // Set the cookie for dark theme preference
    Cookie.set("theme", "dark", {
        expires: expirationDate,
        path: "/",
        domain: "www.linkedin.com",  // Example domain
        secure: true,
        httpOnly: true,
        sameSite: "Strict"
    });

    // Redirect or respond as needed
    res.redirect('/dashboard');  // Example redirect to dashboard
});

// Setting a cookie

Cookie.set("theme", "dark", {
    expires: expirationDate,
    path: "/",
    domain: "www.example.com",
    secure: true,
    httpOnly: true,
    sameSite: "Strict"
});

// Deleting a cookie
Cookie.delete("theme", {
    path: "/",
    domain: "www.example.com",
    secure: true,
    httpOnly: true,
    sameSite: "Strict"
});
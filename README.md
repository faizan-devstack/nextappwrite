
## Login to view

Email: faizan@gmail.com,
password: 12345678


## Detailed Description

This application is built using Appwrite, Next.js, Tailwind CSS, and TypeScript, leveraging modern web development technologies to provide authentication, routing, and a responsive UI. The application follows a structured approach using the Context API for global state management, ensuring seamless authentication handling across different pages.

It includes a complex routing structure, efficiently managing protected routes and user redirection using Next.js's useRouter(). Authentication is powered by Appwrite, handling user sign-up, login, and session persistence. The UI is styled using Tailwind CSS, offering a scalable and maintainable design.

The application ensures best practices by managing state updates inside useEffect hooks to prevent React rendering issues. It also implements delayed navigation techniques (setTimeout, Promise.resolve(), or useEffect) to avoid conflicts between state updates and routing.


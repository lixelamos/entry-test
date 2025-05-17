Bug Explanation:

The login form had two main issues that prevented redirection after login:

1. Missing form submission handler: The original LoginForm component had a submit button but no event handler (onSubmit) to process the form submission. This meant clicking the login button didn't trigger any action.

2. Missing connection to parent component: The LoginForm component wasn't calling the onLogin prop function that would update the user state in the parent App component.

Fix: I added a handleSubmit function that prevents the default form submission behavior and calls the onLogin prop with the form data. I also connected this function to the form's onSubmit event. This allows the parent App component to update its state and conditionally render the Welcome component after login.

Image of the cypress tests
![alt text](<Screenshot 2025-05-17 at 20.05.12.png>)
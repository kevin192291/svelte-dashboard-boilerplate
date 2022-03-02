<script context="module">
    import { goto } from '$app/navigation';
    import { browser } from '$app/env';
    // import your user store here.

    // if (browser && $user)

    // Add your specific guard logic here, you need to include the 'browser' 
    //check otherwise Vite tries to process it on the server side
    if (browser) {
        // Use Goto to redirect users if neccessary
        console.log('loaded dash');
    }
</script>

<!--<slot> the same as router-outlet -->
<slot />
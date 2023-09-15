const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
      // Store the triggered events
      window.deferredPrompt = event;
   // Optionally: Update the UI to notify the user they can add to home screen
   butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
      // Hide our user interface that shows the "Install" button
   butInstall.style.display = 'none';

const promptEvent = window.deferredPrompt;
if (!promptEvent) {
    return;
}
 // Show prompt
promptEvent.prompt();
// Reset the deferred prompt variable, it can only be used once.
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear prompt
    window.deferredPrompt = null;   
});

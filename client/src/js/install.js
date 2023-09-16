const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update the install button's display
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide our user interface that shows the "Install" button
   butInstall.style.display = 'none';

  // Show the install prompt
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

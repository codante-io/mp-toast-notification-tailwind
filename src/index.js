window.onload = () => {
// GLOBAL ELEMENTS
const notificationTemplate = document.querySelector('#notification-template');
const containerNotifications = document.querySelector('#container-notifications');
const showNotificationButton = document.getElementById('btn-notification');
const notificationSound = new Audio('/sounds/mixkit-long-pop-2358.wav');

// FUNCTIONS
const showNotificationContent = () => {
	showNotificationButton.addEventListener('click', () => {
		// fzendo a notificação aparecer na tela
		const newNotificationId = `notification-${Math.floor(Math.random() * 1000)}`
		const newNotification = notificationTemplate.content.cloneNode(true);
		const dialog = newNotification.querySelector('dialog');
		dialog.id = newNotificationId;
		containerNotifications.appendChild(newNotification);

		// retirando notificação da tela+árvore DOM caso clique no botão "close", mas apenas 1 seg depois, que é o tempo que o transition leva para acontecer
		dialog.addEventListener('close', (event) => {
			setTimeout(() => {
			event.target.remove();
			}, 1000)
		});

		// tocando som de notificação
		notificationSound.play();

		setTimeout(() => {
			// retira notificação da tela após 5 segundos
			document.getElementById(newNotificationId).close();
		}, 5000)

	})
}
showNotificationContent();


}

// WINDOW ONLOAD
// window.onload = () => {
// 	showNotificationContent();
// };


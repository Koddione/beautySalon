export default {
	async fetch(request, env) {
		// CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'POST, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
			});
		}

		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', {
				status: 405,
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			});
		}

		try {
			const { name, telegram, instagram } = await request.json();
			const text = `📩 *Новая заявка с сайта!*

👤 *Имя:* ${name}
📱 *Telegram:* ${telegram}
📸 *Instagram:* ${instagram}

💡 _Пользователь заинтересовался курсами._`;

			const res = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: env.CHAT_ID,
					text,
					parse_mode: 'Markdown',
				}),
			});

			return new Response('OK', {
				status: res.ok ? 200 : 500,
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			});
		} catch (error) {
			console.error('Ошибка при отправке данных в Telegram:', error);
			return new Response('Error', {
				status: 500,
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			});
		}
	},
};

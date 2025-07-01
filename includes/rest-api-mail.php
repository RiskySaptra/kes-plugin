<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action('rest_api_init', function () {
	register_rest_route('kes/v1', '/send-mail', [
		'methods' => 'POST',
		'callback' => 'kes_handle_send_mail',
		'permission_callback' => '__return_true', // Replace with nonce in prod
	]);
});

function kes_handle_send_mail($request) {
	$data = $request->get_json_params();

	$to      = sanitize_email($data['email'] ?? '');
	$subject = sanitize_text_field($data['subject'] ?? '');
	$message = sanitize_textarea_field($data['message'] ?? '');

	if (!is_email($to) || empty($subject) || empty($message)) {
		return new WP_REST_Response(['success' => false, 'message' => 'Invalid input'], 400);
	}

	$headers = ['Content-Type: text/html; charset=UTF-8'];
	$sent = wp_mail($to, $subject, nl2br($message), $headers);

	return new WP_REST_Response([
		'success' => $sent,
		'message' => $sent ? 'Email sent successfully.' : 'Failed to send email.',
	]);
}

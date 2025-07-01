<?php
/**
 * Plugin Name:       KES Internal Block
 * Description:       Custom kes internal block
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.20
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kes-block
 *
 * @package KesInternalBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kes_internal_block_kes_block_block_init() {
	require_once __DIR__ . '/includes/rest-api-mail.php';
	// main page
	register_block_type( __DIR__ . '/build/main-page' );
 
	// product page
	register_block_type( __DIR__ . '/build/products-catalog-page' );

	// about page
	register_block_type( __DIR__ . '/build/about-page' );

	// contact us
	register_block_type( __DIR__ . '/build/contact-us-page' ); 

	// news
	register_block_type( __DIR__ . '/build/news-page' );
	


}
add_action( 'init', 'kes_internal_block_kes_block_block_init' );


<?php
/**
 * Plugin Name:       Static-kes-block
 * Description:       Custom kes internal block
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
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
	register_block_type( __DIR__ . '/build/banner-carousel' );
	register_block_type( __DIR__ . '/build/company-profile' );
	register_block_type( __DIR__ . '/build/our-product' );
	register_block_type( __DIR__ . '/build/why-us' );

	// product page
	register_block_type( __DIR__ . '/build/products-catalog' );
}
add_action( 'init', 'kes_internal_block_kes_block_block_init' );


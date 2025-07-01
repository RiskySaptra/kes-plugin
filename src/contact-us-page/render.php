<div
    id="contact-us-page"
    <?php echo get_block_wrapper_attributes([
        'data-block-attributes' => json_encode($attributes),
        'class' => 'not-prose !max-w-none'
    ]); ?>
>
    <?php echo do_shortcode('[forminator_form id="943"]'); ?>
</div>
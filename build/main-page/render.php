<div 
    <?php echo get_block_wrapper_attributes( [
        'data-block-attributes' => json_encode( $attributes ),
        'class' => 'not-prose !max-w-none' // Add custom class here
    ] ); ?> 
    id="main-page">
    <!-- Your block content goes here -->
</div>
function my_login_logo() { ?>
    <style type="text/css">
        .wp-core-ui .button-primary:hover {
            background: #9b3137 !important;
            border-color: #9b3137 !important;
            color: #fff;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

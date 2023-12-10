<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kafu' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ALEVbpxM%^d_1,L)7V$eAZjJ<dF+{CKT^}d^PCsUJVCmA Cxn2RhoJ9=h?({c{P)' );
define( 'SECURE_AUTH_KEY',  '0&M2r[RHnEJrU,YuF2t4ou#Bk:=A+.?-m&^J{p|+M!B!pq(G2&nFRKJjC6{*=aDf' );
define( 'LOGGED_IN_KEY',    '<t9+H~n.RKv{7L?0@NZ`Wy?>LluwrhYFr Gly[Cwkl(b>Y@e`Aw>!)B,cRN~>(q ' );
define( 'NONCE_KEY',        'hd9$|DV%8<D42Kh%ze;6.^dA/7YBV*]}lF]23/livxY(^krYNKDlCoF0jKSYDyFX' );
define( 'AUTH_SALT',        'Ui?$>N7)@}b Vp>11d6:@YAH)*UB$wqp9/f@m##X:# H72r;|j^WJ`j>9Pl)bsv=' );
define( 'SECURE_AUTH_SALT', 'cWT=1jwm6}Rt.rfD(V^;.r[8M2.yXLbrvQt9xozyfcK8u%0uida9(|eR]2)tfKu*' );
define( 'LOGGED_IN_SALT',   'Q^TV{ |s#=(]s!2MtuLUziQ69lzUzyIh!#!MK5kVmd-}!?caafMi!~tD(3skNgNP' );
define( 'NONCE_SALT',       'Cr(tYqp8YVCAL63OFTAvu(ANJCP%?4.U]/rnzv>K]AL,GT/~Q7CvvI|hM>zsfaZi' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

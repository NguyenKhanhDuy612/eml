<?php
# Database Configuration
define( 'DB_NAME', 'wp_emlerswim' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
// define( 'DB_HOST', '127.0.0.1:3306' );
// define( 'DB_HOST_SLAVE', '127.0.0.1:3306' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         'TQ:qk!mJjK+&kXVrE~9KpzEHce6c%!BP_/HSKe:&0t|zd r|Y;z9cV+B>5+I:W6%');
define('SECURE_AUTH_KEY',  'NR*MtMSjLL&Z*Eb=b@G]o$UNvF)1wK12yLT,[5-wAU+@$l.Kh,QvEO!o/L<f?)X{');
define('LOGGED_IN_KEY',    'lC#)-zg}ns,m?+s5XHnmt`/G$>bSMfG%ZmZjX8|*B~YV3$i-c$<sC+l~;UByB0=G');
define('NONCE_KEY',        'I]6h0X@a$xt(Q=Q;er2{j@Q$-@Bs=TknC^7mB,ga,y:0$a7a~D-?rOA1]87M*il:');
define('AUTH_SALT',        'DB2icgz) _JibWPj1S o5n}-CMXQN?|D}NyMbGnyQ$qqy-:Gp=c2(E|1g/O%9AA]');
define('SECURE_AUTH_SALT', 'Ds#.r|0&OJ$VSeH+zYg+)3sa-qw8D<m ;}8 +JN#p@CDxu@GjR}3ZMb!m+W+&1S/');
define('LOGGED_IN_SALT',   'M;-jsSm+^}Vx;juMmj/*_}8a^maUv_E2Ja;pby1zryujK.N/|>)ep6c!nb/>j(ew');
define('NONCE_SALT',       'I{yN+P9*<$l$KWC|@C(T.3,j1w3RDnfe 6pLruJsv68v=8eRwTvL++mvrCkNn_Rk');


# Localized Language Stuff

define( 'WP_CACHE', TRUE );

define( 'WP_AUTO_UPDATE_CORE', false );

define( 'PWP_NAME', 'emlerswim' );

define( 'FS_METHOD', 'direct' );

define( 'FS_CHMOD_DIR', 0775 );

define( 'FS_CHMOD_FILE', 0664 );

define( 'WPE_APIKEY', '6d6169531f4d974dd5c72006a7e656d3cd9cd1c7' );

define( 'WPE_CLUSTER_ID', '100414' );

define( 'WPE_CLUSTER_TYPE', 'pod' );

define( 'WPE_ISP', true );

define( 'WPE_BPOD', false );

define( 'WPE_RO_FILESYSTEM', false );

define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );

define( 'WPE_SFTP_PORT', 2222 );

define( 'WPE_SFTP_ENDPOINT', '' );

define( 'WPE_LBMASTER_IP', '' );

define( 'WPE_CDN_DISABLE_ALLOWED', true );

define( 'DISALLOW_FILE_MODS', FALSE );

define( 'DISALLOW_FILE_EDIT', FALSE );

define( 'DISABLE_WP_CRON', false );

define( 'WPE_FORCE_SSL_LOGIN', false );

define( 'FORCE_SSL_LOGIN', false );

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define( 'WPE_EXTERNAL_URL', false );

define( 'WP_POST_REVISIONS', FALSE );

define( 'WPE_WHITELABEL', 'wpengine' );

define( 'WP_TURN_OFF_ADMIN_BAR', false );

define( 'WPE_BETA_TESTER', false );

umask(0002);

$wpe_cdn_uris=array ( );

$wpe_no_cdn_uris=array ( );

$wpe_content_regexs=array ( );

$wpe_all_domains=array ( 0 => 'emlerswim.wpengine.com', 1 => 'emlerswim.wpenginepowered.com', );

$wpe_varnish_servers=array ( 0 => 'pod-100414', );

$wpe_special_ips=array ( 0 => '104.196.134.0', );

$wpe_netdna_domains=array ( );

$wpe_netdna_domains_secure=array ( );

$wpe_netdna_push_domains=array ( );

$wpe_domain_mappings=array ( );

$memcached_servers=array ( 'default' =>  array ( 0 => 'unix:///tmp/memcached.sock', ), );
define('WPLANG','');

# WP Engine ID


# WP Engine Settings






# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', __DIR__ . '/');
require_once(ABSPATH . 'wp-settings.php');


ini_set('display_errors', 'Off');
ini_set('error_reporting', E_ALL);
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);
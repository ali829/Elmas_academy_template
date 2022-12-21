<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9529d0fe5c5a3bd06801e329261d6c09
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9529d0fe5c5a3bd06801e329261d6c09::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9529d0fe5c5a3bd06801e329261d6c09::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9529d0fe5c5a3bd06801e329261d6c09::$classMap;

        }, null, ClassLoader::class);
    }
}

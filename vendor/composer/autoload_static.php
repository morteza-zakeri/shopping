<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5770dcdafaf99bdde209e6924a4bcda3
{
    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'palanik\\lumen\\Middleware\\' => 25,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'palanik\\lumen\\Middleware\\' => 
        array (
            0 => __DIR__ . '/..' . '/palanik/lumen-cors',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5770dcdafaf99bdde209e6924a4bcda3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5770dcdafaf99bdde209e6924a4bcda3::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
